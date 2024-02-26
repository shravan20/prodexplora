import * as React from 'react';

type Props = {
    teamMemberName: string,
    teamMemberPicture: string
}

const TeamMemberItem: React.FC = (props: Props) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center text-center cursor-pointer hover:opacity-50 transition-all load-into-place-anim delay-85">
            <div className="w-[75px] h-[75px] bg-info rounded-full">
                <img src={props.teamMemberPicture} className="w-[75px] h-[75px] object-cover rounded-full" />
            </div>
            <div className="font-semibold text-m">
                {props.teamMemberName}
            </div>
        </div>
    )
}

export default TeamMemberItem;