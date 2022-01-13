import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import NoSsr from '@mui/material/NoSsr';

import HeaderV2 from '@components/Header_V2';
import Header from '@components/Header';
import FooterV2 from '@components/Footer_V2';
import Footer from '@components/Footer';
import { PageWrapper, PageContent } from '@components/PageWrapper';
import {
  useIsMobileVersion,
  useIsTabletVersion,
  useSegmentPageEvent,
  useUser,
} from '@hooks';
import { User, userApi } from '@store/services/users';
import { store } from '@store/index';
import { settingsApi } from '@store/services/settings';
import { Category } from '@store/services/categories';

import DesktopIndexV2 from '@modules/index/components/DesktopIndex_V2';
import DesktopIndex from '@modules/index/components/DesktopIndex';
import MobileIndexV2 from '@modules/index/components/MobileIndex_V2';
import MobileIndex from '@modules/index/components/MobileIndex';

interface HomeProps {
  mainCategory: Category;
  topInfluencers: User[];
}

export default function Home({
  mainCategory,
  topInfluencers,
}: HomeProps): JSX.Element {
  const { currentUser } = useUser();
  const isMobile = useIsMobileVersion();
  const isTablet = useIsTabletVersion();

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Routines from people of influence | Routinr</title>
        <meta
          property="og:title"
          content="Routines from people of influence | Routinr"
          key="title"
        />
      </Head>
      <NoSsr>{currentUser ? <Header /> : <HeaderV2 />}</NoSsr>
      <PageContent>
        {currentUser &&
          (isMobile ? (
            <MobileIndex influencers={topInfluencers} />
          ) : (
            <DesktopIndex
              influencers={topInfluencers}
              mainCategory={mainCategory}
            />
          ))}
        {!currentUser && (isTablet ? <MobileIndexV2 /> : <DesktopIndexV2 />)}
      </PageContent>
      <NoSsr>{currentUser ? <Footer /> : <FooterV2 />}</NoSsr>
    </PageWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [
    { data: topInfluencers },
    { data: mainBanner },
    { data: mainCategory },
  ] = await Promise.all([
    store.dispatch(userApi.endpoints.getTrendyUsers.initiate(6)),
    store.dispatch(settingsApi.endpoints.mainBanner.initiate()),
    store.dispatch(settingsApi.endpoints.mainCategory.initiate()),
  ]);

  return {
    props: {
      mainCategory,
      mainBanner,
      topInfluencers,
    },
  };
};
