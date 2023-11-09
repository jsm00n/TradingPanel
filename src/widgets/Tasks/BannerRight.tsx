import { Button } from '@tremor/react'
import { PlusIcon } from '@heroicons/react/outline'

const BannerRight = () => {
  return (
    <>
      <Button
        icon={PlusIcon}
        color="blue"
        size="xs"
        iconPosition="right"
        className="mr-2 rounded-md"
        name="reset"
      >
        New task
      </Button>
    </>
  )
}

export default BannerRight
