import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export default function useURLSearchParams(param: string) {
  const router = useRouter();

  const query = useMemo(
    () => new URLSearchParams(router.query as Record<string, string>),
    [router.query]
  );

  const push = useCallback(() => {
    router.push(`${router.pathname}?${query.toString()}`, undefined, {
      scroll: false,
    });
  }, [query, router]);

  const handleChange = useCallback(
    (value: string, skipPush: boolean = false) => {
      query.set(param, value);

      if (!skipPush)
        router.push(`${router.pathname}?${query.toString()}`, undefined, {
          scroll: false,
        });
    },
    [param, query, router]
  );

  return {
    value: query.get(param),
    handleChange,
    push,
  };
}
