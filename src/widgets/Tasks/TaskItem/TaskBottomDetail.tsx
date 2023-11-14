import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useCollapse } from "react-collapsed";
import StatusButton from './StatusButton';

const TaskBottomDetailItem = ({ isActive }: { isActive: boolean }) => {

    const [isExpanded, setExpanded] = useState(isActive);
    const { getToggleProps, getCollapseProps } = useCollapse({
        isExpanded
    });

    React.useEffect(() => {
        setExpanded(isActive);
    }, [isActive, setExpanded]);

    return (
        <>
            <div {...getCollapseProps()}>

                <div className="flex mb-4 w-[400px]">
                    <table className="w-full mt-1 border-hidden border-spacing-y-0">
                        <thead>
                            <tr className="w-full border-hidden text-left text-gray-400">
                                <th className='text-[13px] font-normal'>Conditions</th>
                                <th className='text-[13px] font-normal'>Status</th>
                                <th className='text-[13px] font-normal'>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="w-full border-hidden font-light text-[12px] text-left">
                                <th className="text-[13px] font-normal">Revert Check</th>
                                <th>
                                    <StatusButton title="IDLE" state={0}></StatusButton>
                                </th>
                                <th className="text-[13px] font-normal">Error 2: This is an error message</th>
                            </tr>
                            <tr className="w-full border-hidden font-light text-[12px] text-left">
                                <th className="text-[13px] font-normal">Flip State</th>
                                <th className="text-[13px] font-normal">
                                    <StatusButton title="MONITORING" state={1}></StatusButton>
                                </th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Separator />
                <div className="mt-2 pb-2">
                    <Button
                        className="my-auto mr-2 rounded-sm h-6 text-[11px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                        variant="outline"
                        size="sm"
                        name="viewlog">View Logs</Button>
                    <Button
                        className="my-auto rounded-sm h-6 text-[11px] font-normal bg-button-blue text-button-blue-foreground border-solid border border-button-blue-border"
                        variant="outline"
                        size="sm"
                        name="viewwallet">View Wallets</Button>
                </div>
            </div>
        </>
    );
}

export default TaskBottomDetailItem