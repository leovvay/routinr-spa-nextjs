import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useGetMeQuery, User } from '@store/services/users';
import { areAuthCookiesExist, clearAuthCookies } from '@utils';

interface UseUserOptions {
  redirectTo?: string | boolean;
}

interface UseUserResult {
  currentUser?: User;
  logout(): void;
}

export default function useUser({
  redirectTo = false,
}: UseUserOptions = {}): UseUserResult {
  const router = useRouter();
  const { data: currentUser, isError, refetch } = useGetMeQuery();

  const logout = useCallback(() => {
    clearAuthCookies();
    refetch();
    router.reload();
  }, [refetch, router]);

  useEffect(() => {
    if (isError && areAuthCookiesExist()) logout();
  }, [isError, logout]);

  useEffect(() => {
    // redirect from protected pages
    if (redirectTo && isError) {
      router.push(redirectTo as string);
    }
  }, [isError, redirectTo, router]);

  return { currentUser: isError ? undefined : currentUser, logout };
}
