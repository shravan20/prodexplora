//@ts-nocheck
import { GoogleLogin } from '@react-oauth/google';
import * as React from 'react';

const AuthenticationModal: React.FC = () => {
  const handleLoginSuccess = async (credentialResponse: any) => {
    console.log(`credentialResponse`, credentialResponse);
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
          onError={() => handleLoginFailure}
        />
      </div>
    </div>
  )
}

export default AuthenticationModal;