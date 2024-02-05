import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error, HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: Error | HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        let statusCode: number;
        let message: any[];

        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();
            const validationMessage: any = exception.getResponse();
            message = validationMessage.message?.length
                ? [...validationMessage.message]
                : [
                      exception.message ||
                          'Something really went wrong, reach out to the server builder or try again',
                  ];
        } else {
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            message = [
                exception.message ||
                    'Something really went wrong, reach out to the server builder or try again',
            ];
        }

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
