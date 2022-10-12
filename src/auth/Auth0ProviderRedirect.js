import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const Auth0ProviderRedirect = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const location = useLocation().pathname;
  localStorage['goingTo'] = location;
  console.log(localStorage);

  const onRedirectCallback = (appState) => {
    return <Navigate to={localStorage['goingTo']} replace={true}/>
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderRedirect;