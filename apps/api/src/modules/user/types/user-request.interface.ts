import { User } from '@entities/user.entity';

export type UserRequest = {
    previouslyRegistered: boolean;
    user: User;
}
