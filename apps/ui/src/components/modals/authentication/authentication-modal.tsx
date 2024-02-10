import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import * as React from 'react';

import axios from 'axios';
import { signIn } from '../../../api/services/authentication/authentication.service';

const AuthenticationModal: React.FC = () => {
    const [user, setUser] = React.useState([]);
    const [profile, setProfile] = React.useState([]);
    const [response, setResponse] = React.useState({});

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
                handleUserSignIn(data);
            }
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const handleUserSignIn = async (data: any) => {
        const response = await signIn(data);
        console.log(`response`, response);
    }

    React.useEffect(() => { }, [user]);

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile([]);
    };


    return (
        <div className="p-[25px] bg-base-gradient rounded-md w-[500px]">

            <div className="text-center flex flex-col gap-2 load-into-place-anim">
                <div className="text-2xl text-white font-semibold">Build and Discover the Future</div>
                <div className="text-m text-white opacity-50 font-medium">Get Started, Login / Sign up</div>
            </div>
            <div className="flex flex-col gap-2 m-auto flex items-center justify-center p-5">

                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            </div>
        </div>
    )
}

export default AuthenticationModal;
