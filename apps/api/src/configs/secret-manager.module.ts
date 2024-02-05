import { Module } from '@nestjs/common';
import { SecretManagerService } from './secret-manager.service';

@Module({
    providers: [SecretManagerService],
    exports: [SecretManagerService],
})
export class SecretManagerModule { }
