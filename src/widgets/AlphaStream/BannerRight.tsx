import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const BannerRight = () => {
  return (
    <div className={`flex ${'hidden m-md:inline-flex'}`}>
      <span className="mr-3 flex">
        <img className="mr-2" src="./telegram.svg" width={24} height={24} />
        <span className="my-auto mr-1 text-[13px]">Telegram</span>
        <Badge className="my-auto ml-1 pl-1.5 pr-1.5 pb-0 pt-0 bg-gray-600" variant="secondary">10</Badge>
      </span>
      <span className="mr-3 flex">
        <img className="mr-2" src="./discord.svg" width={20} height={20} />
        <span className="my-auto mr-1 text-[13px]">Discord</span>
        <Badge className="my-auto ml-1 pl-1.5 pr-1.5 pb-0 pt-0 bg-gray-600" variant="secondary">9</Badge>
      </span>
      {/* <Button
        size="sm"
        variant="secondary"
        className="m-auto h-10 w-10 rounded-[24px] border-none p-1"
        color="slate"
        icon={CogIcon}
      ></Button> */}
    </div>
  )
}

export default BannerRight
