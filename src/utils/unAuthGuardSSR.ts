import { GetServerSideProps } from 'next';

import { DateTime } from 'luxon';

const unAuthGuardSSR: GetServerSideProps = async ({ req, query }) => {
  if (req.cookies['shared-auth']) {
    const cookie = JSON.parse(req.cookies['shared-auth']);
    const { redirectTarget } = req.cookies;
    const queryRedirectTarget = query['redirect-target'] as string | undefined;

    if (DateTime.fromSeconds(Number(cookie.expiry)) > DateTime.now())
      return {
        redirect: {
          permanent: false,
          destination: queryRedirectTarget || redirectTarget || '/',
        },
      };
  }
  return { props: {} };
};

export default unAuthGuardSSR;
