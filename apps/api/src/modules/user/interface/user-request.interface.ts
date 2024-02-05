import { User } from '@entities/user.entity';

export interface IUserRequest {
    previouslyRegistered: boolean;
    user: User;
}
