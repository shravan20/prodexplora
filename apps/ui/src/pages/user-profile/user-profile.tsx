import * as React from 'react';
import Navigation from '../../components/navigation';
import ProjectItem from '../../components/view/projects/project-item';
import Wrapper from '../../components/wrapper/wrapper';
import { Button } from '../../packages/ui/components/buttons/Button';

const UserProfile: React.FC = () => {
    const [userData, setUserData] = React.useState([
        {
            'profilePic': 'https://i.pinimg.com/736x/f5/c3/39/f5c339edc983ba515ada22ff28c957ba.jpg',
            'fullName': 'Muna Das',
            'headline': 'I love making open-source projects for devs 💻🖱',
            'usersFollowing': 0,
            'usersFollowers': 0,
            'about': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]);

    const [userLoading, setUserLoading] = React.useState(false);
    const [productDataLoading, setProductDataLoading] = React.useState(true);

    const [data, setData] = React.useState([
        {
            'projectId': 25,
            'projectIcon': 'https://ph-files.imgix.net/39eadfe0-8f39-40f8-8213-ee9e516df919.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2',
            'projectName': 'Cal.com',
            'projectTagline': 'Scheduling infrastructure for everyone',
            'currentCount': 55
        },
        {
            'projectId': 20,
            'projectIcon': 'https://ph-files.imgix.net/3bb3ea09-8afe-42b0-8545-160370510ec5.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2',
            'projectName': 'Dub',
            'projectTagline': 'Short Links with Superpowers',
            'currentCount': 35
        },
    ]);

    return (
        <div className="bg-primary w-full h-full">
            <Navigation />
            <Wrapper>
                {userLoading == false ? (
                    <div className="flex flex-row justify-between max-w-[650px] m-auto pt-5 pb-5 items-center">
                    <div className="flex flex-row gap-8 items-center">
                        <div className="w-[90px] h-[90px] bg-white rounded-full">
                            <img src={userData[0].profilePic}  className="w-[90px] h-[90px] rounded-full" />
                        </div>
                        <div className="flex flex-col gap-1 load-into-place-anim">
                            <div className="flex flex-col gap-2">
                                <div className="font-semibold text-3xl">{userData[0].fullName}</div>
                                <div className="font-regular text-lg text-info">{userData[0].headline}</div>
                            </div>
                            <div className="flex flex-row gap-5 pt-3 pb-3">
                                <Button variant="button" color="subtle">
                                    Edit Profile
                                </Button>
                                <Button variant="button" color="destructive">
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <></>
                )}
                {userLoading == false ? (
                    <div className="pl-2 pr-2">
                    <div className="p-3 bg-primary-lighter bg-glass-gradient max-w-[650px] m-auto rounded-md flex flex-col gap-2 shadow-lg shadow-primary">
                        <div>
                            <span className="font-semibold text-info">ABOUT</span>
                        </div>
                        <span className="font-normal text-m">
                            {userData[0].about}
                        </span>
                    </div>
                </div>
                ) : (
                    <></>
                )}
                <div className="max-w-[650px] m-auto flex flex-col gap-2 pt-5 pb-5">
                    {data.map((y) => {
                        return (
                            <ProjectItem
                                projectIcon={y.projectIcon}
                                projectName={y.projectName}
                                projectTagline={y.projectTagline}
                                currentCount={y.currentCount}
                            />
                        )
                    })}
                </div>
            </Wrapper>
        </div>
    )
}

export default UserProfile;
