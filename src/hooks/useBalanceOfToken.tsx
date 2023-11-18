import { useContractRead } from "wagmi";
import { ERC20 } from "abis";

type Props = {
    token: `0x${string}` | undefined;
    address: `0x${string}` | undefined;
};

const useBalanceOfToken = ({ token, address }: Props) => {
    const { data, isSuccess } = useContractRead(
        token != `0x0000000000000000000000000000000000000000`
            ? {
                address: token,
                abi: ERC20,
                functionName: "balanceOf",
                args: [`0x${address?.slice(2)}`],
                watch: true,
                scopeKey: `useBalanceOfToken#${token}#${address}`,
            }
            : {}
    );

    return { data, isSuccess };
};

export default useBalanceOfToken;
