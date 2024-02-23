import * as React from 'react';
import { SearchInput } from '../../packages/ui/components/forms/inputs/SearchInput';

import { GiArrowCursor } from 'react-icons/gi';
import { GoIssueDraft, GoProjectTemplate, GoStack, GoStarFill } from "react-icons/go";
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../packages/ui/components/buttons/Button';
import AnimatedDialog from '../../packages/ui/components/dialog/AnimatedDialog';
import AuthenticationModal from '../modals/authentication/authentication-modal';
import CreateProjectModal from '../modals/project/create-project-modal';


const Navigation: React.FC = () => {
    const { token, fetchUserDetails, authLogout } = useAuth();
    const [userData, setUserData] = React.useState([]);


    const handleFetchUserDetails = async (token: string) => {
        const response = await fetchUserDetails(token);
        setUserData(response['data']);
    }

    React.useEffect(() => {
        handleFetchUserDetails(token);
    }, [token]);

    const handleLogout = () => {
        authLogout();
    }

    return (
        <div className="h-50 w-full bg-primary border-b-primary-lighter border-b-[1px] fixed top-0 p-4 pt-2 pb-2 backdrop-blur-sm z-50">
            <div className="w-[1200px] m-auto z-50 relative flex flex-row justify-between h-full items-center">
                <div className="flex flex-row gap-5 items-center">
                    <img src="/logo.svg" width="55" height="55" />
                    <div className="w-[350px] flex items-center justify-center">
                        <SearchInput
                            placeholder="Discover Open Source Gems"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-row-items-center gap-5 h-full">
                    <nav>
                        <ul className="flex flex-row items-center gap-10">
                            <li className="flex flex-col items-center justify-center pt-1.5 cursor-pointer hover:scale-[1.1] transition-all">
                                <GoIssueDraft size={20} />
                                <span className="text-xs text-center pt-1.5 font-semibold">Projects</span>
                            </li>
                            <li className="flex flex-col items-center justify-center pt-1.5 cursor-pointer hover:scale-[1.1] transition-all">
                                <GoStack size={20} />
                                <span className="text-xs text-center pt-1.5 font-semibold">Categories</span>
                            </li>
                            <li className="flex flex-col items-center justify-center pt-1.5 cursor-pointer hover:scale-[1.1] transition-all">
                                <GoProjectTemplate size={20} />
                                <span className="text-xs text-center pt-1.5 font-semibold">Dashboard</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <AnimatedDialog
                        dialogTrigger={
                            <Button color="fun" size="lg">
                                <div className="flex flex-row gap-1 items-center">
                                    <GiArrowCursor />
                                    <span>Submit Project</span>
                                </div>
                            </Button>
                        }
                        dialogContent={<CreateProjectModal />}
                    />
                    {token ? (
                        <AnimatedDialog
                            dialogTrigger={
                                <Button color="subtle" size="lg">
                                    <div className="flex flex-row gap-1 items-center">
                                        <GoStarFill />
                                        <span>Login</span>
                                    </div>
                                </Button>
                            }
                            dialogContent={<AuthenticationModal />}
                        />
                    ) : (
                        <AnimatedDialog
                            dialogTrigger={
                                <Button color="subtle" size="lg">
                                    <div className="flex flex-row gap-1 items-center">
                                        <GoStarFill />
                                        <span>Login</span>
                                    </div>
                                </Button>
                            }
                            dialogContent={<AuthenticationModal />}
                        />
                    )}
                </div>
            </div>
            <img src="/gradient.svg" className="absolute top-0 left-0 w-[550px] h-[500px] z-20 splash-screen-anim" />
        </div>
    )
}

export default Navigation;
