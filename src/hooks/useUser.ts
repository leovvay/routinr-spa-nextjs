import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useGetMeQuery, User } from '@store/services/users';
import { clearAuthCookies } from '@utils';

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
  const { data: currentUser, isError, isFetching, refetch } = useGetMeQuery();

  const logout = useCallback(() => {
    clearAuthCookies();
    refetch();
    router.reload();
  }, [refetch, router]);

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || isFetching) return;

    if (redirectTo && isError) {
      logout();
      router.push(redirectTo as string);
    }
  }, [redirectTo, currentUser, isError, isFetching, logout, router]);

  return { currentUser: isError ? undefined : currentUser, logout };
}
