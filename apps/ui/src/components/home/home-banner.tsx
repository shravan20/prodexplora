import * as React from 'react';

import { Button } from '../../packages/ui/components/buttons/Button';

const HomeBanner: React.FC = () => {
    return (
        <div className="h-[280px] bg-primary-gradient w-[988px] m-auto rounded-md relative">
            <div className="p-8 flex flex-col gap-5 h-full justify-center z-20 relative load-into-place-anim">
                <div className="flex flex-col gap-2">
                    <div className="text-5xl leading-tight text-white relative">
                        Welcome to <br />
                        <strong>ProdExplora</strong>
                    </div>
                    <div className="text-xl font-medium text-white relative">
                        The place to launch and discover new open source tech products
                    </div>
                </div>
                <div className="relative">
                    <Button variant="button" color="subtle">
                        <span>Learn More</span>
                    </Button>
                </div>
            </div>
            <svg style={{ height: "100%" }} viewBox="0 0 505 471" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0 z-0 load-into-place-anim">
                <circle cx="432" cy="127" r="181" fill="#CDF563" />
                <circle cx="324" cy="235" r="181" fill="#FF4633" fill-opacity="0.7" />
                <ellipse cx="181" cy="415.5" rx="181" ry="181.5" fill="#FB7EA8" fill-opacity="0.7" />
            </svg>
        </div>
    )
}

export default HomeBanner;
