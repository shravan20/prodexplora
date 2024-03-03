import * as React from 'react';

type Props = {
    productTechIcon: React.ReactNode,
    productTechItem: string
}

const ProductTechItem: React.FC = (props: Props) => {
    return (
        <div className="flex flex-col gap-2 w-[65px] items-center text-center justify-center">
            <div className="flex flex-col gap-2 w-[65px] h-[65px] bg-white cursor-pointer hover:scale-[1.1] transition-all border border-primary-lighter shadow-primary items-center justify-center rounded-md">
                <div>
                    {props.productTechIcon}
                </div>
            </div>
            <span className="font-semibold text-m">{props.productTechItem}</span>
        </div>
    )
}

export default ProductTechItem;
