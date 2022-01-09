import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';
import { queryClient } from '@store/graphql.client';

import {
  CreateMembershipData,
  CreateMembershipResponse,
  DeleteMembershipsResponse,
  Membership,
  MembershipsResponse,
  UpdateMembershipData,
  UpdateMembershipResponse,
} from './membership.interface';

export const membershipsApi = createApi({
  reducerPath: 'memberships',
  baseQuery: customGraphqlRequestBaseQuery({}),
  endpoints: (builder) => ({
    getMyMemberships: builder.query<Membership[], void>({
      query: () => ({
        document: gql`
          query GetMyMemberships {
            myMemberships {
              id
              title
            }
          }
        `,
      }),
      transformResponse: (response: MembershipsResponse) =>
        response.myMemberships,
    }),
    createMembership: builder.mutation<Membership, CreateMembershipData>({
      query: (membershipData) => ({
        document: gql`
          mutation CreateMembership($membershipData: CreateMembershipInput!) {
            createMembership(membershipData: $membershipData) {
              id
              title
            }
          }
        `,
        variables: {
          membershipData,
        },
      }),
      transformResponse: (response: CreateMembershipResponse) =>
        response.createMembership,
      invalidatesTags: () => {
        queryClient.invalidateQueries('MyMembershipsInfo');
        return [];
      },
    }),
    updateMembership: builder.mutation<Membership, UpdateMembershipData>({
      query: (membershipData) => ({
        document: gql`
          mutation UpdateMembership($membershipData: UpdateMembershipInput!) {
            updateMembership(membershipData: $membershipData) {
              id
              title
            }
          }
        `,
        variables: {
          membershipData,
        },
      }),
      transformResponse: (response: UpdateMembershipResponse) =>
        response.updateMembership,
    }),
    deleteMembership: builder.mutation<Pick<Membership, 'id'>, number>({
      query: (id) => ({
        document: gql`
          mutation DeleteMembership($id: Int!) {
            deleteMembership(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      }),

      transformResponse: (response: DeleteMembershipsResponse) =>
        response.deleteMembership,
    }),
  }),
});

export const {
  useGetMyMembershipsQuery,
  useCreateMembershipMutation,
  useDeleteMembershipMutation,
  useUpdateMembershipMutation,
} = membershipsApi;
