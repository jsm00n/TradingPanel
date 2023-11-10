import { Button } from "@/components/ui/button"
import {
    Card
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DotsVerticalIcon } from "@heroicons/react/outline"

const WatchItem = () => {
    return (
        <Card className="flex-col h-24 my-auto mb-2 rounded-sm bg-watchitem-background border-solid border-2 border-button-gray-border divide-y divide-solid">
            <div className="flex justify-between h-10 bg-watchitem-top-background">
                <div className="flex my-auto">
                    <Button className="my-auto w-8" variant="ghost" size="icon">
                        <DotsVerticalIcon className="my-auto w-4 h-4 text-gray-600"></DotsVerticalIcon>
                        <DotsVerticalIcon className="my-auto ml-[-0.6rem] w-4 h-4 text-gray-600"></DotsVerticalIcon>
                    </Button>
                    <div className="flex my-auto">
                        <img src="img_eth.png" alt="user.name" className="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white" loading="lazy" />
                        <img src="img_pepe.png" alt="user.name" className="ml-[-0.5rem] w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white" loading="lazy" />
                    </div>
                    <p className="my-auto ml-3 text-[14px] font-medium">WETH/PEPE</p>
                </div>
                <div className="flex my-auto">
                    <Button
                        className="my-auto mr-2 rounded-sm w-16 h-6 text-[13px] font-normal bg-button-red text-button-red-foreground hover:bg-button-gray border-solid border border-button-red-border"
                        variant="outline"
                        size="sm"
                        name="reset">Sell</Button>
                    <Button
                        className="my-auto mr-3 rounded-sm w-16 h-6 text-[13px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                        variant="outline"
                        size="sm"
                        name="reset">Buy</Button>
                </div>
            </div>
            <div className="flex h-14 pl-2">
                <table className="w-full mt-1 border-hidden border-spacing-y-0">
                    <thead>
                        <tr className="w-full border-hidden font-light text-[12px] text-left text-gray-400">
                            <th className="w-1/5">Pool</th>
                            <th className="w-1/5">Market Cap</th>
                            <th className="w-1/5">Holdings</th>
                            <th className="w-2/5">Holding's value</th>
                        </tr>
                        <tr className="w-full border-hidden font-light text-[12px] text-left">
                            <th>UniswapV3</th>
                            <th>$633.487M</th>
                            <th>0</th>
                            <th>0-</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default WatchItem
