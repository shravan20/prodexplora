import { authResponse } from '../../../types/auth/auth-response.types';
import { postDataMethod } from '../../api';
import { API_HOST } from '../../api-host';
export const signIn = (data: authResponse) => {
    const response = postDataMethod(API_HOST + '/users/open-id-auth', data);
    return response;
};
