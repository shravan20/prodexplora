import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerSetupModule } from './docs/swagger.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';

const logger = new Logger('DatabaseModule');

function setInterceptors(app) {
    SwaggerSetupModule.setup('/docs', app);

    app.setGlobalPrefix('/api');

    app.enableVersioning({
        type: VersioningType.URI,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            disableErrorMessages: false,
        }),
    );
}

async function bootstrap(): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
        logger.log('Env variables loaded from .env.production');
        dotenv.config({ path: '.env.production' });
    } else {
        dotenv.config(); // Defaults to loading .env for development
    }

    const app = await NestFactory.create(AppModule);

    setInterceptors(app);

    await app.listen(process.env.SERVER_PORT || 3000);
    console.log('Server running on:', process.env.SERVER_PORT || 3000);
}
bootstrap();
