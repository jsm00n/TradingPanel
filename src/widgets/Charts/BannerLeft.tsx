import { Select, SelectItem, Button } from '@tremor/react'
import { CalculatorIcon, StarIcon } from '@heroicons/react/outline'

const BannerRight = () => {
  return (
    <>
      <div className="relative flex">
        <Select className="ml-4" defaultChecked={true}>
          <SelectItem value="1" icon={CalculatorIcon}>
            Kilometers
          </SelectItem>
          <SelectItem value="2" icon={CalculatorIcon}>
            Meters
          </SelectItem>
          <SelectItem value="3" icon={CalculatorIcon}>
            Miles
          </SelectItem>
          <SelectItem value="4" icon={CalculatorIcon}>
            Nautical Miles
          </SelectItem>
        </Select>
        <Button
          size="sm"
          variant="secondary"
          className="my-auto ml-2 h-10 w-10 rounded-[24px] border-none p-1"
          color="slate"
          icon={StarIcon}
        ></Button>
      </div>
    </>
  )
}

export default BannerRight
