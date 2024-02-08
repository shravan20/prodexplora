import * as React from 'react';

interface Props {
    currentCount: number;
}

const UpvoteCountButton: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col w-[50px] pt-1 pb-1 border-[1px] border-primary-lighter rounded-md items-center justify-center hover:bg-primary-lighter">
            <GoChevronUp size={20} />
            <span className="text-xl font-bold">{props.currentCount}</span>
        </div>
    );
};

export default UpvoteCountButton;
