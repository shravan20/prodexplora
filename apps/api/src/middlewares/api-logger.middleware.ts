import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        const { method, url, query } = request;

        if (process.env.NODE_ENV == 'development' && query.logBody) {
            Logger.debug(request.body);
        }

        const response = httpContext.getResponse();
        const requestLogFormat = `${method} ${url}: ${response.statusCode}`;

        return next.handle().pipe(
            tap(() => {
                Logger.debug(requestLogFormat);
            }),
        );
    }
}
