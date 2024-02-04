import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BaseSecretManager } from "./base/base-secret-manager.service";

@Injectable()
export class SecretsManagerService extends BaseSecretManager {
    constructor(protected readonly configService: ConfigService) {
        super(configService);
    }
}
