import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { MyPremiumPostsResponse } from '@store/services/posts/post.interface';

const fetchMyPremiumPosts = (params: {
  first: number;
  after?: string;
}): Promise<MyPremiumPostsResponse> =>
  graphQLClient.request(
    gql`
      query GetMyPremiumPosts(
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        myPremiumPosts(
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
              slug
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
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    params
  );
const useInfinityMyPremiumPostsQuery = () => {
  const result = useInfiniteQuery(
    'MyPremiumPosts',
    ({ pageParam }) => fetchMyPremiumPosts({ ...pageParam, first: 12 }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.myPremiumPosts.pageInfo.hasNextPage
          ? {
              after: lastPage.myPremiumPosts.pageInfo.endCursor,
              first: 12,
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

export default useInfinityMyPremiumPostsQuery;
