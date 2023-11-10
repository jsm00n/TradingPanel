import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CalculatorIcon, StarIcon } from '@heroicons/react/outline'

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
              <SelectItem value="apple">PEPE/WETH</SelectItem>
              <SelectItem value="banana">PEPE/WETH</SelectItem>
              <SelectItem value="blueberry">PEPE/WETH</SelectItem>
              <SelectItem value="grapes">PEPE/WETH</SelectItem>
              <SelectItem value="pineapple">PEPE/WETH</SelectItem>
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
