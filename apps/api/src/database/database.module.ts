// import { Module } from '@nestjs/common';
// import { databaseProvider } from './database.provider';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//     imports: [
//         TypeOrmModule.forRoot({
//             type: process.env.DB_TYPE as any,
//             host: process.env.PG_HOST,
//             port: parseInt(process.env.PG_PORT),
//             username: process.env.PG_USER,
//             password: process.env.PG_PASSWORD,
//             database: process.env.PG_DB,
//             // entities: [__dirname + '../entities/*.entity{.ts,.js}'], // Adjust the path as needed
//             synchronize: true,
//         }),
//     ],
//     providers: [databaseProvider],
//     exports: [TypeOrmModule],
// })
// export class DatabaseModule { }
