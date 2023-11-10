import { Button } from '@/components/ui/button'
import { PlusIcon } from '@heroicons/react/outline'
import { Plus } from 'lucide-react'

const BannerRight = () => {
  return (
    <>
      <div className="relative flex">
        <span className="my-auto text-xs m-md:text-sm text-gray-500">MC</span>
        <p className="my-auto ml-2 text-xs m-md:text-sm">$62.48K</p>
        <span className="my-auto ml-4 text-xs m-md:text-sm text-gray-500">Liquidity</span>
        <p className="my-auto ml-2 mr-4 text-xs m-md:text-sm ">$41.586K</p>
        {/* <Button
          size="sm"
          variant="outline"
          className="my-auto mr-2 h-7 w-7 rounded-full border bg-transparent p-1"
          color="slate"
        >
          <PlusIcon />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="my-auto mr-2 h-7 w-7 rounded-full border bg-transparent p-1"
          color="slate"
        >
          <PlusIcon />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="my-auto mr-2 h-7 w-7 rounded-[24px] border bg-transparent p-1"
          color="slate"
        >
          <PlusIcon />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="my-auto mr-2 h-7 w-7 rounded-[24px] border bg-transparent p-1"
          color="slate"
        >
          <PlusIcon />
        </Button> */}
      </div>
    </>
  )
}

export default BannerRight
