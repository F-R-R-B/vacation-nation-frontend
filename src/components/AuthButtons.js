import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Login <FontAwesomeIcon className="mx-2" icon={faRightToBracket} size='lg'/> </button>
};

const LogoutButton = (props) => {
  const { logout } = useAuth0();
  return <button onClick={() => logout({ returnTo: window.location.origin })}>Logout <FontAwesomeIcon className="mx-2" icon={faRightFromBracket} size='lg'/> </button>
};

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </button>
  );
};

export { AuthButton, SignupButton, LoginButton, LogoutButton };