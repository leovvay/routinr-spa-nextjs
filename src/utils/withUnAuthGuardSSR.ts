import { GetServerSideProps } from 'next';

import unAuthGuardSSR from './unAuthGuardSSR';

/**
 * Provide possibility to override redirect on pages with unauthorized access protection
 * @param func
 */
export default function withUnAuthGuard(
  func: GetServerSideProps
): GetServerSideProps {
  return async (ctx) => {
    const customResult = await func(ctx);

    if ('redirect' in customResult) return customResult;

    return unAuthGuardSSR(ctx);
  };
}
