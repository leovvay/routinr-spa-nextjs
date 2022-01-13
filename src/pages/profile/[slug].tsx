import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { useSnackbar } from 'notistack';

import { store } from '@store/index';
import {
  Influencer,
  useGetInfluencerInfoQuery,
  userApi,
} from '@store/services/users';
import { Membership } from '@store/services/membership/membership.interface';
import {
  GetMembershipPurchaseSecretArgs,
  useLazyGetMembershipPurchaseSecretQuery,
} from '@store/services/purchases';
import {
  useIsMobileVersion,
  usePaymentStatus,
  useUser,
  useRedirectTarget,
} from '@hooks';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import {
  InfluencersPost,
  useInfinityInfluencersPostsQuery,
} from '@store/services/posts';
import Loader from '@components/Loader';
import LoginModal from '@components/LoginModal';
import useInfinityInfluencersRoutinesQuery from '@store/services/routines/useInfinityInfluencersRoutinesQuery';

import MembershipOptions from '@modules/profile/[slug]/components/MembershipOptions';
import PurchaseModal from '@modules/routines/[slug]/components/PurchaseModal';
import { LoaderContainer } from '@modules/routines/[slug]/edit.styled';

const ProfilePageDesktop = dynamic(
  () => import('@modules/profile/[slug]/components/ProfilePageDesktop'),
  {
    loading: () => (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    ),
  }
);

const ProfilePageMobile = dynamic(
  () => import('@modules/profile/[slug]/components/ProfilePageMobile'),
  {
    loading: () => (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    ),
  }
);

interface ProfilePageProps {
  initialInfluencer: Influencer;
}

function ProfilePage({ initialInfluencer }: ProfilePageProps) {
  const isMobile = useIsMobileVersion();
  const router = useRouter();
  const { slug, purchasing, membershipId, subscribe = false } = router.query;
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser } = useUser();
  const [, setRedirectTarget, removeRedirectTarget] = useRedirectTarget();

  const [getClientSecret, { data: clientSecret, isFetching, error }] =
    useLazyGetMembershipPurchaseSecretQuery();
  const { data: influencer = initialInfluencer } = useGetInfluencerInfoQuery(
    slug as string,
    { skip: !slug }
  );
  const routines = useInfinityInfluencersRoutinesQuery(Number(influencer.id));
  const posts = useInfinityInfluencersPostsQuery(Number(influencer.id));

  const [openOptions, setOpenOptions] = useState(subscribe as boolean);
  const [membershipForOptions, setMembershipForOptions] = useState(
    influencer.memberships
  );
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [purchasingMembership, setPurchasingMembership] =
    useState<Membership>();
  const [showLogin, setShowLogin] = useState(false);

  const showSubscribeButton = useMemo(() => {
    const hasMemberships = Boolean(influencer.memberships.length);
    const subscribedToAll = influencer.memberships.every(
      (membership) => membership.isSubscribed
    );

    return hasMemberships && !subscribedToAll;
  }, [influencer.memberships]);

  const handleSubscribe = () => {
    setMembershipForOptions(influencer.memberships);
    setOpenOptions(true);
  };

  const handleUnlock = (post: InfluencersPost) => () => {
    if (post.membershipId)
      setMembershipForOptions(
        influencer.memberships.filter(
          (membership) => Number(membership.id) === Number(post.membershipId)
        )
      );
    else setMembershipForOptions(influencer.memberships);
    setOpenOptions(true);
  };

  const onBuy = (membership: Membership) => {
    if (currentUser) {
      setPurchasingMembership(membership);
      setShowPurchaseModal(true);
    } else {
      const searchParams = new URLSearchParams('');
      searchParams.set('purchasing', 'true');
      searchParams.set('membershipId', String(membership.id));
      setRedirectTarget(`${window.location}?${searchParams}`);

      setOpenOptions(false);
      setShowPurchaseModal(false);
      setShowLogin(true);
    }
  };

  const getSecret = async (paymentMethodId?: string) => {
    if (purchasingMembership) {
      const args: GetMembershipPurchaseSecretArgs = {
        membershipId: Number(purchasingMembership.id),
      };

      if (paymentMethodId) args.paymentMethodId = paymentMethodId;

      await getClientSecret(args);
    }
  };

  const pageTitle = `${influencer.displayName} Routines, Plans and Premium Content | Routinr`;

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      setPurchasingMembership(undefined);
      setShowPurchaseModal(false);
    }
  }, [enqueueSnackbar, error]);

  useEffect(() => {
    if (purchasing && membershipId && influencer && currentUser) {
      setShowPurchaseModal(true);
      setPurchasingMembership(
        influencer.memberships.find(
          ({ id }) => Number(id) === Number(membershipId)
        )
      );
      removeRedirectTarget();
    }
    return () => removeRedirectTarget();
  }, [currentUser, influencer, membershipId, purchasing, removeRedirectTarget]);

  usePaymentStatus();

  return (
    <PageWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta
          property="og:description"
          content={influencer.description.slice(0, 150)}
        />
        <meta property="og:image" content={influencer.avatar} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_HOST}/profile/${influencer?.slug}`}
        />
      </Head>
      <Header />
      <PageContent>
        {isMobile ? (
          <ProfilePageMobile
            influencer={influencer}
            routines={routines}
            posts={posts}
            showSubscribeButton={showSubscribeButton}
            handleUnlock={handleUnlock}
            handleSubscribe={handleSubscribe}
          />
        ) : (
          <ProfilePageDesktop
            influencer={influencer}
            routines={routines}
            posts={posts}
            showSubscribeButton={showSubscribeButton}
            handleUnlock={handleUnlock}
            onBuy={onBuy}
            handleSubscribe={handleSubscribe}
          />
        )}
        <MembershipOptions
          open={openOptions}
          onClose={() => setOpenOptions(false)}
          influencer={influencer}
          memberships={membershipForOptions}
          onBuy={onBuy}
        />
        <PurchaseModal
          open={showPurchaseModal}
          handleCancel={() => setShowPurchaseModal(false)}
          price={purchasingMembership?.price ?? 1}
          clientSecret={clientSecret}
          isFetchingSecret={isFetching}
          getClientSecret={getSecret}
        />
        <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default ProfilePage;

export const getServerSideProps: GetServerSideProps<{}, { slug: string }> =
  async ({ params: { slug } = {} }) => {
    const redirect = {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };

    if (!slug) return redirect;

    const { data, error } = await store.dispatch(
      userApi.endpoints.getInfluencerInfo.initiate(slug)
    );
    if (error) console.error('ProfilePage: ', error);
    if (!data) return redirect;

    return {
      props: { initialInfluencer: data || null },
    };
  };
