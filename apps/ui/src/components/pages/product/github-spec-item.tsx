import * as React from 'react';

const GithubSpecItem: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 w-[65px]">
            <div className="flex flex-col gap-2 h-[65px] bg-hero-gradient cursor-pointer hover:scale-[1.1] transition-all border border-primary-lighter shadow-primary items-center justify-center rounded-md">
                <div>
                    <span className="text-2xl font-bold">25</span>
                </div>
            </div>
            <span className="font-semibold text-m">Stars</span>
        </div>
    )
}

export default GithubSpecItem;