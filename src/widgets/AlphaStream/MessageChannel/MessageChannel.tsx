import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { FilterIcon } from 'lucide-react';
import MessageItem from "./MessageItem"
import { Button } from '@/components/ui/button';
import { CiFilter } from "react-icons/ci";


const MessageChannel = () => {

    const message1 = {
        type: 'discord',
        text: 'Hello from Discord!',
    };

    const message2 = {
        type: 'telegram',
        text: 'Greetings from Telegram!',
    };

    return (
        <div className="flex-row w-full h-full pb-2 pl-2 pr-2 space-y-2">
            <div className="flex w-full justify-between">
                <Tabs className="w-full h-[30px]" defaultValue={"all"}>
                    <TabsList className="h-[30px] bg-card border button-gray-border border-solid">
                        <TabsTrigger className="h-[20px] data-[state=active]:bg-button-gray text-label-gray-foreground text-[12px] data-[state=active]:text-white font-normal" value="all">All</TabsTrigger>
                        <TabsTrigger className="h-[20px] data-[state=active]:bg-button-gray text-label-gray-foreground text-[12px] data-[state=active]:text-white font-normal" value="discord">Discord</TabsTrigger>
                        <TabsTrigger className="h-[20px] data-[state=active]:bg-button-gray text-label-gray-foreground text-[12px] data-[state=active]:text-white font-normal" value="telegram">Telegram</TabsTrigger>
                    </TabsList>
                    <Button className="my-auto w-8 h-8 float-right bg-button-gray border-button-gray-border border-solid hover:bg-transparent hover:text-white" size="icon" variant="outline">
                        <CiFilter className="text-white w-6 h-6"></CiFilter>
                    </Button>
                    <TabsContent value="all" className="flex-row space-y-2">
                        <MessageItem message={message1}></MessageItem>
                        <MessageItem message={message2}></MessageItem>
                        <MessageItem message={message1}></MessageItem>
                    </TabsContent>
                    <TabsContent value="discord">
                        <MessageItem message={message1}></MessageItem>
                        <MessageItem message={message1}></MessageItem>
                        <MessageItem message={message1}></MessageItem>
                    </TabsContent>
                    <TabsContent value="telegram">
                        <MessageItem message={message2}></MessageItem>
                        <MessageItem message={message2}></MessageItem>
                        <MessageItem message={message2}></MessageItem>
                    </TabsContent>
                </Tabs>

            </div>

        </div>
    )
}

export default MessageChannel
