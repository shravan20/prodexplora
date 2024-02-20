import * as React from 'react';
import RepoSelectItem from './repo-select-item';

const SelectRepoBox: React.FC = () => {
    return (
        <div className="bg-darks-100 w-full border-[1px] border-gray-500 rounded-md shadow-primary-lighter overflow-hidden">
            <RepoSelectItem />
            <RepoSelectItem />
        </div>
    )
}

export default SelectRepoBox;