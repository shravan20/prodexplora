import * as React from 'react';
import { FaReact } from 'react-icons/fa';
import { Button } from '../../../packages/ui/components/buttons/Button';
import Props from './props.type';

const RepoSelectItem: React.FC<Props> = ({ data }) => {

    return (
        <div className="p-3 bg-darks-100 border-b-[1px] border-gray-500 hover:bg-darks-200 cursor-pointer transition-all flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4 items-center">
                <div className="w-8 h-8 bg-primary-lighter rounded-full flex items-center justify-center">
                    <FaReact color="#aaa" size="20" />
                </div>
                <div>
                    {data.name}
                </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
                <Button variant="button" color="subtle" size="sm">
                    <span className="text-s font-semibold">Choose</span>
                </Button>
            </div>
        </div>
    )
}

export default RepoSelectItem;
