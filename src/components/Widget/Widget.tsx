import React from 'react'
import { Card, Flex, Button } from '@tremor/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'

type Props = {
  title: string
  bannerLeft?: React.ReactNode
  bannerRight?: React.ReactNode
  children: React.ReactNode
}

const Widget = ({ title, bannerLeft, bannerRight, children }: Props) => {
  return (
    <Card className="h-full w-full bg-dark-400 p-0">
      <Flex className="draggableHandle h-16" alignItems="start">
        <div className="my-auto flex">
          <p className="my-auto pl-3 text-[18px] text-white">{title}</p>
          {bannerLeft}
        </div>
        <div className="my-auto flex pr-2">
          {bannerRight}
          <Button
            size="sm"
            variant="secondary"
            className="m-auto h-10 w-10 rounded-[24px] border-none p-1"
            color="slate"
            icon={DotsVerticalIcon}
          ></Button>
        </div>
      </Flex>
      <Flex>{children}</Flex>
    </Card>
  )
}

export default Widget
