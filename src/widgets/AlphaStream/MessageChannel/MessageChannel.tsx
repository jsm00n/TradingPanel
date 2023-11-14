import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { FilterIcon } from 'lucide-react';
import MessageItem from "./MessageItem"
import { Button } from '@/components/ui/button';
import { CiFilter } from "react-icons/ci";


const MessageChannel = () => {

    const [tabIndex, setTabIndex] = useState("0");

    return (
        <div className="flex-row w-full h-full pb-2 pl-2 pr-2 space-y-2">
            <div className="flex w-full justify-between">
                <Tabs className="w-[160px] h-[30px]" defaultValue={tabIndex}>
                    <TabsList className="h-[30px] bg-card border button-gray-border border-solid">
                        <TabsTrigger className="h-[20px] data-[state=active]:bg-button-gray text-label-gray-foreground text-[12px] data-[state=active]:text-white font-normal" value="0">All</TabsTrigger>
                        <TabsTrigger className="h-[20px] data-[state=active]:bg-button-gray text-label-gray-foreground text-[12px] data-[state=active]:text-white font-normal" value="1">Discord</TabsTrigger>
                        <TabsTrigger className="h-[20px] data-[state=active]:bg-button-gray text-label-gray-foreground text-[12px] data-[state=active]:text-white font-normal" value="2">Telegram</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Button className="my-auto w-8 h-8 bg-button-gray border-button-gray-border border-solid hover:bg-transparent hover:text-white" size="icon" variant="outline">
                    <CiFilter className="text-white w-6 h-6"></CiFilter>
                </Button>
            </div>
            <div className="flex-row space-y-2">
                <MessageItem></MessageItem>
                <MessageItem></MessageItem>
                <MessageItem></MessageItem>
            </div>
        </div>
    )
}

export default MessageChannel
