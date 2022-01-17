import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { getSocialAuthLink, setAuthCookies } from '@utils';
import { useLazyGetMeQuery } from '@store/services/users';

import useRedirectTarget from './useRedirectTarget';
import useUser from './useUser';

export default function useLegacyAppLogin() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [getMe] = useLazyGetMeQuery();
  const [redirectTarget, , clearRedirectTarget] = useRedirectTarget();
  const { currentUser } = useUser();

  const fbAuthLink = getSocialAuthLink('facebook', redirectTarget);
  const googleAuthLink = getSocialAuthLink('google', redirectTarget);

  const login = useCallback(
    async (data: { email: string; password: string }) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LEGACY_API_HOST}/api/v1/auth/sign_in`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',
          },
        }
      );

      if (response.ok) {
        setAuthCookies({
          uid: response.headers.get('uid') as string,
          client: response.headers.get('client') as string,
          expiry: Number(response.headers.get('expiry')),
          tokenType: response.headers.get('token-type') as string,
          accessToken: response.headers.get('access-token') as string,
        });

        getMe();
      } else {
        const text = await response.json();
        enqueueSnackbar(text.errors[0], {
          variant: 'error',
        });
      }
    },
    [enqueueSnackbar, getMe]
  );

  const resetPassword = useCallback(async (data: { email: string }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LEGACY_API_HOST}/api/v1/auth/password`,
      {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          redirect_url: `${process.env.NEXT_PUBLIC_HOST}/login`,
        }),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      }
    );

    const result: { success: boolean; error: null | string } = {
      success: false,
      error: null,
    };

    if (response.ok) {
      result.success = true;
    } else {
      const { errors } = await response.json();
      [result.error] = errors;
    }

    return result;
  }, []);

  useEffect(() => {
    if (currentUser && redirectTarget) {
      window.location.href = redirectTarget;
      clearRedirectTarget();
    }
  }, [clearRedirectTarget, currentUser, redirectTarget]);

  useEffect(() => {
    const { query } = router;

    if (query.auth_token) {
      setAuthCookies({
        uid: query.uid as string,
        client: query.client_id as string,
        expiry: Number(query.expiry),
        tokenType: 'Bearer',
        accessToken: query.auth_token as string,
      });
      getMe();

      if (query.oauth_registration)
        router.push('/register/complete-registration');
      else if (query.reset_password)
        router.push('/account?reset_password=true');
      else if (redirectTarget) {
        window.location.href = redirectTarget;
        clearRedirectTarget();
      }
    }
  }, [clearRedirectTarget, getMe, redirectTarget, router]);

  return {
    fbAuthLink,
    googleAuthLink,
    login,
    resetPassword,
  };
}
