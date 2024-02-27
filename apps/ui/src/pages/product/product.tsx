import * as React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/navigation';
import ProductMetaContent from '../../components/pages/product/product-meta-content';
import ProductTabSwitcher from '../../components/pages/product/product-tab-switcher';
import Wrapper from '../../components/wrapper/wrapper';
import TabAboutContainer from './tabContent/tab-about-content';
import TabTeamContent from './tabContent/tab-team-content';

const Product: React.FC = () => {
    const [productData, setProductData] = React.useState([
        {
            'productName': 'Cal.com',
            'productIcon': 'https://ph-files.imgix.net/39eadfe0-8f39-40f8-8213-ee9e516df919.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2',
            'productTagline': 'Scheduling infrastructure for everyone',
            'productDescription': 'Cal.com (formerly Calendso) is the open source Calendly alternative. Self host it, or have it hosted by us. Integrate it seamlessly into your business with advanced customization and the open API. Designed to be a joy to use for you and your visitors.',
            'productSiteLink': 'https://www.cal.com/'
        }
    ]);

    const [productDescription, setProductDescription] = React.useState("Cal.com (formerly Calendso) is the open source Calendly alternative. Self host it, or have it hosted by us. Integrate it seamlessly into your business with advanced customization and the open API. Designed to be a joy to use for you and your visitors.");
    const [productImages, setProductImages] = React.useState(['https://ph-files.imgix.net/79a850fb-904f-4b36-8d0b-f28552d120c7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=976&h=550&fit=max&dpr=2', 'https://ph-files.imgix.net/46d376e1-f897-40fc-9921-c64de971ee13.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=976&h=550&fit=max&dpr=2', 'https://ph-files.imgix.net/0fc1058d-e1f7-42a2-969e-69f3b66b17b7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=977&h=550&fit=max&dpr=2']);

    let { id } = useParams();

    const [tabs, setTabs] = React.useState([
        {
            'name': 'About',
            'tabContent': <TabAboutContainer productId={id} productData={productData} productImages={productImages} />
        },
        {
            'name': 'The Team',
            'tabContent': <TabTeamContent />
        }
    ]);

    return (
        <div className="gyan-container">
            <Navigation />
            <Wrapper>
                <ProductMetaContent
                    productIcon={productData[0].productIcon}
                    productName={productData[0].productName}
                    productTagline={productData[0].productTagline}
                    productSiteLink={productData[0].productSiteLink}
                    productId={id}
                />
                <ProductTabSwitcher tabs={tabs} />
            </Wrapper>
        </div>
    )
}

export default Product;