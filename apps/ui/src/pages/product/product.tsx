import * as React from 'react';
import Navigation from '../../components/navigation';
import ProductMetaContent from '../../components/pages/product/product-meta-content';
import ProductTabSwitcher from '../../components/pages/product/product-tab-switcher';
import Wrapper from '../../components/wrapper/wrapper';
import TabAboutContainer from './tabContent/tab-about-content';
import TabCommentsContent from './tabContent/tab-comments-content';
import TabTeamContent from './tabContent/tab-team-content';

const Product: React.FC = () => {
    const [productDescription, setProductDescription] = React.useState("Cal.com (formerly Calendso) is the open source Calendly alternative. Self host it, or have it hosted by us. Integrate it seamlessly into your business with advanced customization and the open API. Designed to be a joy to use for you and your visitors.");
    const [productImages, setProductImages] = React.useState(['https://ph-files.imgix.net/79a850fb-904f-4b36-8d0b-f28552d120c7.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=976&h=550&fit=max&dpr=2', 'https://ph-files.imgix.net/46d376e1-f897-40fc-9921-c64de971ee13.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=976&h=550&fit=max&dpr=2', 'https://ph-files.imgix.net/0fc1058d-e1f7-42a2-969e-69f3b66b17b7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=977&h=550&fit=max&dpr=2']);

    const [tabs, setTabs] = React.useState([
        {
            'name': 'About',
            'tabContent': <TabAboutContainer productDescription={productDescription} productImages={productImages} />
        },
        {
            'name': 'The Team',
            'tabContent': <TabTeamContent />
        },
        {
            'name': 'Comments & Reviews',
            'tabContent': <TabCommentsContent />
        },
    ]);

    return (
        <div className="gyan-container">
            <Navigation />
            <Wrapper>
                <ProductMetaContent
                    productName="Cal.com"
                    productTagline="Scheduling calendar for everyone"
                    productSiteLink="https://www.cal.com/"
                />
                <ProductTabSwitcher tabs={tabs} />
            </Wrapper>
        </div>
    )
}

export default Product;