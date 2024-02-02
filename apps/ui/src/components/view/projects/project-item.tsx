import * as React from 'react'
import UpvoteCountButton from './upvote-count-button';
import Chip from '../../../packages/ui/components/chips/Chip';

type Props = {
    projectIcon: string,
    projectName: string,
    projectTagline: string,
    currentCount: number
}

const ProjectItem: React.FC = (props: Props) => {
    return (
        <div className="p-2 hover:bg-hero-gradient hover:shadow rounded-md bg-primary transition-colors cursor-pointer w-full">
            <div className="flex flex-row gap-5 justify-between items-center">
            <div className="flex flex-row gap-5">
            <div className="w-[75px] h-[75px]">
                    <img src={props.projectIcon} className="rounded-md" />
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <span className="text-xl text-white font-semibold">{props.projectName}</span>
                    <span className="text-s text-info font-regular">{props.projectTagline}</span>
                    <div className="flex flex-row gap-1 items-center">
                        <Chip chipLabel="App"/>
                        <Chip chipLabel="Calendar"/>
                        <Chip chipLabel="Scheduling"/>
                    </div>
                </div>
                </div>
                <div>
                    <UpvoteCountButton 
                        currentCount={props.currentCount}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;