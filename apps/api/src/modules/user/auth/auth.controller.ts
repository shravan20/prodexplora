import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseEnvelope } from 'src/middlewares/decorators/response-envelope.decorator';
import { HttpExceptionFilter } from 'src/middlewares/global-error.middleware';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/auth-request.dto';

@ApiTags('Auth Service API')
@Controller({
    version: '1',
})
@UseFilters(new HttpExceptionFilter())
@ApiResponseEnvelope()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/users/open-id-auth')
    signIn(@Body() createAuthDto: AuthRequestDto) {
        return this.authService.signIn(createAuthDto);
    }
}
