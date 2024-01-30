import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    private prisma: PrismaClient;

    async onModuleInit() {
        await this.$connect();
    }

    async checkConnection(): Promise<void> {
        try {
            if (!this.prisma) {
                console.error('PrismaClient is not initialized');
                return;
            }

            // Perform a simple query to check the connection
            const result = await this.prisma.$queryRaw`SELECT 1`;

            console.log('Database connection is successful:', result);
        } catch (error) {
            console.error('Error connecting to the database:', error);
        } finally {
            // Make sure to disconnect from the database
        }
    }
}
