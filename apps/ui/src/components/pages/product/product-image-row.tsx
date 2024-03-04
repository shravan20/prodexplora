import * as React from 'react';

type Props = {
    productImages: []
}

const ProductImageRow: React.FC = (props: Props) => {
    return (
        <div className="pt-5 pb-5">
            <div className="items-center w-full overflow-hidden overflow-x-scroll h-[280px] whitespace-nowrap">
                {props.productImages.map((y) => {
                    return (
                        <div className="w-[500px] bg-secondary rounded-md h-[250px] inline-block mr-5">
                            <img src={y} className="w-full h-full object-cover rounded-md" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImageRow;
