import React, { useMemo } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useMedia } from 'react-use';

import NoSsr from '@mui/material/NoSsr';

import { store } from '@store/index';
import { categoriesApi, Category } from '@store/services/categories';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Header from '@components/Header';
import Footer from '@components/Footer';
import CategoryCard from '@components/CategoryCard';
import MobileOnPageNav from '@components/MobileOnPageNav';
import { useIsMobileVersion } from '@hooks';

import { BrowseContainer, BrowseNavContainer } from '@modules/browse.styled';

interface BrowseProps {
  categories: Category[];
}

function Browse({ categories }: BrowseProps) {
  const isMobile = useIsMobileVersion();

  const everyFourth = useMedia('(max-width:1360px)');
  const everyThird = useMedia('(max-width:1040px)');
  const bannerIndex = useMemo(() => {
    if (everyThird) return 3;
    if (everyFourth) return 4;
    return 5;
  }, [everyFourth, everyThird]);

  return (
    <PageWrapper>
      <Head>
        <title>Browse | Routinr</title>
        <meta property="og:title" content="Browse | Routinr" key="title" />
      </Head>
      <NoSsr>
        <Header />
      </NoSsr>
      <PageContent>
        <NoSsr>
          {isMobile && (
            <BrowseNavContainer>
              <MobileOnPageNav />
            </BrowseNavContainer>
          )}
          <BrowseContainer>
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image.url}
                routinesCount={category.routinesCount}
                isBanner={
                  !isMobile && (index === 0 || index % bannerIndex === 0)
                }
              />
            ))}
          </BrowseContainer>{' '}
        </NoSsr>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Browse;

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  const { data } = await store.dispatch(
    categoriesApi.endpoints.getCategories.initiate()
  );
  return {
    props: { categories: data },
  };
};
