import * as React from 'react';
import Navigation from '../../components/navigation';
import ProductMetaContent from '../../components/pages/product/product-meta-content';
import Wrapper from '../../components/wrapper/wrapper';

const Product: React.FC = () => {
    return (
        <div className="gyan-container">
            <Navigation />
            <Wrapper>
                <ProductMetaContent
                    productName="Cal.com"
                    productTagline="Scheduling calendar for everyone"
                    productSiteLink="https://www.cal.com/"
                />
            </Wrapper>
        </div>
    )
}

export default Product;