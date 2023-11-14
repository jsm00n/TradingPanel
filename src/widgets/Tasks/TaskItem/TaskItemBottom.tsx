import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import TaskBottomDetailItem from "./TaskBottomDetail"
import { useState } from 'react'
import { MdWarning } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const TaskItemBottom = () => {

    const [isExpanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div className="flex-row h-full pl-5 pr-4">
            <div className="flex my-auto h-10 justify-between space-x-3">
                <div className="flex my-auto space-x-4 font-normal">
                    <div className="my-auto text-[11px] m-md:text-[13px]">Defi Task</div>
                    <Separator className="h-6" orientation="vertical"></Separator>
                    <div className="flex my-auto">
                        <div className="text-[11px] m-md:text-[13px]">Wallets</div>
                        <Badge className="my-auto ml-1 pl-1.5 pr-1.5 pb-0 pt-0 bg-gray-600" variant="secondary">5</Badge>
                    </div>
                    <Separator className="h-6" orientation="vertical"></Separator>
                    <div className="my-auto text-[11px] m-md:text-[13px]">Total Wallet Balance 0.2</div>
                </div>
                <div className="flex">
                    <Button className="my-auto pl-1.5 pr-1.5 pt-0 pb-0 h-4.5  rounded-lg bg-yellow-600 text-white font-normal text-[10px] m-md:text-[11px]">
                        <MdWarning className="my-auto w-3 h-3 mr-1"></MdWarning>
                        2 Warnings
                    </Button>
                    <Button
                        name="expand"
                        className="my-auto font-normal text-[11px] m-md:text-[12px]"
                        variant="link"
                        onClick={handleToggle}
                    >
                        {isExpanded ? "Hide Task Details" : "Show Task Details"}
                    </Button>
                    {isExpanded ? <IoIosArrowUp className="my-auto"></IoIosArrowUp> : <IoIosArrowDown className="my-auto"></IoIosArrowDown>}
                </div>
            </div >
            {isExpanded ? <Separator className="w-full" orientation="horizontal"></Separator> : <></>}
            <TaskBottomDetailItem isActive={isExpanded} />
        </div>
    )
}

interface TaskItemBottomProps {
    handleToggle: () => void;
    isExpanded: boolean;
}

export default TaskItemBottom
