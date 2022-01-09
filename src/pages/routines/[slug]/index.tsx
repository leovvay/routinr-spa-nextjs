import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NoSsr from '@mui/material/NoSsr';
import { useSnackbar } from 'notistack';

import { store } from '@store/index';
import Header from '@components/Header';
import {
  routinesApi,
  RoutineWithUserInfo,
  useGetRoutinePageInfoQuery,
} from '@store/services/routines';
import { PageWrapper, PageContent } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Loader from '@components/Loader';
import {
  useIsMobileVersion,
  useUser,
  usePaymentStatus,
  useRedirectTarget,
} from '@hooks';
import {
  GetRoutinePurchaseSecretArgs,
  useLazyGetRoutinePurchaseSecretQuery,
} from '@store/services/purchases';
import LoginModal from '@components/LoginModal';

import RoutineMobile from '@modules/routines/[slug]/components/RoutineMobile';
import RoutineDesktop from '@modules/routines/[slug]/components/RoutineDesktop';
import { PageLoaderContainer } from '@modules/index.styled';
import PurchaseModal from '@modules/routines/[slug]/components/PurchaseModal';

interface RoutinePageProps {
  initialRoutinePageInfo: RoutineWithUserInfo;
}

function Index({ initialRoutinePageInfo }: RoutinePageProps): JSX.Element {
  const isMobile = useIsMobileVersion();
  const router = useRouter();
  const { currentUser } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const [, setRedirectTarget, removeRedirectTarget] = useRedirectTarget();

  const { slug, purchasing } = router.query;

  const { data: routine = initialRoutinePageInfo, refetch } =
    useGetRoutinePageInfoQuery(
      {
        slug: slug as string,
        userId: Number(currentUser?.id) as number,
      },
      { skip: !(slug && currentUser?.id) }
    );
  const [getClientSecret, { data: clientSecret, error, isFetching }] =
    useLazyGetRoutinePurchaseSecretQuery();

  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const pageTitle = routine
    ? `${routine.title} by ${routine.creator.handle} | Routinr`
    : 'Routine | Routinr';

  const getSecret = async (paymentMethodId?: string) => {
    const args: GetRoutinePurchaseSecretArgs = {
      routineId: Number(routine.id),
    };

    if (paymentMethodId) args.paymentMethodId = paymentMethodId;

    return getClientSecret(args);
  };

  const onBuy = useCallback(() => {
    if (currentUser && !routine.isFree) {
      setShowPurchaseModal(true);
    } else {
      const searchParams = new URLSearchParams('');
      searchParams.set('purchasing', 'true');
      setRedirectTarget(`${window.location}?${searchParams}`);

      setShowPurchaseModal(false);
      setShowLogin(true);
    }
  }, [currentUser, routine.isFree, setRedirectTarget]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  }, [enqueueSnackbar, error]);

  useEffect(() => {
    if (purchasing && currentUser) {
      onBuy();
      removeRedirectTarget();
    }
    return () => removeRedirectTarget();
  }, [currentUser, onBuy, purchasing, removeRedirectTarget]);

  usePaymentStatus(routine?.id);

  return (
    <PageWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta
          property="og:description"
          content={routine?.description.slice(0, 150)}
        />
        <meta property="og:image" content={routine?.cover.previewUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_HOST}/routines/${routine?.slug}`}
        />
      </Head>
      <Header />
      <PageContent>
        {!routine && (
          <PageLoaderContainer>
            <Loader />
          </PageLoaderContainer>
        )}
        <NoSsr>
          {routine && isMobile ? (
            <RoutineMobile routine={routine} onUpdate={refetch} onBuy={onBuy} />
          ) : (
            <RoutineDesktop
              routine={routine}
              onUpdate={refetch}
              onBuy={onBuy}
            />
          )}
          <PurchaseModal
            fullScreen={isMobile}
            open={showPurchaseModal}
            handleCancel={() => setShowPurchaseModal(false)}
            price={routine.price}
            clientSecret={clientSecret}
            isFetchingSecret={isFetching}
            getClientSecret={getSecret}
          />
          <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
        </NoSsr>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Index;

export async function getServerSideProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await store.dispatch(
    routinesApi.endpoints.getRoutinePageInfo.initiate({ slug })
  );

  return {
    props: { initialRoutinePageInfo: data || null },
  };
}
