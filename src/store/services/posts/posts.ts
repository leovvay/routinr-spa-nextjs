import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { customGraphqlRequestBaseQuery } from '@utils';

import {
  CreatePostData,
  CreatePostResponse,
  DeletePostResponse,
  GetPostBySlugResponse,
  Post,
  PostWithCreator,
  UpdatePostCover,
  UpdatePostCoverResponse,
  UpdatePostData,
  UpdatePostResponse,
} from './post.interface';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: customGraphqlRequestBaseQuery({}),
  endpoints: (builder) => ({
    getPostBySlug: builder.query<PostWithCreator, string>({
      query: (slug) => ({
        document: gql`
          query GetPostBySlug($slug: String!) {
            postBySlug(slug: $slug) {
              id
              title
              description
              youtubeUrl
              tags
              createdAt
              isLocked
              slug
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

              creator {
                handle
                slug
                avatar
              }
            }
          }
        `,
        variables: {
          slug,
        },
      }),
      transformResponse: (response: GetPostBySlugResponse) =>
        response.postBySlug,
    }),
    createPost: builder.mutation<Post, CreatePostData>({
      query: (postData) => ({
        document: gql`
          mutation CreatePost($postData: CreatePostInput!) {
            createPost(postData: $postData) {
              id
              title
            }
          }
        `,
        variables: {
          postData,
        },
      }),
      transformResponse: (response: CreatePostResponse) => response.createPost,
    }),
    updatePost: builder.mutation<Post, UpdatePostData>({
      query: (postData) => ({
        document: gql`
          mutation UpdatePost($postData: UpdatePostInput!) {
            updatePost(postData: $postData) {
              id
              title
            }
          }
        `,
        variables: {
          postData,
        },
      }),
      transformResponse: (response: UpdatePostResponse) => response.updatePost,
    }),
    deletePost: builder.mutation<Post, number>({
      query: (id) => ({
        document: gql`
          mutation DeletePost($id: Int!) {
            deletePost(id: $id) {
              id
            }
          }
        `,
        variables: {
          id,
        },
      }),
      transformResponse: (response: DeletePostResponse) => response.deletePost,
    }),
    updatePostCover: builder.mutation<Pick<Post, 'id'>, UpdatePostCover>({
      query: (postCoverData) => ({
        document: gql`
          mutation UpdatePostCover($postCoverData: UpdatePostCoverInput!) {
            changePostCover(updateCoverData: $postCoverData) {
              id
            }
          }
        `,
        variables: {
          postCoverData,
        },
      }),
      transformResponse: (response: UpdatePostCoverResponse) =>
        response.changePostCover,
    }),
  }),
});

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useUpdatePostCoverMutation,
  useGetPostBySlugQuery,
} = postsApi;
