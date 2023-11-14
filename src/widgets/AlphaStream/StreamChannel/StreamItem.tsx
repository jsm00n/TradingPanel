import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { DotsVerticalIcon } from "@heroicons/react/outline"
import CryptoPair from "components/CryptoPair/CryptoPair"

const StreamItem = () => {

    const images: string[] = ["img_eth.png", "img_pepe.png"];

    return (
        <div className="min-w-[350px] flex w-full my-auto bg-watchitem-top-background rounded-sm h-14 pt-2">
            <div className="flex-row w-[30%] my-auto pl-4">
                <CryptoPair images={images} imageSize={3.5} space={-0.2} margin={2} title="WETH/PEPE" fontsize={13} />
                <div className="w-[100px] truncate font-medium text-[13px] text-label-gray-foreground">0xEE86283a2DFCc1f52E86790e275e5b07b44A50E5</div>
            </div>
            <Label className="w-[15%] my-auto text-center font-normal text-[14px] text-card-foreground">1</Label>
            <Label className="w-[15%] my-auto text-center font-normal text-[14px] text-card-foreground">5</Label>
            <Label className="w-[15%] my-auto text-center font-normal text-[14px] text-card-foreground">9</Label>
            <div className="flex w-[25%] mx-auto my-auto justify-center">
                <Button
                    className="my-auto rounded-sm w-16 h-6 text-[13px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                    variant="outline"
                    size="sm"
                    name="snipe">Snipe</Button>
                <Button
                    size="icon"
                    variant="ghost"
                    className={`my-auto ml-1 w-5 h-5 rounded-full hover:bg-transparent border-none text-gray-600`}
                >
                    <DotsVerticalIcon />
                </Button>
            </div>
        </div >
    )
}

export default StreamItem
