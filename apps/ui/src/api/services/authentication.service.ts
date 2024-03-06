import { postDataMethod } from '../api';
import { API_HOST } from '../api-host';

type Data = {
    authProvider: [identifier: string, provider: string];
    email: string;
    firstName: string;
    lastName: string;
};

export const signIn = (data: Data) => {
    const response = postDataMethod(API_HOST + '/users/open-id-auth', data);
    return response;
};
