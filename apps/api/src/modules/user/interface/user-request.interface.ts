import { User } from '@entities/user.entity';

export interface UserRequest {
    previouslyRegistered: boolean;
    user: User;
}
