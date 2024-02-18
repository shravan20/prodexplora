import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

import { CatchError } from '@utils/decorators/try-catch.decorator';
import IServiceIntegration from './common-integration/interfaces/common-integration.interface';

@Injectable()
export class GitHubService implements IServiceIntegration {
    private readonly octokit: Octokit;

    constructor() {
        const CACHE = {};

        this.octokit = new Octokit({
            auth: process.env.GITHUB_ACCESS_TOKEN
        });
    }
    @CatchError
    async get(): Promise<any> {
        const data = await this.octokit.request('GET /users');

        return data;
    }
}
