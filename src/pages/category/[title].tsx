import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Text, { TextLight } from '@components/Text';
import Loader from '@components/Loader';
import { PageWrapper, PageContent } from '@components/PageWrapper';
import PageFilter from '@components/PageFilters/PageFilter';
import { useGetCategoryQuery } from '@store/services/categories';
import {
  useInfinityCategoryInfluencersQuery,
  User,
} from '@store/services/users';
import InfluencerCard from '@components/InfluencerCard';
import Touchable from '@components/Touchable';
import {
  PageContentType,
  PageSortType,
  Routine,
  useInfinityCategoryRoutinesQuery,
} from '@store/services/routines';
import RoutineCard from '@components/RoutineCards/RoutineCard';
import ModalInfluencerInfo from '@components/ContentInfo/ModalInfluencerInfo';
import ModalRoutineInfo from '@components/ContentInfo/ModalRoutineInfo';
import { useSegmentPageEvent } from '@hooks';
import GridList from '@components/GridList';

import {
  CategoryPageBody,
  CategoryPageCaption,
  CategoryPageViewMoreButton,
} from '@modules/category.styled';

function Category(): JSX.Element {
  const router = useRouter();
  const { title, sort = 'recent', contentType = 'all' } = router.query;

  const [shownRoutine, setShownRoutine] = useState<Routine>();
  const [shownInfluencer, setShownInfluencer] = useState<User>();

  const { data: category } = useGetCategoryQuery(
    { title } as { title: string },
    {
      skip: !title,
    }
  );
  const {
    data: influencers,
    hasNextPage: influencersHasNextPage,
    fetchNext: fetchNextIncluencers,
    isFetching: isInfluencersFetching,
  } = useInfinityCategoryInfluencersQuery(
    {
      categoryIds: category ? [String(category?.id)] : [],
      first: 12,
      skipOption: { skip: !category },
    },
    []
  );

  const {
    data: routinePages,
    hasNextPage: routinesHasNextPage,
    fetchNextPage: fetchNextRoutines,
    isFetching: isRoutinesFetching,
    refetch,
  } = useInfinityCategoryRoutinesQuery({
    categoryIds: category ? [String(category.id)] : [],
    first: 12,
    contentType: contentType as PageContentType,
    sort: sort as PageSortType,
  });

  const totalCount =
    routinePages?.pages[0].categoryRoutines.pageInfo.totalCount ?? 0;
  const routines =
    routinePages?.pages.map((page) => page.categoryRoutines.edges).flat() ?? [];

  const closeInfluencer = () => {
    setShownInfluencer(undefined);
  };

  const closeRoutine = () => {
    setShownRoutine(undefined);
  };

  useEffect(() => {
    refetch();
  }, [contentType, refetch, sort]);

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>{`Browse ${title} Routines and Plans on Routinr | Routinr`}</title>
        <meta
          property="og:title"
          content={`${title} Routines and Plans on Routinr | Routinr`}
          key="title"
        />
      </Head>
      <Header background={category?.bannerImage.url} />
      <PageContent>
        <PageFilter />
        <CategoryPageBody>
          <Text size="h3">
            Top{' '}
            <CategoryPageCaption size="h3">
              {category && category.title}
            </CategoryPageCaption>{' '}
            influencers
          </Text>
          <TextLight size="bodySmallBold" as="p">
            A selected Routinr influencers rising in the leaderboard
          </TextLight>

          <GridList>
            {influencers?.map(({ node: influencer }) => (
              <Touchable
                key={influencer.slug}
                onClick={() => setShownInfluencer(influencer)}
              >
                <InfluencerCard
                  avatar={influencer.avatar}
                  handle={influencer.handle}
                  slug={influencer.slug}
                  followersCount={influencer.followers.length}
                  link={false}
                />
              </Touchable>
            ))}
          </GridList>

          {influencersHasNextPage && (
            <CategoryPageViewMoreButton
              onClick={isInfluencersFetching ? () => {} : fetchNextIncluencers}
            >
              {isInfluencersFetching ? <Loader size={20} /> : 'View more'}
            </CategoryPageViewMoreButton>
          )}
        </CategoryPageBody>
        <CategoryPageBody>
          <Text size="h3">
            <CategoryPageCaption size="h3">
              {category && `${totalCount} ${category.title}`}
            </CategoryPageCaption>{' '}
            Routines
          </Text>
          <TextLight size="bodySmallBold" as="p">
            We’ve highlighted Routines for you
          </TextLight>

          <GridList>
            {routines?.map(({ node: routine }) => (
              <Touchable
                key={routine.slug}
                onClick={() => setShownRoutine(routine)}
                component="div"
              >
                <RoutineCard routine={routine} />
              </Touchable>
            ))}
          </GridList>

          {routinesHasNextPage && (
            <CategoryPageViewMoreButton
              onClick={
                isRoutinesFetching ? () => {} : () => fetchNextRoutines()
              }
            >
              {isRoutinesFetching ? <Loader size={20} /> : 'View more'}
            </CategoryPageViewMoreButton>
          )}
        </CategoryPageBody>
      </PageContent>
      <Footer />

      {shownInfluencer && (
        <ModalInfluencerInfo
          influencer={shownInfluencer}
          onClose={closeInfluencer}
        />
      )}
      {shownRoutine && (
        <ModalRoutineInfo routine={shownRoutine} onClose={closeRoutine} />
      )}
    </PageWrapper>
  );
}

export default Category;
