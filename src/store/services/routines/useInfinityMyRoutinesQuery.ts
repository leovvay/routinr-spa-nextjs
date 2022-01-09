import { QueryFunction, useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { GetMyRoutinesInfoResponse } from '@store/services/routines/routines.interface';

const fetchMyRoutines: QueryFunction<GetMyRoutinesInfoResponse, 'MyRoutines'> =
  ({ pageParam = { first: 12 } }) =>
    graphQLClient.request(
      gql`
        query GetMyRoutinesIds(
          $after: String
          $before: String
          $first: Int
          $last: Int
        ) {
          getMyRoutinesInfo(
            after: $after
            before: $before
            first: $first
            last: $last
          ) {
            edges {
              cursor
              node {
                id
                isComplete
                isPrivate
                isPublished
                title
                revenue
                buyers
                slug
                status
                cover {
                  ... on Unsplash {
                    previewUrl
                  }
                  ... on Gallery {
                    previewUrl
                  }
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
const useInfinityMyRoutinesQuery = () => {
  const result = useInfiniteQuery('MyRoutines', fetchMyRoutines, {
    getNextPageParam: (lastPage) =>
      lastPage.getMyRoutinesInfo.pageInfo.hasNextPage
        ? {
            after: lastPage.getMyRoutinesInfo.pageInfo.endCursor,
            first: 12,
          }
        : undefined,
  });

  const { loaderRef } = useInfiniteLoader<HTMLDivElement>({
    loadMore: result.fetchNextPage,
    canLoadMore: Boolean(result.hasNextPage),
  });

  return {
    ...result,
    loaderRef,
  };
};

export default useInfinityMyRoutinesQuery;
