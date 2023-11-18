import React, { useState, useEffect, useCallback } from "react";
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi";
import {
    readContract,
    prepareWriteContract,
    writeContract,
    waitForTransaction,
} from "@wagmi/core";
import { ERC20, SwapRouter } from "abis";

type Props = {
    token0: string;
    feeTier: number;
    token1: string;
    address: string;
    maxSpendableAmount: bigint;
};

const useSell = ({ token0, feeTier, token1, maxSpendableAmount, address }: Props) => {
    const { config: configForApprove } = usePrepareContractWrite({
        address: `0x${token1.slice(2)}`,
        abi: ERC20,
        functionName: "approve",
        args: [
            "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
            maxSpendableAmount
        ]
    })

    const [loadingForSell, setLoadingForSell] = useState(false);

    const write = useCallback((amount: bigint) => {
        if (configForApprove === undefined)
            return;

        const fs = async () => {
            setLoadingForSell(true)
            let allowance = await readContract({
                address: `0x${token1.slice(2)}`,
                abi: ERC20,
                functionName: "allowance",
                args: [
                    `0x${address.slice(2)}`,
                    "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                ]
            })
            if (allowance < amount) {
                console.log(configForApprove)
                try {
                    let { hash } = await writeContract(configForApprove);
                    await waitForTransaction({ hash });
                } catch (e) {
                    throw (e)
                }
            }

            let dataForSell = undefined;
            try {
                let { hash } = await writeContract({
                    address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                    abi: SwapRouter,
                    functionName: "exactInputSingle",
                    args: [
                        [
                            token1,
                            token0,
                            feeTier,
                            address,
                            amount,
                            0,
                            0
                        ]
                    ],
                });
                dataForSell = await waitForTransaction({ hash })
            } catch (e) {
                throw (e)
            }

            setLoadingForSell(false)

            return dataForSell
        }
        fs();
    }, [token0, token1, feeTier, address, configForApprove])

    return { write, loadingForSell };
};

export default useSell;
