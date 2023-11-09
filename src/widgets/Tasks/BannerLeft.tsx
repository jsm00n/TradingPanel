import { Select, SelectItem } from '@tremor/react'
import { CalculatorIcon } from '@heroicons/react/outline'

const BannerRight = () => {
  return (
    <>
      <div className="relative">
        <Select className="ml-4">
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
      </div>
    </>
  )
}

export default BannerRight
