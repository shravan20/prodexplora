import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaTwitter } from 'react-icons/fa';
import { GoLink, GoMail } from 'react-icons/go';
import ShareButtonItem from '../../buttons/share-button-item';

type Props = {
    productName: string
    productLink: string
}

const ShareProductModal: React.FC = (props: Props) => {
    const [copiedLink, setCopiedLink] = React.useState<boolean>(false);

    return (
        <div className="p-5">
            <div className="w-full font-semibold text-lg text-center fade-up-anim">
                Share {props.productName}
            </div>
            <div className="flex flex-row justify-center items-center gap-8 pt-5 pb-5">
                <CopyToClipboard text={props.productSiteLink}>
                    <span onClick={() => alert("Copied to Clipboard")}>
                        <ShareButtonItem
                            shareType="LINK"
                            shareIcon={<GoLink size={20} />}
                            shareName="Copy"
                            shareLink={props.productSiteLink}
                        />
                    </span>
                </CopyToClipboard>

                <a href={`https://twitter.com/intent/tweet?text=I found this amazing Open Source product on ProdExplora - ${props.productName} - Check it out here: ${props.productLink}`} target="_blank">
                    <ShareButtonItem
                        shareType="TWITTER"
                        shareIcon={<FaTwitter size={20} />}
                        shareName="Twitter"
                        shareLink={props.productSiteLink}
                    />
                </a>

                <a href={`mailto:?subject=Check out this amazing Open Source product on ProdExplora&body=I found this amazing Open Source product on ProdExplora - ${props.productName} - Check it out here: ${props.productLink}`} target="_blank">
                    <ShareButtonItem
                        shareType="EMAIL"
                        shareIcon={<GoMail size={20} />}
                        shareName="Email"
                        shareLink={props.productSiteLink}
                    />
                </a>
            </div>
        </div>
    )
}

export default ShareProductModal;
