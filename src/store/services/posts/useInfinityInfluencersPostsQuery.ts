import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { PaginationArgs } from '@store/services/types/pagination.interface';
import { InfluencersPostsResponse } from '@store/services/posts/post.interface';

const fetchInfluencersPosts = (
  pageParam: PaginationArgs & { influencerId: number }
): Promise<InfluencersPostsResponse> =>
  graphQLClient.request(
    gql`
      query GetInfluencersPost(
        $influencerId: Int!
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        influencersPosts(
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
              title
              cover {
                ... on Unsplash {
                  previewUrl
                }
                ... on Gallery {
                  previewUrl
                }
              }
              slug
              isLocked
              membershipId
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
const useInfinityInfluencersPostsQuery = (influencerId: number) => {
  const result = useInfiniteQuery(
    `InfluencersPosts-${influencerId}`,
    ({ pageParam }) =>
      fetchInfluencersPosts({ ...pageParam, influencerId, first: 12 }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.influencersPosts.pageInfo.hasNextPage
          ? {
              after: lastPage.influencersPosts.pageInfo.endCursor,
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

export default useInfinityInfluencersPostsQuery;
