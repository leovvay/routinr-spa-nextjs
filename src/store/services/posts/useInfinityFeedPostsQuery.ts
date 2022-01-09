import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { FeedPostsResponse } from '@store/services/posts/post.interface';

const fetchFeedPosts = (params: {
  first: number;
  after?: string;
  creatorId?: number;
}): Promise<FeedPostsResponse> =>
  graphQLClient.request(
    gql`
      query GetFeedPosts(
        $creatorId: Int
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
          creatorId: $creatorId
        ) {
          edges {
            cursor
            node {
              id
              title
              description
              slug
              createdAt
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
const useInfinityFeedPostsQuery = (creatorId?: number) => {
  const result = useInfiniteQuery(
    'MyFeedPosts',
    ({ pageParam }) => fetchFeedPosts({ ...pageParam, creatorId, first: 12 }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.myPremiumPosts.pageInfo.hasNextPage
          ? {
              after: lastPage.myPremiumPosts.pageInfo.endCursor,
              first: 12,
              creatorId,
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

export default useInfinityFeedPostsQuery;
