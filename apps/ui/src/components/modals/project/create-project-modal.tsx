import * as React from 'react';
import ProjectDetailsStage from './stages/project-details-stage';
import SelectRepoStage from './stages/select-repo-stage';
import SocialLinksStage from './stages/social-links-stage';

const CreateProjectModal: React.FC = () => {
    const [selectedStage, setSelectedStage] = React.useState<number>(0);
    const [stage, setStage] = React.useState([<SelectRepoStage setStage={setSelectedStage} />, <ProjectDetailsStage setStage={setSelectedStage} />, <SocialLinksStage setStage={setSelectedStage} />])
    return (
        <div className="p-5 pl-8 pr-8 w-[550px] h-full bg-base-gradient rounded-md">
            {selectedStage == 0 || selectedStage == 1 ? (
                <div className="flex flex-col gap-1 mb-5">
                    <div className="text-xl font-semibold text-white">
                        Submit Product
                    </div>
                    <div className="text-s font-regular text-info">
                        Let's change the world with your amazing project
                    </div>
                </div>
            ) : (
                <></>
            )}

            {selectedStage == 2 ? (
                <div className="flex flex-col gap-1 mb-5">
                    <div className="text-xl font-semibold text-white">
                        Product / Links
                    </div>
                    <div className="text-s font-regular text-info">
                        Add all the places that link to your product
                    </div>
                </div>
            ) : (
                <></>
            )}

            <div>
                {stage[selectedStage]}
            </div>
        </div>
    )
}

export default CreateProjectModal;