// src/swagger.module.ts
import { Module } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerOptions } from './swagger';

import { Logger } from '@nestjs/common';

@Module({})
export class SwaggerSetupModule {
    static setup(path: string, app: any) {
        const document = SwaggerModule.createDocument(app, swaggerOptions);
        SwaggerModule.setup(path, app, document);
    }
}
