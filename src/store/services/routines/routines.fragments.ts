import { gql } from 'graphql-request';

// eslint-disable-next-line import/prefer-default-export
export const routineFragment = gql`
  fragment RoutineCommon on Routine {
    id
    title
    description
    benefits
    hashtag
    youtubeUrl
    promoVideo
    isFree
    isPrivate
    isPublished
    price
    usageCount
    daysCount
    slug
    creator {
      id
      displayName
      avatar
      slug
      handle
    }
    cover {
      __typename
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
    categories {
      id
      title
    }
    attachments {
      __typename
      ... on Gallery {
        id
        url
        previewUrl
        filename
        resource_type
      }
      ... on Unsplash {
        id
        url
        previewUrl
        resource_type
      }
    }
    supports {
      __typename
      ... on Gallery {
        id
        url
        previewUrl
        resource_type
      }
      ... on Unsplash {
        id
        url
        previewUrl
        resource_type
      }
    }
    days {
      id
      weekday
      repetitionEndDate
      repetitionType
      routineId
      activities {
        id
        title
        description
        startTime
        endTime
        youtubeUrl
        routineId
        cover {
          __typename
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
          __typename
          ... on Gallery {
            id
            url
            previewUrl
            resource_type
          }
          ... on Unsplash {
            id
            url
            previewUrl
            resource_type
          }
        }
      }
    }
  }
`;
