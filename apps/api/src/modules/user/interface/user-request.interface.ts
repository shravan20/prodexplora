import { User } from '@entities/user.entity';

export interface UserRequest {
    existingUser: boolean;
    user: User;
}
