import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Button } from '../../../../packages/ui/components/buttons/Button';
import ContentSearchInput from '../../../../packages/ui/components/forms/inputs/ContentSearchInput';
import SelectRepoBox from '../../../forms/createProject/select-repo-box';

type RepositoryData = {
    title: string,
    description: string,
    slug: string,
    technologies: [
        string
    ],
}

type Props = {
    setStage: () => void;
    handleSelectRepo: (selectedRepository: RepositoryData) => void;
}

const SelectRepoStage: React.FC = (props: Props) => {
    return (
        <div className="w-full flex flex-col gap-3 pt-5 pb-5">
            <ContentSearchInput
                searchInputPlaceholder="Search Repo's..."
            />
            <SelectRepoBox onSelectRepo={props.handleSelectRepo} />
            <div className="w-full p-2 flex flex-row gap-2 items-center justify-center">
                <Button variant="button" color="primary" size="base" onClick={() => props.setStage(1)}>
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-s font-semibold">
                            Next
                        </span>
                        <GoArrowRight size={20} className="text-info" />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default SelectRepoStage;
