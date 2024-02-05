import { ConfigService } from '@nestjs/config';

export interface ISecretsManager {
    getSecret: (key: string) => Promise<any | null>;
}

export class BaseSecretManager implements ISecretsManager {
    constructor(protected readonly configService: ConfigService) {}
    getSecret<T>(key: string): T | null {
        if (!key) {
            throw new Error("Didn't got the key");
        }
        const value = this.configService.get(key);
        if (value) {
            return value;
        }
        return null;
    }
}
