import { gql } from 'graphql-request';

// eslint-disable-next-line import/prefer-default-export
export const userFragment = gql`
  fragment UserCommon on User {
    id
    slug
    description
    membershipsCount
    routinesCount
    postsCount
    handle
    displayName
    avatar
    followers {
      avatar
      slug
    }
  }
`;
