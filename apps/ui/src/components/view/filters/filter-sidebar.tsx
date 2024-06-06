import * as React from 'react';
import FilterItem from './filter-item';

const FilterSidebar: React.FC = () => {
    return (
        <div className="w-[280px] h-full">
            <div className="text-lg font-semibold">
                Filters
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 ml-2">
                    <div className="text-base font-semibold pt-2 pb-2 uppercase ml-2">
                        Project Type
                    </div>
                    <div className="flex flex-col gap-2 ml-4 text-sm">
                        <FilterItem />
                        <FilterItem />
                        <FilterItem />
                    </div>
                </div>
                <div className="flex flex-col gap-2 ml-2">
                    <div className="text-base font-semibold pt-2 pb-2 uppercase ml-2">
                        Languages
                    </div>
                    <div className="flex flex-col gap-2 ml-4 text-sm">
                        <FilterItem />
                        <FilterItem />
                        <FilterItem />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FilterSidebar;
