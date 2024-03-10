import * as React from 'react';
import ProjectDetailsStage from './stages/project-details-stage';
import SelectRepoStage from './stages/select-repo-stage';
import SocialLinksStage from './stages/social-links-stage';

const CreateProjectModal: React.FC = () => {

    type RepositoryData = {
        title: string,
        description: string,
        slug: string,
        technologies: [
            string
        ],
    }

    const [selectedStage, setSelectedStage] = React.useState<number>(0);

    /**
     * Handle repository selection
     */
    const [repository, setRepository] = React.useState<RepositoryData | null>(null);
    const handleSelectRepo = (selectedRepository: RepositoryData) => {
        setRepository(selectedRepository);
        setSelectedStage(selectedStage + 1);
    };


    const stages = [
        {
            title: "Submit Product",
            description: "Let's change the world with your amazing project",
            component: <SelectRepoStage onSelectRepo={handleSelectRepo} />
        },
        {
            title: "Submit Product",
            description: "Let's change the world with your amazing project",
            component: <ProjectDetailsStage />
        },
        {
            title: "Product / Links",
            description: "Add all the places that link to your product",
            component: <SocialLinksStage />
        }
    ];


    return (
        <div className="p-5 pl-8 pr-8 w-[550px] h-full bg-base-gradient rounded-md">
            {(selectedStage === 0 || selectedStage === 1) && (
                <div className="flex flex-col gap-1 mb-5">
                    <div className="text-xl font-semibold text-white">
                        {stages[selectedStage].title}
                    </div>
                    <div className="text-s font-regular text-info">
                        {stages[selectedStage].description}
                    </div>
                </div>
            )}

            {selectedStage === 2 && (
                <div className="flex flex-col gap-1 mb-5">
                    <div className="text-xl font-semibold text-white">
                        {stages[selectedStage].title}
                    </div>
                    <div className="text-s font-regular text-info">
                        {stages[selectedStage].description}
                    </div>
                </div>
            )}

            <div>{stages[selectedStage].component}</div>
        </div>
    );
};

export default CreateProjectModal;
