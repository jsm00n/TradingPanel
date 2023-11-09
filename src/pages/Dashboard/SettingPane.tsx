import { Flex, Button, TextInput, Select, SelectItem } from '@tremor/react'
import {
  LockClosedIcon,
  SearchIcon,
  CalculatorIcon
} from '@heroicons/react/outline'

type Props = {
  onReset: () => void
}

const SettingPane = ({ onReset }: Props) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (e.currentTarget == null) return

    switch (e.currentTarget.name) {
      case 'reset':
        onReset()
        break
    }
  }

  return (
    <Flex className="w-[550px]">
      <Button
        icon={LockClosedIcon}
        color="slate"
        size="sm"
        className="ml-5 rounded-md"
        name="reset"
        onClick={onClickHandler}
      >
        Layout
      </Button>
      <TextInput icon={SearchIcon} className="ml-2" placeholder="Search..." />
      <Select className="ml-2">
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
      <Button className="float-right ml-5 rounded-md" color="blue" size="sm">
        Export Template
      </Button>
    </Flex>
  )
}

export default SettingPane
