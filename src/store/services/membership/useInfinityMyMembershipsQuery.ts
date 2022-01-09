import { QueryFunction, useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';

import { MyMembershipsInfoResponse } from './membership.interface';

const fetchMyMembershipsInfo: QueryFunction<
  MyMembershipsInfoResponse,
  'MyMembershipsInfo'
> = ({ pageParam = { first: 12 } }) =>
  graphQLClient.request(
    gql`
      query GetMyMembershipsInfo(
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        myMembershipsInfo(
          after: $after
          before: $before
          first: $first
          last: $last
        ) {
          edges {
            cursor
            node {
              id
              title
              description
              includeAddress
              price
              recurrence
              content
              isPublic
              revenue
              buyers
              cover {
                ... on Gallery {
                  id
                  url
                  previewUrl
                  __typename
                }
                ... on Unsplash {
                  id
                  url
                  previewUrl
                  __typename
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
  const result = useInfiniteQuery('MyMembershipsInfo', fetchMyMembershipsInfo, {
    getNextPageParam: (lastPage) =>
      lastPage.myMembershipsInfo.pageInfo.hasNextPage
        ? {
            after: lastPage.myMembershipsInfo.pageInfo.endCursor,
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
