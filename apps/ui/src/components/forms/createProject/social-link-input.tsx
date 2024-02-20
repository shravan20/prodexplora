import * as React from 'react'
import { FaFacebook, FaInstagram, FaMousePointer, FaTwitter } from 'react-icons/fa'
import { TextField } from '../../../packages/ui/components/forms/inputs/TextField'

type Props = {
    socialType: "WEBSITE" | "TWITTER" | "INSTAGRAM" | "FACEBOOK",
    onValueChange: () => void,
    inputValue: string
}

const SocialLinkInput: React.FC = (props: Props) => {
    const [linkLeading, setLinkLeading] = React.useState("");
    const [linkSuffix, setLinkSuffix] = React.useState("");

    React.useEffect(() => {
        if (props.socialType == "TWITTER") {
            setLinkLeading("www.twitter.com/");
        }

        if (props.socialType == "INSTAGRAM") {
            setLinkLeading("www.instagram.com/");
        }

        if (props.socialType == "FACEBOOK") {
            setLinkLeading("www.facebook.com/");
        }

        if (props.socialType == "WEBSITE") {
            setLinkLeading("www.");
            setLinkSuffix(".com");
        }
    }, []);

    return (
        <div className="flex flex-row items-center gap-5 w-full grow">
            {props.socialType == "WEBSITE" ? (
                <FaMousePointer size={15} color="#fff" />
            ) : (
                <></>
            )}

            {props.socialType == "TWITTER" ? (
                <FaTwitter size={15} color="#fff" />
            ) : (
                <></>
            )}

            {props.socialType == "INSTAGRAM" ? (
                <FaInstagram size={15} color="#fff" />
            ) : (
                <></>
            )}

            {props.socialType == "FACEBOOK" ? (
                <FaFacebook size={15} color="#fff" />
            ) : (
                <></>
            )}

            <TextField
                addOnLeading={linkLeading}
                addOnSuffix={linkSuffix ? linkSuffix : ""}
                placeholder='Your Link'
                label='new label'
                value={props.inputValue}
                onChange={(e) => props.onValueChange(e.target.value)}
                containerClassName="w-full"
            />
        </div>
    )
}

export default SocialLinkInput;