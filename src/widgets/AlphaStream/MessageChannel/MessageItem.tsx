import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PiCopy } from "react-icons/pi";

interface MessageItemProps {
    message: {
        type: string;
    }
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {

    const images: string[] = ["img_eth.png", "img_pepe.png"];

    return (
        <div className="flex-row w-full my-auto bg-watchitem-top-background border-solid border-2 border-button-gray-border rounded-sm h-32 pl-4 pr-4 pt-3">
            <div className="flex w-full justify-between">
                <div className="flex">

                    {message.type === 'discord' && (
                        <div className={`my-auto flex w-4 h-4 rounded-full bg-discord-icon-background justify-center items-center`}>
                            <img src="discord.svg" className="w-2.5 h-2.5" alt="Discord Logo" />
                        </div>
                    )}
                    {message.type === 'telegram' && (
                        <div className={`my-auto flex w-4 h-4 rounded-full bg-telegram-icon-background justify-center items-center`}>
                            <img src="telegram.svg" className="w-2.5 h-2.5" alt="Telegram Logo" />
                        </div>
                    )}
                    {/* Render the rest of the message */}
                    <Label className="my-auto max-w-[50%] ml-2 text-center font-medium text-[14px] text-card-foreground">DRBT AI Calls</Label>
                    <div className="my-auto ml-2 space-x-2">
                        <Button
                            className="my-auto rounded-[3px] p-2 h-4 text-[11px] font-normal bg-button-metamask/20 text-button-metamask-foreground border-solid border border-button-metamask-border"
                            variant="outline"
                            name="admin">
                            ADMIN
                        </Button>
                        <Button
                            className="my-auto rounded-[3px] p-2 h-4 text-[11px] font-normal bg-button-blue/20 text-button-metamask-foreground border-solid border border-button-blue-border"
                            variant="outline"
                            name="admin">
                            CA
                        </Button>
                    </div>
                </div>
                <div className="my-auto ml-2 space-x-2">
                    <Label className="my-auto text-center font-normal text-[13px] text-label-gray-foreground">Today at 5:53 PM</Label>
                    <Label className="my-auto text-center font-normal text-[13px] text-card-foreground">5s ago</Label>
                </div>
            </div>
            <div className="mt-3">
                <Label className="font-normal text-[14px]">Shuriken, Contract:   </Label>
            </div>
            <div className="flex my-auto w-full rounded-sm mt-2 pr-1.5 pl-1.5 pb-1 pt-1 bg-[#262c3f] justify-between">
                <Label className="my-auto text-[14px] ml-1 font-normal text-white/60">0xEE86283a2DFCc1f52E86790e275e5b07b44A50E5</Label>
                <Button
                    size="icon"
                    variant="ghost"
                    className="my-auto ml-1 w-6 h-6 rounded-full hover:bg-transparent border-none text-gray-600"
                >
                    <PiCopy className="w-5 h-5" />
                </Button>

            </div>
        </div >
    )
}

export default MessageItem
