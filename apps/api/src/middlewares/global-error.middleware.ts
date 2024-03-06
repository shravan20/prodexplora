import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ResponseBody } from './dtos/response-body.dto';

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
            ({ statusCode, message } = this.customErrors(
                exception,
                statusCode,
                message,
                unknownErrorMessage
            ));

            // Log stack trace in development environment
            if (process.env.NODE_ENV === 'development' && exception.stack) {
                this.logger.error(exception.stack);
            }
        }

        const body: ResponseBody<any> = {
            status: false,
            statusCode,
            payload: null,
            message: message,
            timestamp: new Date().toISOString(),
            endpoint: request.url
        };

        this.logger.warn(`${statusCode} ${request.url} ${message}`);

        response.status(statusCode).json(body);
    }

    private customErrors(
        exception: Error,
        statusCode: number,
        message: any[],
        unknownErrorMessage: string
    ) {
        let messages;

        switch (exception.name) {
            case 'ValidationError':
                statusCode = HttpStatus.BAD_REQUEST;
                messages = exception.message.split(':')[0];
                message = [messages || unknownErrorMessage];
                break;

            case 'MongoServerError':
                statusCode = HttpStatus.CONFLICT;
                messages = exception.message;
                message = [messages || unknownErrorMessage];
                break;

            default:
                statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                message = [exception.message || unknownErrorMessage];
                break;
        }

        return { statusCode, message };
    }

    private appendMessage(validationMessage: any): any[] {
        return Array.isArray(validationMessage.message)
            ? [...validationMessage.message]
            : [validationMessage.message];
    }
}
