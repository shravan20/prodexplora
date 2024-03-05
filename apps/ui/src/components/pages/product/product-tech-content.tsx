import * as React from 'react';
import { Button } from '../../../packages/ui/components/buttons/Button';
import GithubSpecItem from './github-spec-item';

import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import ProductTechItem from './product-tech-item';

type Props = {
    productName: string
}

const ProductTechContent: React.FC = (props: Props) => {
    const [githubSpecItems, setGithubSpecItems] = React.useState([
        {
            'githubSpecName': 'Stars',
            'githubSpecNum': '50'
        },
        {
            'githubSpecName': 'Forks',
            'githubSpecNum': '18'
        },
        {
            'githubSpecName': 'Contributors',
            'githubSpecNum': '50'
        },
    ]);

    const [productTechItems, setProductTechItems] = React.useState([
        {
            'productTechName': 'Typescript',
            'productTechIcon': <SiTypescript className="text-primary" size={30} />
        },
        {
            'productTechName': 'Javascript',
            'productTechIcon': <SiJavascript className="text-primary" size={30} />
        },
        {
            'productTechName': 'React',
            'productTechIcon': <SiReact className="text-primary" size={30} />
        },
    ])

    return (
        <div className="relative overflow-hidden rounded-[2.4rem] max-w-[750px] m-auto h-full bg-page-gradient rounded-md py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14">
            <div className="text-display">
                {props.productName}'s tech
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-center">
                    <div className="font-semibold text-m">
                        Github Specs
                    </div>
                    <div className="flex flex-row items-center gap-12 justify-center pt-5 pb-5">
                        {githubSpecItems.map((y) => {
                            return (
                                <GithubSpecItem
                                    githubSpecNum={y.githubSpecNum}
                                    githubSpecName={y.githubSpecName}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="text-center">
                    <div className="font-semibold text-m">
                        Tech Stack
                    </div>
                    <div className="flex flex-row items-center gap-12 justify-center pt-5 pb-5">
                        {productTechItems.map((y) => {
                            return (
                                <ProductTechItem
                                    productTechName={y.productTechName}
                                    productTechIcon={y.productTechIcon}
                                />
                            )
                        })}
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
