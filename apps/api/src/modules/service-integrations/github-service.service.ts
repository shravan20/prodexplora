import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

import { createAppAuth } from '@octokit/auth-app';
import IServiceIntegration from './interfaces/common-integration.interface';


@Injectable()
export class GitHubService implements IServiceIntegration {
    private readonly octokit: Octokit;

    constructor() {

        const CACHE = {};

        this.octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                appId: parseInt(process.env.GITHUB_APP_ID),
                privateKey: process.env.GITHUB_PRIVATE_KEY,
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET_KEY,
                installationId: 100,
                cache: {
                    async get(key) {
                        return CACHE[key];
                    },
                    async set(key, value) {
                        CACHE[key] = value;
                    },
                },
            }
        });
    }
    async get(): Promise<any> {
        try {
            const slug = await this.octokit.request("GET /users");
            console.log("authenticated as %s", slug);

            return await this.octokit.request("GET /");
        } catch (error) {
            console.log(error)
        }
    }
}
