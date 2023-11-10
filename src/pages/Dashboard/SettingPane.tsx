import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  LockClosedIcon,
  SearchIcon,
  CalculatorIcon
} from '@heroicons/react/outline'
import "./dashboard.css"

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
    <div className="flex flex-row">
      <div className="basis-1/4">
        <div className="flex">
          <Button
            size="sm"
            className="my-auto ml-3 rounded bg-button-gray text-button-gray-foreground border-solid border-button-gray-border"
            variant="outline"
            name="reset"
            onClick={onClickHandler}>
            <LockClosedIcon className="mr-2 h-4 w-4" />Layout
          </Button>
          <Input type="Search" className="ml-2 mr-1" placeholder="Search for components/actions" />
        </div>
      </div>
      <div className='basis-1/4'>
        <Select>
          <SelectTrigger className="ml-2 w-[150px] bg-button-gray rounded-sm border-solid border border-button-gray-border">
            <SelectValue placeholder="All Components" />
          </SelectTrigger>
          <SelectContent className="bg-button-gray">
            <SelectGroup>
              <SelectItem value="apple">Component 1</SelectItem>
              <SelectItem value="banana">Component 2</SelectItem>
              <SelectItem value="blueberry">Component 3</SelectItem>
              <SelectItem value="grapes">Component 4</SelectItem>
              <SelectItem value="pineapple">Component 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='basis-2/4'>
        <Button
          className="float-right mr-3 rounded-sm text-[13px] bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
          variant="outline"
          size="sm">
          Export Template
        </Button>
      </div>
    </div >
  )
}

export default SettingPane
