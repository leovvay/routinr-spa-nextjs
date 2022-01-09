import Cookies from 'js-cookie';

import { AuthInfo } from './setAuthCookies';

interface LegacyAuthHeaders {
  uid: string;
  client: string;
  expiry: string;
  'access-token': string;
  'token-type': string;
}

export default function getLegacyAuthHeaders():
  | LegacyAuthHeaders
  | Record<string, string> {
  const cookies = Cookies.get('shared-auth');
  if (cookies) {
    const cookiesSerialized: AuthInfo = JSON.parse(cookies);
    return {
      uid: cookiesSerialized.uid,
      client: cookiesSerialized.client,
      expiry: String(cookiesSerialized.expiry),
      'access-token': cookiesSerialized.accessToken,
      'token-type': cookiesSerialized.tokenType,
    };
  }

  return {};
}
