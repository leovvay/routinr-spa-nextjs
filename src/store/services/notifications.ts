import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';

export interface Notification {
  id: string;
  message: string;
  title: string;
  markAsRead: boolean;
  asType: string;
  createdAt: string;
  notifiableType: string;
}

interface MyNotificationsResponse {
  myNotifications: Notification[];
}

export const notificationsApi = createApi({
  reducerPath: 'notifications',
  baseQuery: customGraphqlRequestBaseQuery({}),
  tagTypes: ['Notification'],
  endpoints: (builder) => ({
    getMyNotification: builder.query<Notification[], void>({
      query: () => ({
        document: gql`
          query GetMyNotifications {
            myNotifications {
              id
              title
              message
              createdAt
            }
          }
        `,
      }),
      transformResponse: (response: MyNotificationsResponse) =>
        response.myNotifications,
      providesTags: ['Notification'],
    }),
    markAllAsRead: builder.mutation<number, void>({
      query: () => ({
        document: gql`
          mutation MarkAllNotificationsAsRead {
            markAllAsRead {
              id
            }
          }
        `,
      }),
      invalidatesTags: ['Notification'],
    }),
    markAsRead: builder.mutation<number, number>({
      query: (notificationId) => ({
        document: gql`
          mutation MarkAllNotificationsAsRead($notificationId: Int!) {
            markAsReadById(notificationId: $notificationId)
          }
        `,
        variables: {
          notificationId,
        },
      }),
      invalidatesTags: ['Notification'],
    }),
  }),
});

export const {
  useGetMyNotificationQuery,
  useMarkAllAsReadMutation,
  useMarkAsReadMutation,
} = notificationsApi;
