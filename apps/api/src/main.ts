import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api');
    await app.listen(3000);
    console.log('Server running on:' + 3000);
}
bootstrap();
