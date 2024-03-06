import * as React from 'react';
import { useEffect, useState } from 'react';
import { getRepositories } from '../../../api/services/integration.service';
import RepoSelectItem from './repo-select-item';

const SelectRepoBox: React.FC = () => {

    const [repos, setRepos] = useState<any[]>([]);

    useEffect(() => {
        // TODO: Pick this from session storage
        let user = '65c595144c7dd5c0f9c9ebf4';
        let service = 'github';
        getRepositories(service, user)
            .then(response => setRepos(response))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // TODO: Add loader instead of showing empty modal initially
    return (
        <div className="bg-darks-100 w-full border-[1px] border-gray-500 rounded-md shadow-primary-lighter overflow-hidden">
            {repos.map((repo, index) => (
                <RepoSelectItem data={repo} key={index} />
            ))}
        </div>
    )
}

export default SelectRepoBox;
