import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
    .setTitle('ProdExplora API')
    .setDescription('API Contracts for ProdExplora')
    .setVersion('1.0')
    .addServer('/api/v1')
    .setLicense(
        'MIT License',
        'https://github.com/shravan20/prodexplora/blob/main/LICENSE'
    )
    .build();
