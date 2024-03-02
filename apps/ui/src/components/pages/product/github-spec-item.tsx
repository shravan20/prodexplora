import * as React from 'react';
import CountUp from 'react-countup';

type Props = {
    githubSpecNum: string,
    githubSpecName: string
}

const GithubSpecItem: React.FC = (props: Props) => {
    return (
        <div className="flex flex-col gap-2 w-[65px] items-center text-center justify-center">
            <div className="flex flex-col gap-2 w-[65px] h-[65px] bg-hero-gradient cursor-pointer hover:scale-[1.1] transition-all border border-primary-lighter shadow-primary items-center justify-center rounded-md">
                <div>
                    <CountUp
                        className="text-2xl font-bold"
                        end={props.githubSpecNum}
                        duration={1.5}
                    />
                </div>
            </div>
            <span className="font-semibold text-m">{props.githubSpecName}</span>
        </div>
    )
}

export default GithubSpecItem;
