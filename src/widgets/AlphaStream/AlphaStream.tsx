import { Widget } from 'components'
import React, { useState } from 'react';
import BannerRight from './BannerRight'
import "./alphastream.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StreamChannel from "./StreamChannel/StreamChannel"
import MessageChannel from './MessageChannel/MessageChannel';

const AlphaStream = () => {

  const [tabIndex, setTabIndex] = useState("2");

  const handleChangeIndex = (index: string) => {
    console.log(index);
    setTabIndex(index);
  };

  return (
    <Widget title={`AlphaStream`} setting={true} bannerRight={<BannerRight />}>
      <div className="flex-row w-full h-full">
        <Tabs className="w-full h-[40px]" defaultValue={tabIndex}>
          <TabsList className="w-full rounded-none bg-card">
            <TabsTrigger className="w-full rounded-none data-[state=active]:bg-card text-label-gray-foreground text-[15px] data-[state=active]:text-white font-medium" value="0">Live Feed</TabsTrigger>
            <TabsTrigger className="w-full rounded-none data-[state=active]:bg-card text-label-gray-foreground text-[15px] data-[state=active]:text-white font-medium" value="1">Tickers</TabsTrigger>
            <TabsTrigger className="w-full rounded-none data-[state=active]:bg-card text-label-gray-foreground text-[15px] data-[state=active]:text-white font-medium" value="2">Channels</TabsTrigger>
          </TabsList>
          <TabsContent value="0">
            <MessageChannel />
          </TabsContent>
          <TabsContent value="1">
            <StreamChannel />
          </TabsContent>
          <TabsContent value="2">
          </TabsContent>
        </Tabs>
      </div>
    </Widget >
  )
}

export default AlphaStream
