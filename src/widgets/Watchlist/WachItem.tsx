import { Button } from "@/components/ui/button"
import {
    Card
} from "@/components/ui/card"
import { DotsVerticalIcon } from "@heroicons/react/outline"
import CryptoPair from "components/CryptoPair/CryptoPair"
import { CiShare1 } from "react-icons/ci";
import { RiShareBoxLine } from "react-icons/ri";

const WatchItem = () => {

    const avatars: string[] = ["img_eth.png", "img_pepe.png"];

    return (
        <div className="min-w-[370px] flex-col h-24 my-auto mb-2 rounded-sm bg-watchitem-background border-solid border-2 border-button-gray-border divide-y divide-solid">
            <div className="flex justify-between h-10 bg-watchitem-top-background">
                <div className="flex my-auto">

                    <Button
                        size="icon"
                        variant="ghost"
                        className="my-auto ml-1 mr-1 w-5 h-5 rounded-full hover:bg-transparent border-none text-gray-600"
                    >
                        <DotsVerticalIcon className="my-auto w-4 h-4"></DotsVerticalIcon>
                        <DotsVerticalIcon className="my-auto ml-[-0.6rem] w-4 h-4"></DotsVerticalIcon>
                    </Button>
                    <CryptoPair images={avatars} imageSize={5} space={-0.5} margin={2} title={"WETH/PEPE"} fontsize={13} />
                </div>
                <div className="flex my-auto">
                    <Button
                        className="my-auto mr-2 rounded-sm w-16 h-6 text-[13px] font-normal bg-button-red text-button-red-foreground hover:bg-button-gray border-solid border border-button-red-border"
                        variant="outline"
                        size="sm"
                        name="sell">Sell</Button>
                    <Button
                        className="my-auto mr-3 rounded-sm w-16 h-6 text-[13px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                        variant="outline"
                        size="sm"
                        name="buy">Buy</Button>
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
                            <th className="font-normal text-[12px]">$633.487M</th>
                            <th className="font-normal text-[12px]">0</th>
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
