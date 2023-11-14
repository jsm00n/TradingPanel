import { Label } from "@/components/ui/label"
import StreamItem from "./StreamItem"

const StreamChannel = () => {
    return (
        <div className="w-full h-full p-2 space-y-2">
            <div className="flex w-full">
                <Label className="w-[30%] font-medium text-[13px] text-label-gray-foreground pl-4">Contract</Label>
                <Label className="w-[15%] text-center font-medium text-[13px] text-label-gray-foreground">Admin</Label>
                <Label className="w-[15%] text-center font-medium text-[13px] text-label-gray-foreground">Bot</Label>
                <Label className="w-[15%] text-center font-medium text-[13px] text-label-gray-foreground">Total</Label>
                <Label className="w-[25%] text-center font-medium text-[13px] text-label-gray-foreground pr-1">Action</Label>
            </div>
            <div className="overflow-y-auto space-y-2">
                <StreamItem></StreamItem>
                <StreamItem></StreamItem>
                <StreamItem></StreamItem>
                <StreamItem></StreamItem>
                <StreamItem></StreamItem>
                <StreamItem></StreamItem>
                <StreamItem></StreamItem>
            </div>
        </div>
    )
}

export default StreamChannel
