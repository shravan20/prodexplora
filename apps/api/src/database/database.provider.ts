import { Logger } from '@nestjs/common';

const logger = new Logger('DatabaseModule');

// TODO: Remove this code in separate PR
export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            try {
                /* const uri = process.env.MONGODB_DB_URL;

                if (!uri) {
                    throw new Error('MongoDB URI is not provided');
                }

                const connection = await connect(uri);
                logger.log('Database connection established');
                return connection; */
            } catch (error) {
                logger.error('DB Connection Error', error);
                throw new Error('Failed to connect to the database');
            }
        }
    }
];
