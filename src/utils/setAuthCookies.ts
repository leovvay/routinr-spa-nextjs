import { DateTime } from 'luxon';
import Cookies from 'js-cookie';

export interface AuthInfo {
  uid: string;
  client: string;
  expiry: number;
  tokenType: string;
  accessToken: string;
}

const setAuthCookies = (authCookies: AuthInfo) => {
  const expiry = DateTime.fromSeconds(Number(authCookies.expiry));

  const cookiesOptions = {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    expires: expiry.toJSDate(),
    sameSite: 'lax' as const,
  };

  Cookies.set(
    'ember_simple_auth-session-expiration_time',
    '1209600',
    cookiesOptions
  );
  Cookies.set('shared-auth', JSON.stringify(authCookies), cookiesOptions);

  document.cookie = `ember_simple_auth-session=${encodeURIComponent(
    JSON.stringify({
      authenticated: {
        authenticator: 'authenticator:devise',
        ...authCookies,
      },
    })
  )};domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN};expires=${expiry.toISO()}`;
};

export default setAuthCookies;
