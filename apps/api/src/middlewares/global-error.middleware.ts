import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const statusCode = exception.getStatus();

        const validationMessage: any = exception.getResponse();
        const message = validationMessage.message?.length
            ? [...validationMessage.message]
            : [
                  exception.message ||
                      'Something really went wrong, reach out to the server builder or try again',
              ];

        const body: any = {
            status: false,
            statusCode,
            data: null,
            message,
            timestamp: new Date().toISOString(),
            endpoint: request.url,
        };

        this.logger.warn(`${statusCode} ${message}`);

        response.status(statusCode).json(body);
    }
}
