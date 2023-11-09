import { Button, Badge } from '@tremor/react'
import { CogIcon } from '@heroicons/react/outline'

const BannerRight = () => {
  return (
    <>
      <span className="mr-3 flex">
        <img className="mr-2" src="./telegram.svg" width={24} height={24} />
        <span className="my-auto mr-1 text-[15px] text-white">Telegram</span>
        <Badge color="slate" className="my-auto h-6 w-6 px-2 text-white">
          5
        </Badge>
      </span>
      <span className="mr-3 flex">
        <img className="mr-2" src="./discord.svg" width={20} height={20} />
        <span className="my-auto mr-1 text-[15px] text-white">Discord</span>
        <Badge color="slate" className="my-auto h-6 w-6 px-2 text-white">
          5
        </Badge>
      </span>
      <Button
        size="sm"
        variant="secondary"
        className="m-auto h-10 w-10 rounded-[24px] border-none p-1"
        color="slate"
        icon={CogIcon}
      ></Button>
    </>
  )
}

export default BannerRight
