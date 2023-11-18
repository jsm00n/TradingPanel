import { Button } from "@/components/ui/button"
import {
    Card
} from "@/components/ui/card"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import CryptoPair from "components/CryptoPair/CryptoPair"
import { CiShare1 } from "react-icons/ci";
import { RiShareBoxLine } from "react-icons/ri";
import {
    PoolInfo
} from "global";
import {
    useBuy,
    useSell,
} from "hooks";
import { useBalance, useAccount } from "wagmi";

interface WatchItemProps {
    pool: PoolInfo;
}

const WatchItem: React.FC<WatchItemProps> = ({ pool }) => {

    const { address } = useAccount();

    const { data: dataForToken0 } = useBalance({
        address: `0x${address?.slice(2)}`,
        token: pool.token0Id ? `0x${pool.token0Id.slice(2)}` : undefined,
        watch: true,
    })

    const { data: dataForToken1 } = useBalance({
        address: `0x${address?.slice(2)}`,
        token: pool.token1Id ? `0x${pool.token1Id.slice(2)}` : undefined,
        watch: true,
    })

    const { write: writeForBuy } = useBuy({
        token0: pool.token0Id,
        feeTier: pool.feeTier,
        token1: pool.token1Id,
        address: address ?? "",
        maxSpendableAmount: dataForToken0 ? dataForToken0.value : BigInt(0)
    })

    const { write: writeForSell } = useSell({
        token0: pool.token0Id,
        feeTier: pool.feeTier,
        token1: pool.token1Id,
        address: address ?? "",
        maxSpendableAmount: dataForToken1 ? dataForToken1.value : BigInt(0),
    })

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (dataForToken0 === undefined || dataForToken1 === undefined)
            return;

        switch (e.currentTarget.name) {
            case "buy":
                {
                    let amount = window.prompt("Amount to buy", "0")
                    writeForBuy(BigInt(Number(amount) * Math.pow(10, dataForToken0.decimals)))
                    break;
                }
            case "sell":
                {
                    let amount = window.prompt("Amount to sell", "0")
                    writeForSell(BigInt(Number(amount) * Math.pow(10, dataForToken1.decimals)))
                    break;
                }
        }
    }

    const avatars: string[] = ["img_" + pool.token0Symbol.toLowerCase() + ".png", "img_" + pool.token1Symbol.toLowerCase() + ".png"];

    return (
        <div className="min-w-[370px] flex-col h-24 my-auto mb-2 rounded-sm bg-watchitem-background border-solid border-2 border-button-gray-border divide-y divide-solid">
            <div className="flex justify-between h-10 bg-watchitem-top-background">
                <div className="flex my-auto">

                    <Button
                        size="icon"
                        variant="ghost"
                        className="my-auto ml-1 mr-1 w-5 h-5 rounded-full hover:bg-transparent border-none text-gray-600"
                    >
                        <EllipsisVerticalIcon className="my-auto w-4 h-4"></EllipsisVerticalIcon>
                        <EllipsisVerticalIcon className="my-auto ml-[-0.6rem] w-4 h-4"></EllipsisVerticalIcon>
                    </Button>
                    <CryptoPair images={avatars} imageSize={5} space={-0.5} margin={2} title={pool.token0Symbol + '/' + pool.token1Symbol} fontsize={13} />
                </div>
                <div className="flex my-auto">
                    <Button
                        className="my-auto mr-2 rounded-sm w-16 h-6 text-[13px] font-normal bg-button-red text-button-red-foreground hover:bg-button-gray border-solid border border-button-red-border"
                        variant="outline"
                        size="sm"
                        name="sell"
                        onClick={onClickHandler}
                        disabled={dataForToken1 === undefined || Number(dataForToken1.value) == 0}>Sell</Button>
                    <Button
                        className="my-auto mr-3 rounded-sm w-16 h-6 text-[13px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                        variant="outline"
                        size="sm"
                        name="buy"
                        onClick={onClickHandler}
                        disabled={dataForToken0 === undefined || Number(dataForToken0.value) == 0}>Buy</Button>
                </div>
            </div>
            <div className="flex h-14 pl-2 pr-2">
                <table className="w-full mt-1 border-hidden border-spacing-y-0">
                    <thead>
                        <tr className="w-full border-hidden text-left text-gray-400">
                            <th className="w-1/5 font-normal text-[12px]">Pool</th>
                            <th className="w-1/5 font-normal text-[12px]">Market Cap</th>
                            <th className="w-1/5 font-normal text-[12px]">Holdings</th>
                            <th className="w-2/5 font-normal text-[12px]">Holding's value</th>
                        </tr>
                        <tr className="w-full border-hidden text-left">
                            <th className="font-normal text-[12px]">UniswapV3</th>
                            <th className="font-normal text-[12px]">{pool.volumeUSD}</th>
                            <th className="font-normal text-[12px]">{dataForToken1 !== undefined ? `${(Number(dataForToken1?.value) / Math.pow(10, dataForToken1?.decimals)).toPrecision(2)} ${dataForToken1.symbol}` : 0}</th>
                            <th className="font-normal text-[12px]">0-</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <Button
                    size="icon"
                    variant="ghost"
                    className="my-auto ml-1 w-5 h-5 rounded-full hover:bg-transparent border-none text-gray-600"
                >
                    <RiShareBoxLine className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}

export default WatchItem
