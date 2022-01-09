import { gql } from 'graphql-request';

// eslint-disable-next-line import/prefer-default-export
export const categoryPromoFragment = gql`
  fragment CategoryPromo on CategoryPromoSettings {
    id
    s1BannerImage
    s1Heading
    s1Text
    s2Heading
    s2Benefit1Image
    s2Benefit1Text
    s2Benefit2Image
    s2Benefit2Text
    s2Benefit3Image
    s2Benefit3Text
    s2Benefit4Image
    s2Benefit4Text
    s3Heading
    s3Offer1
    s3Offer2
    s3Offer3
    s3Offer4
    s3Offer5
    s3Offer6
    s4TestimonialBanner
    s4TestimonialText
    s5Text
    s6Text
    s7Heading
    titleTagText

    s5CategoryId
    s6CategoryId
  }
`;
