import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { IServiceIntegration } from './interfaces/common-integration.interface';

@Injectable()
export class GitHubService implements IServiceIntegration {
    private readonly octokit: Octokit;

    constructor() {
        this.octokit = new Octokit();
    }

}
