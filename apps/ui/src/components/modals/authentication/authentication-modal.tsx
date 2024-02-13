import { useGoogleLogin } from '@react-oauth/google';
import * as React from 'react';

import axios from 'axios';
import { signIn } from '../../../api/services/authentication/authentication.service';
import { useAuth } from '../../../context/AuthContext';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { getDataMethod } from '../../../api/api';
import { Button } from '../../../packages/ui/components/buttons/Button';

const AuthenticationModal: React.FC = () => {
    const [user, setUser] = React.useState([]);
    const [profile, setProfile] = React.useState([]);
    const [response, setResponse] = React.useState({});

    const { authLogin } = useAuth();

    const login = useGoogleLogin({
        onSuccess: async (codeResponse: any) => {

            setUser(codeResponse)
            let accessToken = codeResponse.access_token;

            if (accessToken) {
                const response: any = await axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            Accept: 'application/json'
                        }
                    });

                const firstName = response['given_name'];
                const lastName = response['family_name'];
                const email = response['email'];

                const data = {
                    "authProvider": [{
                        "identifier": email,
                        "provider": "GOOGLE"
                    }],
                    "email": email,
                    "firstName": firstName,
                    "lastName": lastName
                }
                // console.log(`data`, data);
                handleUserSignIn(data);
            }
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const handleUserSignIn = async (data: any) => {
        const response = await signIn(data);
        authLogin(response.data.user._id, response.data.access_token, response.data.user.email);
        window.location.reload();
    }

    const loginWithGithub = async () => {
        try {
            const res = await getDataMethod("https://github.com/login/oauth/authorize?client_id=" + import.meta.env.VITE_GITHUB_CLIENT_ID);
            const data = res;
            console.log(`data`, data);
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="p-[25px] bg-base-gradient rounded-md w-[500px]">

            <div className="text-center flex flex-col gap-2 load-into-place-anim">
                <div className="text-2xl text-white font-semibold">Build and Discover the Future</div>
                <div className="text-m text-white opacity-50 font-medium">Get Started, Login / Sign up</div>
            </div>
            <div className="flex flex-col gap-2 m-auto flex items-center justify-center p-5">

                <Button onClick={() => login()} variant="button" color="fun">
                    <div className="flex flex-row gap-2 text-m font-semibold items-center">
                        <FaGoogle />
                        Sign in with Google
                    </div>
                </Button>
                <Button onClick={() => loginWithGithub()} variant="button" color="subtle">
                    <div className="flex flex-row gap-2 text-m font-semibold items-center">
                        <FaGithub />
                        Sign in with Github
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default AuthenticationModal;