import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api');
    await app.listen(3000);
    console.log('Server running on:', process.env.SERVER_PORT || 3000);
}
bootstrap();
