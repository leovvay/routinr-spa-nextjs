import { useInfiniteQuery } from 'react-query';
import useInfiniteLoader from 'react-use-infinite-loader';

import { gql } from 'graphql-request';

import graphQLClient from '@store/graphql.client';
import { MyPlanRoutinesResponse } from '@store/services/routines/routines.interface';

const fetchMyPlanRoutines = (params: {
  after?: string;
  first: number;
  userId: number;
}): Promise<MyPlanRoutinesResponse> =>
  graphQLClient.request(
    gql`
      query GetMyPlanRoutines(
        $userId: Int!
        $after: String
        $before: String
        $first: Int
        $last: Int
      ) {
        myPlanRoutines(
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
              daysCount
              attachmentsCount
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
              creator {
                avatar
                slug
              }
              attachments {
                ... on Unsplash {
                  id
                  url
                  previewUrl
                  resource_type
                }
                ... on Gallery {
                  id
                  url
                  previewUrl
                  resource_type
                }
              }
              days {
                id
                weekday
                repetitionEndDate
                repetitionType
                routineId
                activities {
                  id
                  title
                  description
                  startTime
                  endTime
                  youtubeUrl
                  routineId
                  cover {
                    __typename
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
                  attachments {
                    __typename
                    ... on Gallery {
                      id
                      url
                      previewUrl
                      resource_type
                    }
                    ... on Unsplash {
                      id
                      url
                      previewUrl
                      resource_type
                    }
                  }
                }
              }
              routineUserInfo {
                isUsed(userId: $userId)
                isPurchased(userId: $userId)
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

const useInfinityMyPlanRoutinesQuery = (userId?: number) => {
  const result = useInfiniteQuery(
    'MyPlanRoutines',
    ({ pageParam }) => fetchMyPlanRoutines({ ...pageParam, userId, first: 12 }),
    {
      enabled: Boolean(userId),
      getNextPageParam: (lastPage) =>
        lastPage.myPlanRoutines.pageInfo.hasNextPage
          ? {
              after: lastPage.myPlanRoutines.pageInfo.endCursor,
              first: 12,
              userId,
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

export default useInfinityMyPlanRoutinesQuery;
