import Cookies from 'js-cookie';

const clearAuthCookie = () => {
  Cookies.remove('shared-auth', {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    secure: true,
  });
  Cookies.remove('ember_simple_auth-session', {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    secure: true,
  });
  Cookies.remove('ember_simple_auth-session-expiration_time', {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    secure: true,
  });
};

export default clearAuthCookie;
