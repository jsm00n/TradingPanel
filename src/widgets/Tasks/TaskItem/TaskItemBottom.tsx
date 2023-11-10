import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import TaskBottomDetailItem from "./TaskBottomDetail"
import React, { useState } from 'react'

const TaskItemBottom = () => {

    const [isExpanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div className="flex-row h-full pl-8 pr-4">
            <div className="flex my-auto h-10 justify-between space-x-3">
                <div className="flex my-auto space-x-4 text-[13px] font-medium">
                    <div className="my-auto">Defi Task</div>
                    <Separator className="h-6" orientation="vertical"></Separator>
                    <div className="flex my-auto">
                        <div>Wallets</div>
                        <Badge className="my-auto ml-1 pl-1.5 pr-1.5 pb-0 pt-0 bg-gray-600" variant="secondary">5</Badge>
                    </div>
                    <Separator className="h-6" orientation="vertical"></Separator>
                    <div className="my-auto">Total Wallet Balancer 0.2</div>
                </div>
                <Button
                    name="expand"
                    className="my-auto font-normal text-[12px]"
                    variant="link"
                    onClick={handleToggle}
                >
                    {isExpanded ? "Hide Task Details" : "Show Task Details"}
                </Button>
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
