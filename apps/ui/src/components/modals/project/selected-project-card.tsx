import * as React from 'react';
import Card from '../../../packages/ui/components/cards/Card';

const SelectedProjectCard: React.FC = () => {
    return (
        <div className="load-into-place-anim">
            <Card>
                <div className="p-3 pt-4 pb-4 w-[400px] flex flex-row items-center gap-3">
                    <div className="w-[50px] h-[50px] bg-primary-lighter rounded-md">

                    </div>
                    <div className="flex flex-col">
                        <div className="text-white font-semibold text-xl">
                            Cal.com
                        </div>
                        <div className="text-white font-medium text-s">
                            A scheduling infrastructure for everyone.
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SelectedProjectCard;