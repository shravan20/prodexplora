import * as React from 'react';
import { Button } from '../../../packages/ui/components/buttons/Button';
import GithubSpecItem from './github-spec-item';

const ProductTechContent: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-[2.4rem] max-w-[750px] m-auto h-full bg-page-gradient rounded-md py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14">
            <div className="text-display">
                Cal.com's tech
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <div className="font-semibold text-m">
                        Github Specs
                    </div>
                    <div className="flex flex-row items-center gap-12 justify-center pt-5 pb-5">
                        <GithubSpecItem />
                        <GithubSpecItem />
                        <GithubSpecItem />
                    </div>
                </div>
                <div className="text-center">
                    <div className="font-semibold text-m">
                        Tech Stack
                    </div>
                    <div className="flex flex-row items-center gap-12 justify-center pt-5 pb-5">
                        <GithubSpecItem />
                        <GithubSpecItem />
                        <GithubSpecItem />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Button variant="button" color="primary" size="lg" className="rounded-full">
                        <div className="p-1 pl-1.5 pr-1.5 font-semibold text-l">
                            Contribute
                        </div>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default ProductTechContent;