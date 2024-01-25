import { INestApplication, Module } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerOptions } from './swagger';

@Module({})
export class SwaggerSetupModule {
    static setup(path: string, app: INestApplication) {
        const document = SwaggerModule.createDocument(app, swaggerOptions);
        SwaggerModule.setup(path, app, document);
    }
}
