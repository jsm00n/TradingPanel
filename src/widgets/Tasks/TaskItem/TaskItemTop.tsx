import { Button } from "@/components/ui/button"
import { DotsVerticalIcon, PlayIcon, ShareIcon } from "@heroicons/react/outline"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import StatusButton
    from "./StatusButton"
const TaskItemTop = () => {

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (e.currentTarget == null) return

        switch (e.currentTarget.name) {
            case 'sell':

                break
        }
    }

    return (
        <div className="flex-row m-md:flex h-22 m-md:h-16 m-md:justify-between pr-2 bg-watchitem-top-background">
            <div className="flex my-auto justify-center m-md:jutify-between">
                <Button className="my-auto w-8" variant="ghost" size="icon">
                    <DotsVerticalIcon className="my-auto w-4 h-4 text-gray-600"></DotsVerticalIcon>
                    <DotsVerticalIcon className="my-auto ml-[-0.6rem] w-4 h-4 text-gray-600"></DotsVerticalIcon>
                </Button>
                <div className="flex my-auto w-10">
                    <img src="img_eth.png" alt="user.name" className="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white" loading="lazy" />
                    <img src="img_pepe.png" alt="user.name" className="ml-[-0.5rem] w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white" loading="lazy" />
                </div>
                <div className="my-auto ml-2 text-[14px] font-medium">WETH/PEPE</div>
                {/* <table className="w-full ml-4 mt-2 m-md:mt-0 border-hidden border-spacing-y-0">
                    <thead>
                        <tr className="border-hidden text-left text-gray-400 ">
                            <th className='text-[11px] m-md:text-[14px] font-normal'>In &amp; Out</th>
                            <th className='text-[11px] m-md:text-[14px] font-normal'>Slippage</th>
                            <th className='text-[11px] m-md:text-[14px] font-normal'>Gas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-hidden text-[12px] m-md:text-[15px] font-normal text-left">
                            <td>0.2 ~ 2.442B</td>
                            <td>50%</td>
                            <td>1.84 | 33.73 | 380K</td>
                        </tr>
                    </tbody>
                </table> */}
                <div className="flex ml-4 mt-2 m-md:mt-0">
                    <div className="grid grid-cols-5 font-normal">
                        <div className="col-span-2">
                            <div className="text-[11px] m-md:text-[14px]">In &amp; Out</div>
                            <div className="text-[12px] m-md:text-[15px] font-normal">0.2 ~ 2.442B</div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-[11px] m-md:text-[14px]">Slippage</div>
                            <div className="text-[12px] m-md:text-[15px] font-normal">50%</div>
                        </div>
                        <div className="col-span-2 ml-2">
                            <div className="text-[11px] m-md:text-[14px]">Gas</div>
                            <div className="text-[12px] m-md:text-[15px] font-normal">1.84 | 33.73 | 380K</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-auto justify-center m-md:justify-between space-x-3">
                <Button
                    className="my-auto rounded-sm h-6 text-[13px] font-normal bg-button-metamask text-button-metamask-foreground border-solid border border-button-metamask-border"
                    variant="outline"
                    size="sm"
                    name="sell"
                    onClick={onClickHandler}>
                    <img className="mr-2" src="./metamask.svg" width={18} height={18} />
                    METAMASK
                </Button>

                <Separator className="h-10" orientation="vertical"></Separator>

                <div className="flex my-auto space-x-2">
                    <Button
                        className="my-auto rounded-xl w-18 h-6 text-[13px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                        variant="outline"
                        size="sm"
                        name="buy"
                        onClick={onClickHandler}>Execute</Button>
                    <Switch></Switch>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="my-auto w-6 h-6 rounded-full border-none"
                    >
                        <PlayIcon />
                    </Button>
                </div>
                <Separator className="h-10" orientation="vertical"></Separator>
                <div className="flex my-auto space-x-2 text-gray-600">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="my-auto w-6 h-6 rounded-full hover:bg-transparent border-none bg-none"
                    >
                        <ShareIcon />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="my-auto w-6 h-6 rounded-full hover:bg-transparent border-none"
                    >
                        <DotsVerticalIcon />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default TaskItemTop
