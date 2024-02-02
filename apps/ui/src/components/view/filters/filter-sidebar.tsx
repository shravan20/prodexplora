import * as React from 'react'
import FilterItem from './filter-item';

const FilterSidebar: React.FC = () => {
    return (
        <div className="w-[280px] h-full">
            <div className="text-lg font-semibold">
                Filters
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                <div className="text-m font-semibold pt-2 pb-2 uppercas">
                    Project Type
                </div>
                <div className="flex flex-col gap-2">
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-m font-semibold pt-2 pb-2 uppercas">
                    Languages
                </div>
                <div className="flex flex-col gap-2">
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
