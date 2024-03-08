import * as React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Button } from '../../../../packages/ui/components/buttons/Button';
import { TextArea } from '../../../../packages/ui/components/forms/inputs/Input';
import { TextField } from '../../../../packages/ui/components/forms/inputs/TextField';
import SelectedProjectCard from '../selected-project-card';

type Props = {
    setStage: () => void
}

const ProjectDetailsStage: React.FC = (props: Props) => {
    return (
        <div className="fade-up-anim flex flex-col gap-3">
            <div className="flex flex-col items-center justify-center">
                <SelectedProjectCard />
            </div>
            <div>
                <TextField
                    placeholder='Your Product Name..'
                    value="Cal.com"
                    readOnly={true}
                    label='new label'
                />
            </div>
            <div>
                <TextArea
                    placeholder='Add a powerful description 💫, give details about what your product is, and what it does...'
                />
            </div>
            <div className="w-full p-2 flex flex-row gap-2 items-center justify-center">
                <Button variant="button" color="primary" size="base" onClick={() => props.setStage(2)}>
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-s font-semibold">
                            Next
                        </span>
                        <GoArrowRight size={20} className="text-info" />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default ProjectDetailsStage;