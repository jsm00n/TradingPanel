import {
    Button
} from "@/components/ui/button"

interface StatusButtonProps {
    title: string;
    state: number;
}

const StatusButton: React.FC<StatusButtonProps> = ({ title, state }) => {

    const statusColors: { [key: number]: string } = {
        0: 'bg-yellow-500',
        1: 'bg-green-500',
        2: 'bg-blue-500',
    };

    const bgColor = statusColors[state];

    return (
        <Button
            className="my-auto rounded-sm pl-2 pr-2 h-4 text-[10px] bg-button-gray text-button-gray-foreground"
            variant="ghost">
            {title}
            <div className={`w-2 h-2 ml-2 rounded-full ${bgColor}`}></div>
        </Button>
    )
}

export default StatusButton
