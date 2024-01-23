import { createConnection } from 'mongoose';
import { Logger } from '@nestjs/common';

const logger = new Logger('DatabaseModule');

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            try {
                await createConnection(process.env.MONGODB_DB_URL, {
                    dbName: "test", // move it as part of connection string or env
                    autoIndex: true,
                    autoCreate: true
                });
                logger.log('Database connection established');
            } catch (error) {
                logger.error('DB Connection Error', error);
            }

        },
    },
];
