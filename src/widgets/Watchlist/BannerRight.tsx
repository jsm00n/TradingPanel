import { Badge } from '@/components/ui/badge'
const BannerRight = () => {
  return (
    <>
      <span className="mr-2 flex">
        <span className="my-auto mr-1 text-[13px]">
          Tokens Monitored
        </span>
        <Badge className="my-auto ml-1 pl-1.5 pr-1.5 pb-0 pt-0 bg-gray-600" variant="secondary">3</Badge>
      </span>
    </>
  )
}

export default BannerRight
