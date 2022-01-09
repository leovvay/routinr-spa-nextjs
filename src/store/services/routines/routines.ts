import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { routineFragment } from '@store/services/routines/routines.fragments';
import {
  CreateDayInput,
  CreateDayResponse,
  Day,
  DeleteDayResponse,
  UpdateDayInput,
  UpdateDayResponse,
} from '@store/services/routines/day.interface';
import {
  Activity,
  CreateActivityInput,
  CreateActivityResponse,
  DeleteActivityResponse,
  UpdateActivityCover,
  UpdateActivityCoverResponse,
  UpdateActivityInput,
  UpdateActivityResponse,
} from '@store/services/routines/activity.interface';
import { customGraphqlRequestBaseQuery } from '@utils';

import {
  CloneRoutineResponse,
  CreateRoutineData,
  CreateRoutineResponse,
  DeleteRoutineResponse,
  GetRoutineByIdResponse,
  GetRoutineBySlugResponse,
  GetRoutinePageInfoResponse,
  Routine,
  RoutineInCalendarInfo,
  RoutineWithUserInfo,
  UpdateRoutineData,
  UpdateRoutineResponse,
} from './routines.interface';

export const routinesApi = createApi({
  reducerPath: 'routines',
  baseQuery: customGraphqlRequestBaseQuery({}),
  tagTypes: ['SingleRoutine', 'MyRoutines', 'SingleRoutineInfo'],
  endpoints: (builder) => ({
    getRoutineById: builder.query<
      RoutineInCalendarInfo,
      { id: number; userId?: number }
    >({
      query: (args) => ({
        document: gql`
          query GetRoutineById($id: Int!, $userId: Int) {
            getRoutineById(id: $id) {
              id
              slug
              title
              creator {
                slug
              }
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
              attachments {
                ... on Gallery {
                  url
                }
                ... on Unsplash {
                  url
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
                }
              }
              routineUserInfo {
                isPurchased(userId: $userId)
                isUsed(userId: $userId)
              }
            }
          }
        `,
        variables: args,
      }),
      providesTags: ['SingleRoutine'],
      transformResponse: (response: GetRoutineByIdResponse) =>
        response.getRoutineById,
    }),
    getRoutineBySlug: builder.query<Routine, string>({
      query: (slug) => ({
        document: gql`
          query GetRoutineBySlug($slug: String!) {
            getRoutineBySlug(slug: $slug) {
              ...RoutineCommon
            }
          }
          ${routineFragment}
        `,
        variables: { slug },
      }),
      providesTags: ['SingleRoutine'],
      transformResponse: (response: GetRoutineBySlugResponse) =>
        response.getRoutineBySlug,
    }),
    trendyRoutines: builder.query<Routine[], void>({
      query: () => ({
        document: gql`
          query GetTrendyRoutines {
            trendyRoutines {
              ...RoutineCommon
            }
          }
          ${routineFragment}
        `,
      }),
      transformResponse: (response: { trendyRoutines: Routine[] }) =>
        response.trendyRoutines,
    }),
    trendyFreeRoutines: builder.query<Routine[], void>({
      query: () => ({
        document: gql`
          query GetTrendyFreeRoutines {
            trendyFreeRoutines {
              ...RoutineCommon
            }
          }
          ${routineFragment}
        `,
      }),
      transformResponse: (response: { trendyFreeRoutines: Routine[] }) =>
        response.trendyFreeRoutines,
    }),
    getRoutinePageInfo: builder.query<
      RoutineWithUserInfo,
      { slug: string; userId?: number }
    >({
      query: (args) => ({
        document: gql`
          query GetRoutinePageInfo($slug: String!, $userId: Int) {
            getRoutineBySlug(slug: $slug) {
              ...RoutineCommon

              routineUserInfo {
                isPurchased(userId: $userId)
                isUsed(userId: $userId)
              }
            }
          }
          ${routineFragment}
        `,
        variables: args,
      }),
      providesTags: ['SingleRoutine'],
      transformResponse: (response: GetRoutinePageInfoResponse) =>
        response.getRoutineBySlug,
    }),
    createRoutine: builder.mutation<
      CreateRoutineResponse['createRoutine'],
      CreateRoutineData
    >({
      query: (routineData) => ({
        document: gql`
          mutation CreateRoutine($routineData: CreateRoutineInput!) {
            createRoutine(routineData: $routineData) {
              id
              slug
            }
          }
        `,
        variables: {
          routineData,
        },
      }),
      transformResponse: (response: CreateRoutineResponse) =>
        response.createRoutine,
    }),
    updateRoutine: builder.mutation<
      UpdateRoutineResponse['updateRoutine'],
      UpdateRoutineData
    >({
      query: (routineData) => ({
        document: gql`
          mutation UpdateRoutine($routineData: UpdateRoutineInput!) {
            updateRoutine(routineData: $routineData) {
              id
              slug
            }
          }
        `,
        variables: {
          routineData,
        },
      }),
      transformResponse: (response: UpdateRoutineResponse) =>
        response.updateRoutine,
      invalidatesTags: ['SingleRoutine'],
    }),
    deleteRoutine: builder.mutation<Pick<Routine, 'id'>, number>({
      query: (id) => ({
        document: gql`
          mutation DeleteRoutine($id: Int!) {
            deleteRoutine(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      }),
      transformResponse: (response: DeleteRoutineResponse) =>
        response.deleteRoutine,
      invalidatesTags: ['MyRoutines'],
    }),
    cloneRoutine: builder.mutation<Pick<Routine, 'id'>, number>({
      query: (id) => ({
        document: gql`
          mutation CloneRoutine($id: Int!) {
            cloneRoutine(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      }),
      transformResponse: (response: CloneRoutineResponse) =>
        response.cloneRoutine,
      invalidatesTags: ['MyRoutines'],
    }),
    createDay: builder.mutation<Pick<Day, 'id'>, CreateDayInput>({
      query: (dayData) => ({
        document: gql`
          mutation CreateDay($dayData: CreateDayInput!) {
            createDay(dayData: $dayData) {
              id
            }
          }
        `,
        variables: {
          dayData,
        },
      }),
      transformResponse: (response: CreateDayResponse) => response.createDay,
      invalidatesTags: ['SingleRoutine'],
    }),
    updateDay: builder.mutation<Pick<Day, 'id'>, UpdateDayInput>({
      query: (dayData) => ({
        document: gql`
          mutation UpdateDay($dayData: UpdateDayInput!) {
            updateDay(dayData: $dayData) {
              id
            }
          }
        `,
        variables: {
          dayData,
        },
      }),
      transformResponse: (response: UpdateDayResponse) => response.updateDay,
      invalidatesTags: ['SingleRoutine'],
    }),
    deleteDay: builder.mutation<Pick<Day, 'id'>, number>({
      query: (dayId) => ({
        document: gql`
          mutation DeleteDay($dayId: Int!) {
            deleteDay(dayId: $dayId) {
              id
            }
          }
        `,
        variables: {
          dayId,
        },
      }),
      transformResponse: (response: DeleteDayResponse) => response.deleteDay,
      invalidatesTags: ['SingleRoutine'],
    }),
    createActivity: builder.mutation<Pick<Activity, 'id'>, CreateActivityInput>(
      {
        query: (activityData) => ({
          document: gql`
            mutation CreateActivity($activityData: CreateActivityInput!) {
              createActivity(activityData: $activityData) {
                id
              }
            }
          `,
          variables: {
            activityData,
          },
        }),
        transformResponse: (response: CreateActivityResponse) =>
          response.createActivity,
        invalidatesTags: ['SingleRoutine'],
      }
    ),
    updateActivity: builder.mutation<Pick<Activity, 'id'>, UpdateActivityInput>(
      {
        query: (activityData) => ({
          document: gql`
            mutation UpdateActivity($activityData: UpdateActivityInput!) {
              updateActivity(activityData: $activityData) {
                id
              }
            }
          `,
          variables: {
            activityData,
          },
        }),
        transformResponse: (response: UpdateActivityResponse) =>
          response.updateActivity,
        invalidatesTags: ['SingleRoutine'],
      }
    ),
    deleteActivity: builder.mutation<Pick<Activity, 'id'>, number>({
      query: (activityId) => ({
        document: gql`
          mutation DeleteActivity($activityId: Int!) {
            deleteActivity(activityId: $activityId) {
              id
            }
          }
        `,
        variables: {
          activityId,
        },
      }),
      transformResponse: (response: DeleteActivityResponse) =>
        response.deleteActivity,
      invalidatesTags: ['SingleRoutine'],
    }),
    updateActivityCover: builder.mutation<
      Pick<Activity, 'id'>,
      UpdateActivityCover
    >({
      query: (activityCoverData) => ({
        document: gql`
          mutation UpdateActivity(
            $activityCoverData: UpdateActivityCoverInput!
          ) {
            changeActivityCover(updateCoverData: $activityCoverData) {
              id
            }
          }
        `,
        variables: {
          activityCoverData,
        },
      }),
      transformResponse: (response: UpdateActivityCoverResponse) =>
        response.changeActivityCover,
      invalidatesTags: ['SingleRoutine'],
    }),
  }),
});

export const {
  useCreateRoutineMutation,
  useGetRoutineByIdQuery,
  useLazyGetRoutineBySlugQuery,
  useUpdateRoutineMutation,
  useCreateDayMutation,
  useUpdateDayMutation,
  useDeleteDayMutation,
  useCreateActivityMutation,
  useUpdateActivityMutation,
  useDeleteActivityMutation,
  useUpdateActivityCoverMutation,
  useGetRoutineBySlugQuery,
  useDeleteRoutineMutation,
  useCloneRoutineMutation,
  useGetRoutinePageInfoQuery,
} = routinesApi;
