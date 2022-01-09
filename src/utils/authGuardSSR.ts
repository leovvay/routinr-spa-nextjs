import { GetServerSideProps } from 'next';

import { DateTime } from 'luxon';

const authGuardSSR: GetServerSideProps = async ({ req }) => {
  const redirect = {
    redirect: {
      permanent: false,
      destination: '/login',
    },
  };

  if (req.cookies['shared-auth']) {
    const cookie = JSON.parse(req.cookies['shared-auth']);

    if (DateTime.fromSeconds(Number(cookie.expiry)) < DateTime.now())
      return redirect;
  } else {
    return redirect;
  }
  return { props: {} };
};

export default authGuardSSR;
