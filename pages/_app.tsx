import '@/styles/globals.css';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const providerConfig: Auth0ProviderOptions = {
    domain: `${process.env.domain}`,
    clientId: `${process.env.clientId}`,
    authorizationParams: {
      redirect_uri: 'http://localhost:3000',
    },
  };

  return (
    <Auth0Provider {...providerConfig}>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
