import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { InfluencersRoutinesResponse } from '@store/services/routines/routines.interface';
import { PaginationArgs } from '@store/services/types/pagination.interface';

const fetchInfluencersRoutines = (
  pageParam: PaginationArgs & { influencerId: number }
): Promise<InfluencersRoutinesResponse> =>
  graphQLClient.request(
    gql`
      query GetInfluencersRoutines(
        $influencerId: Int!
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        getInfluencersRoutines(
          influencerId: $influencerId
          after: $after
          before: $before
          first: $first
          last: $last
        ) {
          edges {
            cursor
            node {
              id
              slug
              title
              cover {
                ... on Unsplash {
                  url
                }
                ... on Gallery {
                  url
                }
              }
              attachmentsCount
              daysCount
              isFree
              price
              creator {
                slug
                avatar
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    pageParam
  );
const useInfinityInfluencersRoutinesQuery = (influencerId: number) => {
  const result = useInfiniteQuery(
    `InfluencersRoutines-${influencerId}`,
    ({ pageParam }) =>
      fetchInfluencersRoutines({ ...pageParam, influencerId, first: 12 }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.getInfluencersRoutines.pageInfo.hasNextPage
          ? {
              after: lastPage.getInfluencersRoutines.pageInfo.endCursor,
              first: 12,
              influencerId,
            }
          : undefined,
    }
  );

  const { loaderRef } = useInfiniteLoader<HTMLDivElement>({
    loadMore: result.fetchNextPage,
    canLoadMore: Boolean(result.hasNextPage),
  });

  return {
    ...result,
    loaderRef,
  };
};

export default useInfinityInfluencersRoutinesQuery;
