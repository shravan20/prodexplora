import * as React from 'react';
import TeamMemberItem from '../../../components/pages/product/team-member-item';

const TabTeamContent: React.FC = () => {
    const [teamMembersData, setTeamMembersData] = React.useState([
        {
            'teamMemberPicture': 'https://i.pinimg.com/736x/f5/c3/39/f5c339edc983ba515ada22ff28c957ba.jpg',
            'teamMemberName': 'Muna Das'
        },
        {
            'teamMemberPicture': 'https://img.freepik.com/free-photo/cute-husky-dog-biting-shoelace-home_23-2149544907.jpg?w=360',
            'teamMemberName': 'Arnav Nath'
        },
    ])
    return (
        <div className="w-full h-full outline-none">
            <div className="text-display fade-up-anim">
                Meet the Team
            </div>
            <div className="flex flex-row max-w-[700px] m-auto justify-center items-center gap-8 flex-wrap pt-5 p-5">
                {teamMembersData.map((y) => {
                    return (
                        <TeamMemberItem
                            teamMemberName={y.teamMemberName}
                            teamMemberPicture={y.teamMemberPicture}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TabTeamContent;
