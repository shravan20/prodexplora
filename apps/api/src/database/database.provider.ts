// import { Connection, createConnection } from 'typeorm';
// import { Logger } from '@nestjs/common';

// const logger = new Logger('DatabaseModule');

// export const databaseProvider = {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async () => {
//         try {

//             return await createConnection({
//                 type: process.env.DB_TYPE as any,
//                 host: process.env.PG_HOST,
//                 port: parseInt(process.env.PG_PORT),
//                 username: process.env.PG_USER,
//                 password: process.env.PG_PASSWORD,
//                 database: process.env.PG_DB,
//                 entities: [__dirname + '../entities/*.entity{.ts,.js}'], // Adjust the path as needed
//                 synchronize: true,
//             });
//         } catch (error) {
//             logger.error('DB Connection Error', error);
//             if (error instanceof AggregateError) {
//                 error.errors.forEach((err, index) => {
//                     logger.error(`Error ${index + 1}:`, err);
//                 });
//             }
//             throw error;
//         }
//     },
// };
