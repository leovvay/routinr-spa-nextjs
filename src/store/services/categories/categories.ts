import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';
import { categoryPromoFragment } from '@store/services/categories/categories.fragment';

import {
  CategoriesResponse,
  Category,
  CategoryResponse,
} from './categories.interface';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: customGraphqlRequestBaseQuery({}),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        document: gql`
          query GetCategories {
            categories {
              id
              title
              routinesCount
              categoryPromoSettingsId
              image {
                url
              }
            }
          }
        `,
      }),
      transformResponse: (response: CategoriesResponse) => response.categories,
    }),
    getCategory: builder.query<
      Category,
      { title: string; includePromoSettings?: boolean }
    >({
      query: ({ title, includePromoSettings }) => ({
        document: gql`
          query GetCategory($title: String!, $includePromoSettings: Boolean!) {
            category(title: $title) {
              id
              title
              bannerImage {
                url
              }

              categoryPromoSettings @include(if: $includePromoSettings) {
                ...CategoryPromo
              }
            }
          }

          ${categoryPromoFragment}
        `,
        variables: {
          title,
          includePromoSettings: Boolean(includePromoSettings),
        },
      }),
      transformResponse: (response: CategoryResponse) => response.category,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = categoriesApi;
