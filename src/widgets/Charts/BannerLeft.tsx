import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const BannerRight = () => {
  return (
    <>
      <div className="relative flex">
        <Select>
          <SelectTrigger className="my-auto ml-3 w-[130px] h-8 bg-button-gray rounded-sm border-solid border border-button-gray-border">
            <SelectValue placeholder="PEPE/WETH" />
          </SelectTrigger>
          <SelectContent className="bg-button-gray w-[130px]">
            <SelectGroup>
              <SelectItem value="PEPEWETH">PEPE/WETH</SelectItem>
              <SelectItem value="PEPE3WETH">PEPE3/WETH</SelectItem>
              <SelectItem value="WETHPEPE">WETH/PEPE</SelectItem>
              <SelectItem value="WETHPEPE3">WETH/PEPE3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* <Button
          size="sm"
          variant="secondary"
          className="my-auto ml-2 h-10 w-10 rounded-[24px] border-none p-1"
          color="slate"
          icon={StarIcon}
        ></Button> */}
      </div>
    </>
  )
}

export default BannerRight
