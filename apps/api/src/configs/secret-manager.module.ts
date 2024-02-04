import { Module } from "@nestjs/common";
import { SecretsManagerService } from "./secret-manager.service";

@Module({
    providers: [SecretsManagerService],
    exports: [SecretsManagerService],
})
export class SecretsManagerModule { }
