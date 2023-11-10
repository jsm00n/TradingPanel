import {
    Card
} from "@/components/ui/card"

import TaskItemTop from './TaskItemTop';
import TaskItemBottom from './TaskItemBottom';
import { Separator } from "@/components/ui/separator"

const TaskItem = () => {

    return (
        <Card className="flex-col h-min my-auto rounded-sm bg-watchitem-background border-solid border-2 border-button-gray-border divide-y divide-solid">
            <TaskItemTop></TaskItemTop>
            <TaskItemBottom></TaskItemBottom>
        </Card>
    )
}

export default TaskItem
