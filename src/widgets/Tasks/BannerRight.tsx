import { PlusIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'

const BannerRight = () => {

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (e.currentTarget == null) return

    switch (e.currentTarget.name) {
      case 'reset':

        break
    }
  }

  return (
    <>
      <Button
        className="my-auto float-right mr-3 rounded-sm h-8 text-[12px] bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
        variant="outline"
        size="sm"
        name="reset"
        onClick={onClickHandler}>
        New Task<PlusIcon className="ml-2 h-4 w-4" />
      </Button>
    </>
  )
}

export default BannerRight
