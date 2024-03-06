import { useGoogleLogin } from '@react-oauth/google';
import * as React from 'react';

import axios from 'axios';
import { signIn } from '../../../api/services/authentication.service';
import { useAuth } from '../../../context/AuthContext';

import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Button } from '../../../packages/ui/components/buttons/Button';
import { authResponse } from '../../../types/auth/auth-response.types';

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
                console.log(`data`, data);
                handleUserSignIn(data);
            }
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const handleUserSignIn = async (data: authResponse) => {
        const response = await signIn(data);
        authLogin(response.payload.user._id, response.payload.access_token, response.payload.user.email);
    }

    const loginWithGithub = async () => {
        window.location.href = "https://github.com/login/oauth/authorize?client_id=" + import.meta.env.VITE_GITHUB_CLIENT_ID + "&scope=read:user,user:email,user:follow,read:project,repo:public_repo";
    }

    const getAccessToken = async (url: string) => {
        return await axios.get(url);
    }

    async function githubLogin(data: any) {
        let option = {
            headers: {
                'Authorization': `token ${data.data.access_token}`
            }
        };

        let userUrl = `https://api.github.com/user`;
        let user = await axios.get(userUrl, option);
        let emailUrl = 'https://api.github.com/user/email';

        if (user) {
            let emails = await axios.get(emailUrl, option);
        }
        // TODO: Backend API call for github-login
    }

    React.useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const githubCode = urlParams.get('code');

        //1. Make an API call to get user access token
        //2. https://github.com/login/oauth/access_token?client_id=clientId&client_secret=secret&code=tokens
        //3. use access_token make user information get call https://api.github.com/user
        //4. https://api.github.com/user/emails get emails with accesstoken

        console.log("====>>>>>>", githubCode);

        if (githubCode) {
            let tokenUrl = `https://github.com/login/oauth/access_token?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}&code=${githubCode}`
            getAccessToken(tokenUrl)
                .then(async (data) => {
                    await githubLogin(data);
                });
        }

    }, []);



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
