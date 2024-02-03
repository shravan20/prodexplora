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

        if (query.logBody) {
            Logger.debug(request.body);
        }

        return next.handle().pipe(
            tap(() => {
                const response = httpContext.getResponse();
                const requestLogFormat = `${method} ${url}: ${method} ${response.statusCode}`;
                Logger.log(requestLogFormat);
            }),
        );
    }
}
