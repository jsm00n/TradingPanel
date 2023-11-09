import { Text, Button } from '@tremor/react'
import { PlusIcon } from '@heroicons/react/outline'

const BannerRight = () => {
  return (
    <>
      <div className="relative flex">
        <Text className="my-auto text-xl">MC</Text>
        <p className="my-auto ml-2 text-xl text-white">62.48K</p>
        <Text className="my-auto ml-4 text-xl">Liquidity</Text>
        <p className="my-auto ml-2 mr-4 text-xl text-white">41.586K</p>
        <Button
          size="sm"
          variant="primary"
          className="my-auto mr-2 h-9 w-9 rounded-[24px] border bg-transparent p-1"
          color="slate"
          icon={PlusIcon}
        ></Button>
        <Button
          size="sm"
          variant="primary"
          className="my-auto mr-2 h-9 w-9 rounded-[24px] border bg-transparent p-1"
          color="slate"
          icon={PlusIcon}
        ></Button>
        <Button
          size="sm"
          variant="primary"
          className="my-auto mr-2 h-9 w-9 rounded-[24px] border bg-transparent p-1"
          color="slate"
          icon={PlusIcon}
        ></Button>
        <Button
          size="sm"
          variant="primary"
          className="my-auto mr-2 h-9 w-9 rounded-[24px] border bg-transparent p-1"
          color="slate"
          icon={PlusIcon}
        ></Button>
      </div>
    </>
  )
}

export default BannerRight
