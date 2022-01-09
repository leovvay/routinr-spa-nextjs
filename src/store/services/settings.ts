import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';
import { Category } from '@store/services/categories';

export const settingsApi = createApi({
  reducerPath: 'settings',
  baseQuery: customGraphqlRequestBaseQuery({}),
  endpoints: (builder) => ({
    mainBanner: builder.query<string, void>({
      query: () => ({
        document: gql`
          query GetMainBanner {
            mainBanner
          }
        `,
      }),
      transformResponse: (response: { mainBanner: string }) =>
        response.mainBanner,
    }),
    mainCategory: builder.query<Category, void>({
      query: () => ({
        document: gql`
          query GetMainCategory {
            mainCategory {
              id
              title
              image {
                url
                secure_url
              }
              bannerImage {
                url
                secure_url
              }
              routinesCount
            }
          }
        `,
      }),
      transformResponse: (response: { mainCategory: Category }) =>
        response.mainCategory,
    }),
  }),
});

export const { useMainBannerQuery, useMainCategoryQuery } = settingsApi;
