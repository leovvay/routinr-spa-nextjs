import { QueryFunction, useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { MyPostsResponse } from '@store/services/posts/post.interface';

const fetchMyMembershipsInfo: QueryFunction<MyPostsResponse, 'MyPosts'> = ({
  pageParam = { first: 12 },
}) =>
  graphQLClient.request(
    gql`
      query GetMyPosts(
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        myPosts(after: $after, before: $before, first: $first, last: $last) {
          edges {
            cursor
            node {
              id
              title
              description
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
              youtubeUrl
              isPremium
              tags
              membershipType
              status
              membership {
                id
                title
              }
              attachments {
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
  const result = useInfiniteQuery('MyPosts', fetchMyMembershipsInfo, {
    getNextPageParam: (lastPage) =>
      lastPage.myPosts.pageInfo.hasNextPage
        ? {
            after: lastPage.myPosts.pageInfo.endCursor,
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
