import React from 'react';
import Navigation from '../../components/navigation';
import Wrapper from '../../components/wrapper/wrapper';
import HomeBanner from '../../components/home/home-banner';

const HomePage: React.FC = () => {
    return (
        <div className="gyan-container">
                <Navigation />
                <Wrapper>
                    <div className="flex flex-col gap-5">
                        <HomeBanner />
                    </div>
                </Wrapper>
        </div>
    )
};

export default HomePage;
