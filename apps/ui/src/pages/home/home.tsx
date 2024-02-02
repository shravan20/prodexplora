import React from 'react';
import Navigation from '../../components/navigation';
import Wrapper from '../../components/wrapper/wrapper';
import HomeBanner from '../../components/home/home-banner';
import FilterSidebar from '../../components/view/filters/filter-sidebar';
import ProjectItem from '../../components/view/projects/project-item';

const HomePage: React.FC = () => {
    return (
        <div className="gyan-container">
                <Navigation />
                <Wrapper>
                    <div className="flex flex-col gap-5">
                        <HomeBanner />
                        <div className="flex flex-row gap-2 w-[988px] m-auto">
                            <FilterSidebar /> 
                            <div className="w-full flex flex-col gap-2">
                                <ProjectItem 
                                    projectIcon="https://avatars.githubusercontent.com/u/79145102?s=500&v=4"
                                    projectName="Cal.com"
                                    projectTagline="Scheduling infrastructure for everyone"
                                    currentCount={55}
                                />
                            </div>
                        </div>
                    </div>
                </Wrapper>
        </div>
    )
};

export default HomePage;
