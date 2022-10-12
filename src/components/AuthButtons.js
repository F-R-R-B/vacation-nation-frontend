import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Login</button>
};

const LogoutButton = (props) => {
  const { user, logout } = useAuth0();
  return <button onClick={() => logout({ returnTo: window.location.origin })}> {user.name} (Logout) </button>
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