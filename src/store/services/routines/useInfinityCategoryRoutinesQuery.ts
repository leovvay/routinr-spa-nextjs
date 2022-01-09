import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import {
  CategoryRoutinesFindOptions,
  CategoryRoutinesResponse,
} from '@store/services/routines/routines.interface';

const fetchCategoryRoutines = (
  pageParam: CategoryRoutinesFindOptions
): Promise<CategoryRoutinesResponse> =>
  graphQLClient.request(
    gql`
      query GetCategoryRoutines(
        $categoryIds: [String!]!
        $skipRoutines: [String!]
        $contentType: String!
        $sort: String!
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        categoryRoutines(
          categories: $categoryIds
          skipRoutines: $skipRoutines
          contentType: $contentType
          sort: $sort
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
            totalCount
          }
        }
      }
    `,
    pageParam
  );
const useInfinityCategoryRoutinesQuery = (
  args: CategoryRoutinesFindOptions
) => {
  const result = useInfiniteQuery(
    'CategoryRoutines',
    ({ pageParam }) => fetchCategoryRoutines({ ...pageParam, ...args }),
    {
      enabled: Boolean(args.categoryIds.length),
      getNextPageParam: (lastPage) =>
        lastPage.categoryRoutines.pageInfo.hasNextPage
          ? {
              after: lastPage.categoryRoutines.pageInfo.endCursor,
              first: 12,
              ...args,
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

export default useInfinityCategoryRoutinesQuery;
