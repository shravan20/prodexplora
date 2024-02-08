import { GoogleLogin } from '@react-oauth/google';
import * as React from 'react'

import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../../../context/AuthContext';
import { useGoogleLogin } from 'react-google-login';

const AuthenticationModal:React.FC = () => {
  const { token, authLogin } = useAuth();

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      };
    
    
      const handleLoginSuccess = async (credentialResponse: any) => {
        var userResponse = jwtDecode(credentialResponse.credential);
    
        //extract user details
        const email = userResponse.email,
        family_name = userResponse.family_name,
        given_name = userResponse.given_name,
        full_name = userResponse.given_name + ' ' + userResponse.family_name,
        picture = userResponse.picture;

        console.log(`email`, email);
        console.log(`family_name`, family_name);
        console.log(`given_name`, given_name);
        console.log(`picture`, picture);
        // handleAuthService();
      };

      const handleLoginFailure = (error: any) => {
        alert("Something went wrong, please try again");
        console.log(`error`, error);
      }
  
    return (
        <div className="p-[25px] bg-base-gradient rounded-md w-[500px]">
            
            <div className="text-center flex flex-col gap-2 load-into-place-anim">
                <div className="text-2xl text-white font-semibold">Build and Discover the Future</div>
                <div className="text-m text-white opacity-50 font-medium">Get Started, Login / Sign up</div>
            </div>
            <div className="flex flex-col gap-2 m-auto flex items-center justify-center p-5">
                <GoogleLogin
                                      onSuccess={(credentialResponse) => {
                                        handleLoginSuccess(credentialResponse);
                                      }}
                                      onError={handleLoginFailure}
                                    />
            </div>
        </div>
    )
}

export default AuthenticationModal;