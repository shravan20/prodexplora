import {
    CallHandler,
    ExecutionContext,
    HttpStatus,
    Injectable,
    NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiResponseEnvelopeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        const response = httpContext.getResponse();
        const statusCode = response?.statusCode || HttpStatus.OK;
        const route = request?.route?.path;

        return next.handle().pipe(
            map(data => ({
                status: true,
                statusCode,
                payload: data,
                message: 'Et voilà! Request successful..',
                timestamp: new Date().toISOString(),
                endpoint: route
            }))
        );
    }
}
