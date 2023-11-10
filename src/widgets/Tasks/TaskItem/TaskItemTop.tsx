import { Button } from "@/components/ui/button"
import { DotsVerticalIcon, PlayIcon, ShareIcon } from "@heroicons/react/outline"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

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
        <div className="flex h-16 justify-between pr-2 bg-watchitem-top-background">
            <div className="flex my-auto">
                <Button className="my-auto w-8" variant="ghost" size="icon">
                    <DotsVerticalIcon className="my-auto w-4 h-4 text-gray-600"></DotsVerticalIcon>
                    <DotsVerticalIcon className="my-auto ml-[-0.6rem] w-4 h-4 text-gray-600"></DotsVerticalIcon>
                </Button>
                <div className="flex my-auto w-10">
                    <img src="img_eth.png" alt="user.name" className="w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white" loading="lazy" />
                    <img src="img_pepe.png" alt="user.name" className="ml-[-0.5rem] w-6 h-6 rounded-full bg-slate-100 ring-1 ring-white" loading="lazy" />
                </div>
                <p className="my-auto ml-2 text-[14px] font-medium">WETH/PEPE</p>
                <div className="flex ml-4 min-w-[280px]">
                    <div className="grid grid-cols-5 w-full font-normal">
                        <div className="col-span-2">
                            <div className="text-[14px]">In &amp; Out</div>
                            <div className="text-[15px] font-medium">0.2 ~ 2.442B</div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-[14px]">Slippage</div>
                            <div className="text-[15px] font-medium">50%</div>
                        </div>
                        <div className="col-span-2 ml-2">
                            <div className="text-[14px]">Gas</div>
                            <div className="text-[15px] font-medium">1.84 | 33.73 | 380K</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-auto space-x-3">
                <Button
                    className="my-auto rounded-sm w-26 h-6 text-[13px] font-normal bg-button-metamask text-button-metamask-foreground border-solid border border-button-metamask-border"
                    variant="outline"
                    size="sm"
                    name="sell"
                    onClick={onClickHandler}>METAMASK</Button>

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
                        className="my-auto w-6 h-6 rounded-full border-none "
                    >
                        <ShareIcon />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="my-auto w-6 h-6 rounded-full border-none"
                    >
                        <DotsVerticalIcon />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default TaskItemTop
