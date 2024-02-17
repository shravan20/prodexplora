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
            auth: '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'
        });
    }
    @CatchError
    async get(): Promise<any> {
        const data = await this.octokit.request('GET /users');

        return data;
    }
}
