import React from 'react'
import {
  Card
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DotsVerticalIcon } from '@heroicons/react/outline'
import './widget.css'

type Props = {
  title: string
  bannerLeft?: React.ReactNode
  bannerRight?: React.ReactNode
  children: React.ReactNode
}

const Widget = ({ title, bannerLeft, bannerRight, children }: Props) => {
  return (
    <Card className="h-full w-full">
      <div className="flex justify-between draggableHandle h-14">
        <div className="flex">
          <p className="my-auto pl-3 text-[16px] font-medium">{title}</p>
          {bannerLeft}
        </div>
        <div className="my-auto flex pr-2">
          {bannerRight}
          <Button
            size="icon"
            variant="ghost"
            className="my-auto h-8 w-7"
          >
            <DotsVerticalIcon className="h-14 w-5"></DotsVerticalIcon>
          </Button>
        </div>
      </div>
      <div className="flex">{children}</div>
    </Card>
  )
}

export default Widget
