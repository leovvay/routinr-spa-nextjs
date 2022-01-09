import { QueryFunction, useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { MyMySubscribedMembershipsResponse } from '@store/services/membership/membership.interface';

const fetchMySubscribedMemberships: QueryFunction<
  MyMySubscribedMembershipsResponse,
  'MySubscribedMemberships'
> = ({ pageParam = { first: 12 } }) =>
  graphQLClient.request(
    gql`
      query GetMyMySubscribedMemberships(
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        mySubscribedMemberships(
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
              price
              recurrence
              content
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
              creator {
                avatar
                slug
                handle
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
const useInfinityMySubscribedMembershipsQuery = () => {
  const result = useInfiniteQuery(
    'MySubscribedMemberships',
    fetchMySubscribedMemberships,
    {
      getNextPageParam: (lastPage) =>
        lastPage.mySubscribedMemberships.pageInfo.hasNextPage
          ? {
              after: lastPage.mySubscribedMemberships.pageInfo.endCursor,
              first: 12,
            }
          : undefined,
    }
  );

  const { loaderRef } = useInfiniteLoader<HTMLDivElement>({
    loadMore: result.fetchNextPage,
    canLoadMore: Boolean(!result.isFetching && result.hasNextPage),
  });

  return {
    ...result,
    loaderRef,
  };
};

export default useInfinityMySubscribedMembershipsQuery;
