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
      <div className="flex">
        <Select>
          <SelectTrigger className="my-auto ml-4 w-[130px] h-8 bg-button-gray rounded-sm border-solid border border-button-gray-border">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-button-gray w-[130px]">
            <SelectGroup>
              <SelectItem value="apple">PEPE/WETH</SelectItem>
              <SelectItem value="banana">PEPE/WETH</SelectItem>
              <SelectItem value="blueberry">PEPE/WETH</SelectItem>
              <SelectItem value="grapes">PEPE/WETH</SelectItem>
              <SelectItem value="pineapple">PEPE/WETH</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default BannerRight
