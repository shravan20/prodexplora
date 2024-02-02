import * as React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { GoCheck } from 'react-icons/go';

const FilterItem: React.FC = () => {
    return (
        <div className="w-full pt-1 pb-1 flex flex-row items-center gap-2">
            <Checkbox.Root
                className="hover:bg-violet3 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-info outline-none focus:shadow-[0_0_0_2px_black]"
                id="c1"
            >
                <Checkbox.Indicator className="text-secondary">
                    <GoCheck />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="text-s font-medium">Boostrapped</span>
        </div>
    )
}


export default FilterItem;