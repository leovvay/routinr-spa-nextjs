import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import {
  AddRoutineToPlanResponse,
  ChangeRoutineStartDateArgs,
  ChangeRoutineStartDateResponse,
  Plan,
  RemoveRoutineFromPlanResponse,
} from '@store/services/plan/plan.interface';
import { customGraphqlRequestBaseQuery } from '@utils';

import {
  PlannedActivity,
  UpdatePlannedActivity,
  UpdatePlannedActivityResponse,
} from './planned-activity.interface';
import {
  GetPlannedActivityByIdResponse,
  GetPlannedDaysResponse,
  PlannedDay,
  PlannedDaysFindArgs,
} from './planned-day.interface';

export const planApi = createApi({
  reducerPath: 'plan',
  baseQuery: customGraphqlRequestBaseQuery({}),
  tagTypes: ['PlannedDays'],
  endpoints: (builder) => ({
    getPlannedDays: builder.query<PlannedDay[], PlannedDaysFindArgs>({
      query: (query) => ({
        document: gql`
          query GetPlannedDays($from: String!, $to: String!) {
            getPlannedDays(from: $from, to: $to) {
              date
              plannedActivities {
                id
                startTime
                endTime
                activity {
                  title
                  routineId
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
            }
          }
        `,
        variables: query,
      }),
      providesTags: ['PlannedDays'],
      transformResponse: (response: GetPlannedDaysResponse) =>
        response.getPlannedDays,
    }),
    getPlannedActivity: builder.query<Required<PlannedActivity>, number>({
      query: (plannedActivityId) => ({
        document: gql`
          query GetPlannedActivity($plannedActivityId: Int!) {
            getPlannedActivityById(plannedActivityId: $plannedActivityId) {
              id
              startTime
              endTime
              plannedDay {
                date
              }
              activity {
                title
                description
                youtubeUrl
                routineId
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
                cover {
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
              }
            }
          }
        `,
        variables: { plannedActivityId },
      }),
      transformResponse: (response: GetPlannedActivityByIdResponse) =>
        response.getPlannedActivityById,
    }),
    updatePlannedActivityTime: builder.mutation<
      PlannedActivity,
      UpdatePlannedActivity
    >({
      query: (plannedActivityData) => ({
        document: gql`
          mutation UpdatePlannedActivity(
            $plannedActivityData: UpdatePlannedActivityInput!
          ) {
            updateTime(plannedActivityData: $plannedActivityData) {
              id
            }
          }
        `,
        variables: {
          plannedActivityData,
        },
      }),
      transformResponse: (response: UpdatePlannedActivityResponse) =>
        response.updateTime,
      invalidatesTags: ['PlannedDays'],
    }),
    removeRoutineFromPlan: builder.mutation<Pick<Plan, 'id'>, number>({
      query: (routineId) => ({
        document: gql`
          mutation RemoveRoutineFromPlan($routineId: Int!) {
            removeRoutineFromPlan(routineId: $routineId) {
              id
            }
          }
        `,
        variables: {
          routineId,
        },
      }),
      transformResponse: (response: RemoveRoutineFromPlanResponse) =>
        response.removeRoutineFromPlan,
      invalidatesTags: ['PlannedDays'],
    }),
    addRoutineToPlan: builder.mutation<Pick<Plan, 'id'>, number>({
      query: (routineId) => ({
        document: gql`
          mutation AddRoutineToPlan($routineId: Int!) {
            addRoutineToPlan(routineId: $routineId) {
              id
            }
          }
        `,
        variables: {
          routineId,
        },
      }),
      transformResponse: (response: AddRoutineToPlanResponse) =>
        response.addRoutineToPlan,
      invalidatesTags: ['PlannedDays'],
    }),
    changeRoutineStartDate: builder.mutation<
      Pick<Plan, 'id'>,
      ChangeRoutineStartDateArgs
    >({
      query: (queryArgs) => ({
        document: gql`
          mutation ChangeRoutineStartDate(
            $routineId: Int!
            $startDate: String!
          ) {
            changeRoutineStartDate(
              startDate: $startDate
              routineId: $routineId
            ) {
              id
            }
          }
        `,
        variables: queryArgs,
      }),
      transformResponse: (response: ChangeRoutineStartDateResponse) =>
        response.changeRoutineStartDate,
      invalidatesTags: ['PlannedDays'],
    }),
  }),
});

export const {
  useGetPlannedDaysQuery,
  useUpdatePlannedActivityTimeMutation,
  useAddRoutineToPlanMutation,
  useRemoveRoutineFromPlanMutation,
  useChangeRoutineStartDateMutation,
  useGetPlannedActivityQuery,
} = planApi;
