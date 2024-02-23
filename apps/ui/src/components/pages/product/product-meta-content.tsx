import * as React from 'react';
import { FaAsterisk } from 'react-icons/fa';
import { GoShare } from 'react-icons/go';
import { Button } from '../../../packages/ui/components/buttons/Button';
import UpvoteCountButton from '../../view/projects/upvote-count-button';

type Props = {
    productName: string,
    productTagline: string,
    productSiteLink: string
}

const ProductMetaContent: React.FC = (props: Props) => {
    return (
        <div className="w-full pt-5 pb-5 fade-up-anim">
            <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-row gap-5 items-center">
                    <div className="w-20 h-20 bg-primary-lighter rounded-md">
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-5 items-center">
                            <div className="text-3xl font-semibold text-white">
                                {props.productName}
                            </div>
                            <GoShare size={25} className="text-info hover:text-white cursor-pointer" />
                        </div>
                        <div className="text-m font-regular text-info">
                            {props.productTagline}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-center items-center h-full">
                    <a href={props.productSiteLink} target="_blank">
                        <Button color="fun" size="lg" className="rounded-full">
                            <div className="flex flex-row items-center gap-2 pl-3 pr-3">
                                <FaAsterisk /> Visit Product
                            </div>
                        </Button>
                    </a>
                    <UpvoteCountButton
                        currentCount={50}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductMetaContent;