import React from 'react';
import { Index } from 'react-instantsearch-dom';
import { useRouter } from 'next/router';

import PageFilter from '@components/PageFilters/PageFilter';
import Text, { TextLight } from '@components/Text';

import {
  CategoryPageBody,
  CategoryPageCaption,
} from '@modules/category.styled';

import InfluencersList from '../InfluencersList';
import HiddenAlgoliaSort from '../HiddenAlgoliaSort';
import HiddenAlgoliaContentTypeRefinement from '../HiddenAlgoliaContentTypeRefinement';
import HiddenAlgoliaCategoriesRefinement from '../HiddenAlgoliaCategoriesRefinement';
import RoutinesList from '../RoutinesList';

const INFLUENCERS_INDEX = process.env
  .NEXT_PUBLIC_ALGOLIA_INFLUENCERS_INDEX as string;
const ROUTINES_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_ROUTINES_INDEX as string;

function SearchDesktop(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <PageFilter categoryFilter />

      <CategoryPageBody>
        <Text size="h3">
          Top{' '}
          <CategoryPageCaption size="h3">
            {router.query.searchQuery}
          </CategoryPageCaption>{' '}
          influencers
        </Text>
        <TextLight size="bodySmallBold" as="p">
          A selected Routinr influencers rising in the leaderboard
        </TextLight>

        <Index indexName={INFLUENCERS_INDEX}>
          <InfluencersList />
        </Index>
      </CategoryPageBody>
      <CategoryPageBody>
        <Text size="h3">
          <CategoryPageCaption size="h3">
            {router.query.searchQuery}
          </CategoryPageCaption>{' '}
          Routines
        </Text>
        <TextLight size="bodySmallBold" as="p">
          We’ve highlighted Routines for you
        </TextLight>
        <Index indexName={ROUTINES_INDEX}>
          <HiddenAlgoliaSort
            defaultRefinement={ROUTINES_INDEX}
            items={[
              { value: ROUTINES_INDEX, label: 'Recent' },
              { value: `${ROUTINES_INDEX}_popular`, label: 'Popular' },
              { value: `${ROUTINES_INDEX}_trending`, label: 'Trending' },
            ]}
          />
          <HiddenAlgoliaContentTypeRefinement attribute="isFree" />
          <HiddenAlgoliaCategoriesRefinement attribute="categories" />
          <RoutinesList />
        </Index>
      </CategoryPageBody>
    </>
  );
}

export default SearchDesktop;
