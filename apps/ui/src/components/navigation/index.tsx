import * as React from 'react'
import { SearchInput } from '../../packages/ui/components/forms/inputs/SearchInput';

import { GoIssueDraft, GoStack, GoProjectTemplate } from "react-icons/go";
import { Button } from '../../packages/ui/components/buttons/Button';
import { GiArrowCursor } from 'react-icons/gi';

const Navigation: React.FC = () => {
    return (
            <div className="h-50 w-full bg-primary border-b-primary-lighter border-b-[1px] fixed top-0 p-4 pt-2 pb-2 backdrop-blur-sm z-50">
                <div className="w-[1200px] m-auto z-50 relative flex flex-row justify-between h-full items-center">
                    <div className="flex flex-row gap-5 items-center">
                        <img src="/logo.svg" width="55" height="55" />
                        <div className="w-[350px] flex items-center justify-center">
                             <SearchInput 
                                placeholder="Search Amazing Open Source Products"
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
                    <div className="flex flex-row items-center">
                        <Button color="fun" size="lg">
                            <div className="flex flex-row gap-1 items-center">
                            <GiArrowCursor />
                            <span>Submit Project</span>
                            </div>
                        </Button>
                    </div>
                </div>
                <img src="/gradient.svg" className="absolute top-0 left-0 w-[550px] h-[500px] z-20" />
            </div>
    )
}

export default Navigation;
