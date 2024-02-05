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

        const unknownErrorMessage =
            'Something really went wrong, reach out to the server builder or try again';
        let statusCode: number;
        let message: any[];

        if (exception instanceof HttpException) {
            statusCode = exception.getStatus();
            const validationMessage: any = exception.getResponse();

            message = validationMessage.message?.length
                ? this.appendMessage(validationMessage)
                : [exception.message || unknownErrorMessage];
        } else {
            statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            message = [exception.message || unknownErrorMessage];

            // Log stack trace in development environment
            if (process.env.NODE_ENV === 'development' && exception.stack) {
                this.logger.error(exception.stack);
            }
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

    private appendMessage(validationMessage: any): any[] {
        return Array.isArray(validationMessage.message)
            ? [...validationMessage.message]
            : [validationMessage.message];
    }
}
