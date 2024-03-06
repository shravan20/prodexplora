import * as React from 'react';
import { FaAsterisk } from 'react-icons/fa';
import { Button } from '../../../../packages/ui/components/buttons/Button';
import SocialLinkInput from '../../../forms/createProject/social-link-input';
import SelectedProjectCard from '../selected-project-card';

type Props = {
    setStage: () => void
}

const SocialLinksStage: React.FC = (props: Props) => {
    const [websiteLink, setWebsiteLink] = React.useState("");
    const [twitterLink, setTwitterLink] = React.useState("");
    const [instagramLink, setInstagramLink] = React.useState("");
    const [facebookLink, setFacebookLink] = React.useState("");

    return (
        <div className="fade-up-anim flex flex-col gap-3 w-full">
            <div className="flex flex-col items-center justify-center">
                <SelectedProjectCard />
            </div>
            <SocialLinkInput socialType="WEBSITE"
                onValueChange={setWebsiteLink}
                inputValue={websiteLink}
            />
            <SocialLinkInput socialType="TWITTER"
                onValueChange={setTwitterLink}
                inputValue={twitterLink}
            />

            <SocialLinkInput socialType="INSTAGRAM"
                onValueChange={setInstagramLink}
                inputValue={instagramLink}
            />
            <SocialLinkInput socialType="FACEBOOK"
                onValueChange={setFacebookLink}
                inputValue={facebookLink}
            />


            <div className="w-full p-2 flex flex-row gap-2 items-center justify-center">
                <Button variant="button" color="primary" size="base" onClick={() => props.setStage(2)}>
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-s font-semibold">
                            Submit
                        </span>
                        <FaAsterisk size={12} className="text-white" />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default SocialLinksStage;
