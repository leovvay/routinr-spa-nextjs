import { GetServerSideProps } from 'next';

import authGuardSSR from './authGuardSSR';

export default function withAuthGuard(
  func: GetServerSideProps
): GetServerSideProps {
  return async (ctx) => {
    const guardResult = await authGuardSSR(ctx);

    if ('redirect' in guardResult) return guardResult;

    return func(ctx);
  };
}
