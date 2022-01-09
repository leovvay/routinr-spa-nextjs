import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { createInfinityQueryHook, customGraphqlRequestBaseQuery } from '@utils';
import { userFragment } from '@store/services/users/users.fragment';

import {
  CategoryInfluencersFindOptions,
  CategoryInfluencersResponse,
  DashboardInfo,
  DashboardInfoResponse,
  Influencer,
  InfluencerInfoResponse,
  MeResponse,
  MyLeadersResponse,
  PaginatedUserModel,
  TrendyUsersResponse,
  UpdateMeArgs,
  UpdateMeResponse,
  User,
  UserByIdResponse,
} from './users.interface';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: customGraphqlRequestBaseQuery({}),
  tagTypes: ['Me', 'InfluencerInfo'],
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => ({
        document: gql`
          query GetMe {
            me {
              id
              displayName
              avatar
              email
              admin
              slug
              handle
              unreadNotificationsCount
              timezone
            }
          }
        `,
      }),
      providesTags: ['Me'],
      transformResponse: (response: MeResponse) => response.me,
    }),
    updateMe: builder.mutation<UpdateMeResponse['updateMe'], UpdateMeArgs>({
      query: (meInfo) => ({
        document: gql`
          mutation UpdateMe($meInfo: UpdateMeInput!) {
            updateMe(meInfo: $meInfo) {
              id
            }
          }
        `,
        variables: {
          meInfo,
        },
      }),
      invalidatesTags: ['Me', 'InfluencerInfo'],
      transformResponse: (response: UpdateMeResponse) => response.updateMe,
    }),
    updateMyTimezone: builder.mutation<Pick<User, 'id'>, string>({
      query: (timezone) => ({
        document: gql`
          mutation UpdateMyTimezone($timezone: String!) {
            updateMyTimeZone(timezone: $timezone) {
              id
            }
          }
        `,
        variables: {
          timezone,
        },
      }),
      invalidatesTags: ['Me', 'InfluencerInfo'],
      transformResponse: (response: { updateMyTimeZone: Pick<User, 'id'> }) =>
        response.updateMyTimeZone,
    }),
    dashboardInfo: builder.query<DashboardInfo, void>({
      query: () => ({
        document: gql`
          query GetDashboardInfo {
            dashboardInfo {
              revenue
              followers {
                slug
                avatar
              }
              stripeAccountStatus
              stripeAccount {
                accountType
              }
            }
          }
        `,
      }),
      transformResponse: (response: DashboardInfoResponse) =>
        response.dashboardInfo,
    }),
    categoryInfluencers: builder.query<
      PaginatedUserModel,
      CategoryInfluencersFindOptions
    >({
      query: (query) => ({
        document: gql`
          query GetCategoryInfluencers(
            $after: String
            $before: String
            $categoryIds: [String!]!
            $first: Int
            $last: Int
          ) {
            categoryInfluencers(
              after: $after
              before: $before
              categories: $categoryIds
              first: $first
              last: $last
            ) {
              edges {
                cursor
                node {
                  ...UserCommon
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
          ${userFragment}
        `,
        variables: query,
      }),
      transformResponse: (response: CategoryInfluencersResponse) =>
        response.categoryInfluencers,
    }),
    getMyLeaders: builder.query<User[], void>({
      query: () => ({
        document: gql`
          query GetMyLeaders {
            myLeaders {
              id
              displayName
            }
          }
        `,
      }),
      transformResponse: (response: MyLeadersResponse) => response.myLeaders,
    }),
    getUserById: builder.query<User, number>({
      query: (userId) => ({
        document: gql`
          query GetUserById($userId: Int!) {
            userById(userId: $userId) {
              ...UserCommon
            }
          }
          ${userFragment}
        `,
        variables: {
          userId,
        },
      }),
      transformResponse: (response: UserByIdResponse) => response.userById,
    }),
    getInfluencerInfo: builder.query<Influencer, string>({
      query: (slug) => ({
        document: gql`
          query GetInfluencerInfo($slug: String!) {
            influencerProfile(slug: $slug) {
              id
              slug
              description
              membershipsCount
              routinesCount
              postsCount
              handle
              displayName
              avatar
              background
              createdAt
              followers {
                avatar
                slug
              }

              socials {
                youtube
                facebook
                instagram
                twitter
              }

              memberships {
                id
                title
                price
                recurrence
                description
                isSubscribed
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
          }
        `,
        variables: {
          slug,
        },
      }),
      providesTags: ['InfluencerInfo'],
      transformResponse: (response: InfluencerInfoResponse) =>
        response.influencerProfile,
    }),
    getTrendyUsers: builder.query<
      Pick<User, 'id' | 'avatar' | 'slug' | 'handle' | 'followers'>[],
      number
    >({
      query: (first) => ({
        document: gql`
          query GetTrendyUsers($first: Int!) {
            trendyUsers(first: $first) {
              edges {
                node {
                  id
                  handle
                  avatar
                  slug
                  followers {
                    id
                  }
                }
              }
            }
          }
        `,
        variables: {
          first,
        },
      }),
      transformResponse: (response: TrendyUsersResponse) =>
        response.trendyUsers.edges.map(({ node }) => node),
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useCategoryInfluencersQuery,
  useDashboardInfoQuery,
  useGetMyLeadersQuery,
  useLazyGetUserByIdQuery,
  useGetInfluencerInfoQuery,
  useUpdateMeMutation,
  useGetTrendyUsersQuery,
  useUpdateMyTimezoneMutation,
} = userApi;

export const useInfinityCategoryInfluencersQuery = createInfinityQueryHook<
  CategoryInfluencersFindOptions,
  User
>(useCategoryInfluencersQuery);
