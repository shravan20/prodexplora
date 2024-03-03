import * as React from 'react';
import ProductImageRow from '../../../components/pages/product/product-image-row';
import ProductTechContent from '../../../components/pages/product/product-tech-content';

type Props = {
    productData: [],
    productImages: [],
    productId: string
}

const TabAboutContainer: React.FC = (props: Props) => {
    const [productId, setProductId] = React.useState("");
    return (
        <div className="w-full pt-5 pb-5">
            <div className="pl-5 pr-5">
                <ProductImageRow productImages={props.productImages} />
            </div>
            <div className="w-full leading-loose p-5">
                {props.productData[0].productDescription}
            </div>
            <div>
                <ProductTechContent productName={props.productData[0].productName} />
            </div>
        </div>
    )
}

export default TabAboutContainer;