import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerSetupModule } from './docs/swagger.module';

async function bootstrap(): Promise<void> {
    dotenv.config();
    const app = await NestFactory.create(AppModule);

    SwaggerSetupModule.setup('/docs', app);

    app.setGlobalPrefix('/api');
    await app.listen(process.env.SERVER_PORT);
    console.log('Server running on:', process.env.SERVER_PORT || 3000);
}
bootstrap();
