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

const useBuy = ({ token0, feeTier, token1, address, maxSpendableAmount }: Props) => {
    const { config: configForApprove } = usePrepareContractWrite({
        address: `0x${token0.slice(2)}`,
        abi: ERC20,
        functionName: "approve",
        args: [
            "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
            maxSpendableAmount
        ]
    })

    const [loadingForBuy, setLoadingForBuy] = useState(false);

    const write = useCallback((amount: bigint) => {
        if (configForApprove === undefined)
            return;

        const fs = async () => {
            setLoadingForBuy(true)
            let allowance = await readContract({
                address: `0x${token0.slice(2)}`,
                abi: ERC20,
                functionName: "allowance",
                args: [
                    `0x${address.slice(2)}`,
                    "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                ]
            })
            if (allowance < amount) {
                try {
                    let { hash } = await writeContract(configForApprove);
                    await waitForTransaction({ hash });
                } catch (e) {
                    throw (e)
                }
            }

            let dataForBuy = undefined;
            try {
                let { hash } = await writeContract({
                    address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                    abi: SwapRouter,
                    functionName: "exactOutputSingle",
                    args: [
                        [
                            token0,
                            token1,
                            feeTier,
                            address,
                            amount,
                            maxSpendableAmount,
                            0
                        ]
                    ],
                });
                dataForBuy = await waitForTransaction({ hash })
            } catch (e) {
                throw (e)
            }

            setLoadingForBuy(false)

            return dataForBuy
        }
        fs();
    }, [token0, token1, feeTier, address, configForApprove])

    return { write, loadingForBuy };
};

export default useBuy;
