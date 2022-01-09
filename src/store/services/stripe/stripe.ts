import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';
import { User } from '@store/services/users';

import {
  DashboardLinkResponse,
  MigrationLinkResponse,
} from './stripe.interface';

export const stripeApi = createApi({
  reducerPath: 'stripe',
  baseQuery: customGraphqlRequestBaseQuery({}),
  tagTypes: ['MyStripeInfo'],
  endpoints: (builder) => ({
    myStripeInfo: builder.query<
      Pick<User, 'stripeAccountStatus' | 'stripeAccount'>,
      void
    >({
      query: () => ({
        document: gql`
          query GetStripeInfo {
            dashboardInfo {
              stripeAccountStatus
              stripeAccount {
                accountType
              }
            }
          }
        `,
      }),
      providesTags: ['MyStripeInfo'],
      transformResponse: (response: {
        dashboardInfo: Pick<User, 'stripeAccountStatus' | 'stripeAccount'>;
      }) => response.dashboardInfo,
    }),
    migrationLink: builder.query<string, void>({
      query: () => ({
        document: gql`
          query GetMigrationLink {
            migrationLink
          }
        `,
      }),
      transformResponse: (response: MigrationLinkResponse) =>
        response.migrationLink,
    }),
    dashboardLink: builder.query<string, void>({
      query: () => ({
        document: gql`
          query GetDashboardLink {
            dashboardLink
          }
        `,
      }),
      transformResponse: (response: DashboardLinkResponse) =>
        response.dashboardLink,
    }),
    onboardingLink: builder.query<string, void>({
      query: () => ({
        document: gql`
          query GetOnboardingLink {
            onboardingLink
          }
        `,
      }),
      transformResponse: (response: { onboardingLink: string }) =>
        response.onboardingLink,
    }),
    createStripeAccount: builder.mutation<string, string>({
      query: (countryId) => ({
        document: gql`
          mutation CreateStripeAccount($countryId: String!) {
            createStripeAccount(countryId: $countryId)
          }
        `,
        variables: {
          countryId,
        },
      }),
      invalidatesTags: ['MyStripeInfo'],
      transformResponse: (response: { createStripeAccount: string }) =>
        response.createStripeAccount,
    }),
    cardSetupIntent: builder.query<string, void>({
      query: () => ({
        document: gql`
          query CardSetupIntent {
            cardSetupIntent
          }
        `,
      }),
      transformResponse: (response: { cardSetupIntent: string }) =>
        response.cardSetupIntent,
    }),
  }),
});

export const {
  useMigrationLinkQuery,
  useDashboardLinkQuery,
  useMyStripeInfoQuery,
  useCreateStripeAccountMutation,
  useOnboardingLinkQuery,
  useCardSetupIntentQuery,
} = stripeApi;
