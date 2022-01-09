import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { PaginatedRoutineModel } from '@store/services/routines/routines.interface';
import { PaginationArgs } from '@store/services/types/pagination.interface';

const fetchTrendyFreeRoutines = (
  pageParam: PaginationArgs
): Promise<{ trendyFreeRoutines: PaginatedRoutineModel }> =>
  graphQLClient.request(
    gql`
      query GetTrendyRoutines(
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        trendyFreeRoutines(
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
              description
              title
              cover {
                ... on Unsplash {
                  id
                  url
                  previewUrl
                }
                ... on Gallery {
                  id
                  url
                  previewUrl
                }
              }
              usageCount
              daysCount
              attachmentsCount
              price
              isFree
              creator {
                id
                avatar
                slug
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
const useInfinityTrendyFreeRoutinesQuery = () => {
  const result = useInfiniteQuery(
    `TrendyFreeRoutines`,
    ({ pageParam }) => fetchTrendyFreeRoutines({ ...pageParam, first: 12 }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.trendyFreeRoutines.pageInfo.hasNextPage
          ? {
              after: lastPage.trendyFreeRoutines.pageInfo.endCursor,
              first: 12,
            }
          : undefined,
    }
  );

  const { loaderRef } = useInfiniteLoader<HTMLDivElement>({
    loadMore: result.fetchNextPage,
    canLoadMore: Boolean(result.hasNextPage),
  });

  const data =
    result.data?.pages.map((page) => page.trendyFreeRoutines.edges).flat() ??
    [];

  return {
    ...result,
    loaderRef,
    data,
  };
};

export default useInfinityTrendyFreeRoutinesQuery;
