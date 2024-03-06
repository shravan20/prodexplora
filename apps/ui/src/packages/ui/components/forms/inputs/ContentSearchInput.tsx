import * as React from 'react';
import { GoSearch } from 'react-icons/go';

type Props = {
    searchInputPlaceholder: string
}

const ContentSearchInput: React.FC = (props: Props) => {
    return (
        <div className="bg-darks-100 p-3 flex flex-row items-center gap-2 rounded-md border-[1px] border-gray-500 shadow-primary hover:shadow-lg transition-all">
            <GoSearch size={20} className="text-info" />
            <input type="text" className="bg-darks-100 outline-none w-full" placeholder={props.searchInputPlaceholder} />
        </div>
    )
}

export default ContentSearchInput;