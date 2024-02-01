import { Injectable } from '@nestjs/common';
import { AuthRequestDto } from './dto/auth-request.dto';

@Injectable()
export class AuthService {
    signIn(createAuthDto: AuthRequestDto) {
        return 'This action adds a new auth';
    }
}
