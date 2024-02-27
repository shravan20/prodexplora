import * as React from 'react';
import { FaAsterisk } from 'react-icons/fa';
import { GoShare } from 'react-icons/go';
import { Button } from '../../../packages/ui/components/buttons/Button';
import AnimatedDialog from '../../../packages/ui/components/dialog/AnimatedDialog';
import ShareProductModal from '../../modals/product/share-product-modal';
import UpvoteCountButton from '../../view/projects/upvote-count-button';

type Props = {
    productIcon: string,
    productName: string,
    productTagline: string,
    productSiteLink: string,
    productId: string
}

const ProductMetaContent: React.FC = (props: Props) => {
    const [productLink, setProductLink] = React.useState("https://www.prodexplora.com/" + props.productId);

    return (
        <div className="w-full pt-5 pb-5 fade-up-anim">
            <div className="navigation-content">
                <div className="mobile-only w-full">
                    <div className="flex flex-col gap-2 items-center justify-center w-full">
                        <div className="w-20 h-20 bg-primary-lighter rounded-md">
                            <img src={props.productIcon} className="w-20 h-20 rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2 align-items justify-centers">
                            <div className="flex flex-row gap-5 items-center justify-center">
                                <div className="text-3xl font-semibold text-white">
                                    {props.productName}
                                </div>
                                <AnimatedDialog
                                    dialogTrigger={<GoShare size={25} className="text-info hover:text-white cursor-pointer" />}
                                    dialogContent={<ShareProductModal productName={props.productName} productLink={productLink} />}
                                />
                            </div>
                            <div className="text-m font-regular text-info">
                                {props.productTagline}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-only">
                    <div className="flex flex-row gap-5 items-center">
                        <div className="w-20 h-20 bg-primary-lighter rounded-md">
                            <img src={props.productIcon} className="w-20 h-20 rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-5 items-center">
                                <div className="text-3xl font-semibold text-white">
                                    {props.productName}
                                </div>
                                <AnimatedDialog
                                    dialogTrigger={<GoShare size={25} className="text-info hover:text-white cursor-pointer" />}
                                    dialogContent={<ShareProductModal productName={props.productName} productLink={productLink} />}
                                />
                            </div>
                            <div className="text-m font-regular text-info">
                                {props.productTagline}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-only">
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
                <div className="desktop-only">
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
        </div>
    )
}

export default ProductMetaContent;