import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';

import {
  Charge,
  GetMembershipPurchaseSecretArgs,
  GetMembershipPurchaseSecretResponse,
  GetMyCardsResponse,
  GetRoutinePurchaseSecretArgs,
  GetRoutinePurchaseSecretResponse,
  GetSubscriptionByMembershipResponse,
  PaymentCard,
  RemovePaymentCardResponse,
  Subscription,
  UpdateSubscriptionInput,
  UpdateSubscriptionStatusResponse,
} from './purchases.interface';

export const purchasesApi = createApi({
  reducerPath: 'purchases',
  baseQuery: customGraphqlRequestBaseQuery({}),
  tagTypes: ['Cards'],
  endpoints: (builder) => ({
    getSubscriptionByMembership: builder.query<Subscription, number>({
      query: (membershipId) => ({
        document: gql`
          query GetSubscriptionByMembership($membershipId: Int!) {
            subscriptionByMembership(membershipId: $membershipId) {
              id
              status
            }
          }
        `,
        variables: {
          membershipId,
        },
      }),
      transformResponse: (response: GetSubscriptionByMembershipResponse) =>
        response.subscriptionByMembership,
    }),
    updateSubscriptionStatus: builder.mutation<
      Subscription,
      UpdateSubscriptionInput
    >({
      query: (updateSubscriptionInput) => ({
        document: gql`
          mutation UpdateSubscriptionStatus(
            $updateSubscriptionInput: UpdateSubscriptionInput!
          ) {
            updateSubscriptionStatus(
              updateSubscription: $updateSubscriptionInput
            ) {
              id
              status
            }
          }
        `,
        variables: { updateSubscriptionInput },
      }),
      transformResponse: (response: UpdateSubscriptionStatusResponse) =>
        response.updateSubscriptionStatus,
    }),
    getPaymentCards: builder.query<PaymentCard[], void>({
      query: () => ({
        document: gql`
          query GetPaymentCards {
            myCards {
              id
              brand
              expMonth
              expYear
              last4
            }
          }
        `,
      }),
      transformResponse: (response: GetMyCardsResponse) => response.myCards,
      providesTags: ['Cards'],
    }),
    removePaymentCard: builder.mutation<PaymentCard, string>({
      query: (paymentMethodId) => ({
        document: gql`
          mutation RemovePaymentCard($paymentMethodId: String!) {
            removeCard(paymentMethodId: $paymentMethodId) {
              id
            }
          }
        `,
        variables: { paymentMethodId },
      }),
      transformResponse: (response: RemovePaymentCardResponse) =>
        response.removeCard,
      invalidatesTags: ['Cards'],
    }),
    getRoutinePurchaseSecret: builder.query<
      string,
      GetRoutinePurchaseSecretArgs
    >({
      query: (args) => ({
        document: gql`
          query GetRoutinePurchaseSecret(
            $routineId: Int!
            $paymentMethodId: String
          ) {
            paymentIntentForRoutine(
              routineId: $routineId
              paymentMethodId: $paymentMethodId
            )
          }
        `,
        variables: args,
      }),
      transformResponse: (response: GetRoutinePurchaseSecretResponse) =>
        response.paymentIntentForRoutine,
    }),
    getMembershipPurchaseSecret: builder.query<
      string,
      GetMembershipPurchaseSecretArgs
    >({
      query: (args) => ({
        document: gql`
          query GetRoutinePurchaseSecret(
            $membershipId: Int!
            $paymentMethodId: String
          ) {
            paymentIntentForMembership(
              membershipId: $membershipId
              paymentMethodId: $paymentMethodId
            )
          }
        `,
        variables: args,
      }),
      transformResponse: (response: GetMembershipPurchaseSecretResponse) =>
        response.paymentIntentForMembership,
    }),
    chargesHistory: builder.query<Charge[], void>({
      query: (args) => ({
        document: gql`
          query GetChargesHistory {
            chargesHistory {
              createdAt
              amount
              routineTitle
            }
          }
        `,
        variables: args,
      }),
      transformResponse: (response: { chargesHistory: Charge[] }) =>
        response.chargesHistory,
    }),
  }),
});

export const {
  useGetSubscriptionByMembershipQuery,
  useUpdateSubscriptionStatusMutation,
  useGetPaymentCardsQuery,
  useLazyGetRoutinePurchaseSecretQuery,
  useRemovePaymentCardMutation,
  useLazyGetMembershipPurchaseSecretQuery,
  useChargesHistoryQuery,
} = purchasesApi;
