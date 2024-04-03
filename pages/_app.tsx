import '@/styles/globals.css';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const providerConfig: Auth0ProviderOptions = {
    domain: `${process.env.NEXT_PUBLIC_OKTA_DOMAIN}`,
    clientId: `${process.env.NEXT_PUBLIC_OKTA_CLIENT_ID}`,
    authorizationParams: {
      redirect_uri: `${process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI}`,
    },
  };

  return (
    <Auth0Provider {...providerConfig}>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
