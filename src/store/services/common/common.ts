import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import {
  GetUnsplashQuery,
  UnsplashStock,
  UnsplashStockPaginated,
} from '@store/services/types/unsplash.interface';
import { customGraphqlRequestBaseQuery } from '@utils';

import { CloudinarySignature } from '../types/cloudinarySignature.interface';
import {
  GetCloudinarySignatureResponse,
  GetMyGalleryResponse,
  GetRandomUnsplashResponse,
  GetUnsplashResponse,
  MyGalleryFindOptions,
  PaginatedGalleryModel,
} from './common.interface';

export const commonApi = createApi({
  reducerPath: 'common',
  baseQuery: customGraphqlRequestBaseQuery({}),
  endpoints: (builder) => ({
    getCloudinarySignature: builder.query<CloudinarySignature, void>({
      query: () => ({
        document: gql`
          query GetCloudinarySignature {
            uploadSignature {
              timestamp
              signature
            }
          }
        `,
      }),
      transformResponse: (response: GetCloudinarySignatureResponse) =>
        response.uploadSignature,
    }),

    getRandomUnsplash: builder.query<UnsplashStock[], number>({
      query: (count) => ({
        document: gql`
          query GetRandomUnsplash($count: Int!) {
            randomUnsplash(count: $count) {
              id
              urls {
                full
                small
              }
              user {
                username
              }
            }
          }
        `,
        variables: {
          count,
        },
      }),
      transformResponse: (response: GetRandomUnsplashResponse) =>
        response.randomUnsplash,
    }),
    getUnsplash: builder.query<UnsplashStockPaginated, GetUnsplashQuery>({
      query: (query) => ({
        document: gql`
          query GetUnsplash($keyword: String!, $page: Int!, $perPage: Int!) {
            getUnsplash(keyword: $keyword, page: $page, perPage: $perPage) {
              total_pages
              results {
                id
                urls {
                  full
                  small
                }
                user {
                  username
                }
              }
            }
          }
        `,
        variables: query,
      }),
      transformResponse: (response: GetUnsplashResponse) =>
        response.getUnsplash,
    }),

    getMyGallery: builder.query<PaginatedGalleryModel, MyGalleryFindOptions>({
      query: (query) => ({
        document: gql`
          query GetMyGallery(
            $after: String
            $before: String
            $filename: String
            $allowedFormats: [String!]!
            $first: Int
            $last: Int
          ) {
            myGallery(
              after: $after
              before: $before
              filename: $filename
              allowedFormats: $allowedFormats
              first: $first
              last: $last
            ) {
              edges {
                cursor
                node {
                  id
                  url
                  filename
                  previewUrl
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `,
        variables: query,
      }),
      transformResponse: (response: GetMyGalleryResponse) => response.myGallery,
    }),
  }),
});

export const {
  useGetCloudinarySignatureQuery,
  useGetRandomUnsplashQuery,
  useGetUnsplashQuery,
  useGetMyGalleryQuery,
} = commonApi;
