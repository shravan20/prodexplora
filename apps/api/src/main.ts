import {
    INestApplication,
    Logger,
    ValidationPipe,
    VersioningType,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { AppModule } from './app.module';
import { SwaggerSetupModule } from './docs/swagger.module';

const logger = new Logger('DatabaseModule');

async function setInterceptors(app: INestApplication) {
    SwaggerSetupModule.setup('/docs', app);

    app.enableCors();

    app.setGlobalPrefix('/api');

    app.enableVersioning({
        type: VersioningType.URI,
    });

    // Enable Mongoose query logging
    if (parseInt(process.env.MONGO_DEBUG, 10) === 1) {
        Logger.debug('Query Logs in DEBUG mode');
        mongoose.set('debug', true);
    }

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
        logger.log('Env variables loaded from .env');
        dotenv.config(); // Defaults to loading .env for development
    }

    const app: INestApplication = await NestFactory.create(AppModule, {
        abortOnError: false,
    });

    await setInterceptors(app);

    await app.listen(process.env.SERVER_PORT || 3000);
    console.log('Server running on:', process.env.SERVER_PORT || 3000);
}
bootstrap();
