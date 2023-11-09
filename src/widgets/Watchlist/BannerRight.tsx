import { Badge } from '@tremor/react'

const BannerRight = () => {
  return (
    <>
      <span className="mr-2 flex">
        <span className="my-auto mr-1 text-[15px] text-white">
          Tokens Monitored
        </span>
        <Badge color="slate" className="my-auto h-6 w-6 px-2 text-white">
          5
        </Badge>
      </span>
    </>
  )
}

export default BannerRight
