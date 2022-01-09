import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useInfinityCategoryInfluencersQuery } from '@store/services/users';
import { useInfinityCategoryRoutinesQuery } from '@store/services/routines';
import { store } from '@store/index';
import { categoriesApi, Category } from '@store/services/categories';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Image from '@components/Image';
import Text from '@components/Text';

import {
  BenefitsContent,
  BenefitsList,
  BenefitsListItem,
  BenefitsListItemImage,
  BenefitsSection,
  BenefitsTitle,
  CreatorsList,
  CreatorsSection,
  CtaContent,
  CtaSection,
  CtaTitle,
  FeedbackAuthorContainer,
  FeedbackContent,
  FeedbackSection,
  OffersContent,
  OffersList,
  OffersSection,
  OffersTitle,
  OverviewContent,
  OverviewImage,
  OverviewImageContainer,
  OverviewLeft,
  OverviewRight,
  OverviewSection,
  OverviewText,
  OverviewTitle,
  PromoContentWrapper,
  PromoSectionText,
  PromoSectionTitle,
  RoutinesList,
  RoutinesSection,
} from '@modules/influencers/categoryPromo.styled';
import { InfluencersLink } from '@modules/influencers/index.styled';
import CreatorCard from '@modules/influencers/components/CreatorCard';
import RoutineCard from '@modules/influencers/components/RoutineCard';

interface CategoryPromoProps {
  category: Required<Category>;
}

function CategoryPromo({
  category: { categoryPromoSettings },
}: CategoryPromoProps) {
  const { data: influencers } = useInfinityCategoryInfluencersQuery(
    {
      categoryIds: [String(categoryPromoSettings.s5CategoryId)],
      first: 12,
    },
    []
  );

  const { data: routinePages } = useInfinityCategoryRoutinesQuery({
    categoryIds: [String(categoryPromoSettings.s6CategoryId)],
    first: 12,
    contentType: 'all',
    sort: 'popular',
  });

  const routines =
    routinePages?.pages.map((page) => page.categoryRoutines.edges).flat() ?? [];

  const pageTitle = categoryPromoSettings.titleTagText
    ? `${categoryPromoSettings.titleTagText} | Routinr`
    : 'Routinr';
  const benefits = [
    {
      image: categoryPromoSettings.s2Benefit1Image,
      text: categoryPromoSettings.s2Benefit1Text,
    },
    {
      image: categoryPromoSettings.s2Benefit2Image,
      text: categoryPromoSettings.s2Benefit2Text,
    },
    {
      image: categoryPromoSettings.s2Benefit3Image,
      text: categoryPromoSettings.s2Benefit3Text,
    },
    {
      image: categoryPromoSettings.s2Benefit4Image,
      text: categoryPromoSettings.s2Benefit4Text,
    },
  ];
  const offers = Object.entries(categoryPromoSettings)
    .filter(([key]) => key.startsWith('s3Offer'))
    .map(([, value]) => value);

  return (
    <PageWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <Header />
      <PageContent>
        <OverviewSection>
          <PromoContentWrapper>
            <OverviewContent>
              <OverviewLeft>
                <OverviewTitle>{categoryPromoSettings.s1Heading}</OverviewTitle>
                <OverviewText>{categoryPromoSettings.s1Text}</OverviewText>
                <InfluencersLink href="/register">
                  <Text size="bodyLead">Get started</Text>
                </InfluencersLink>
              </OverviewLeft>
              <OverviewRight>
                <OverviewImage>
                  <OverviewImageContainer>
                    <Image
                      src={categoryPromoSettings.s1BannerImage as string}
                      layout="fill"
                      objectFit="cover"
                    />
                  </OverviewImageContainer>
                </OverviewImage>
              </OverviewRight>
            </OverviewContent>
          </PromoContentWrapper>
        </OverviewSection>
        <BenefitsSection>
          <PromoContentWrapper>
            <BenefitsContent>
              <BenefitsTitle>{categoryPromoSettings.s2Heading}</BenefitsTitle>
              <BenefitsList>
                {benefits.map(({ image, text }) => (
                  <BenefitsListItem key={image}>
                    <BenefitsListItemImage>
                      <Image src={image} layout="fill" objectFit="cover" />
                    </BenefitsListItemImage>
                    <PromoSectionText>{text}</PromoSectionText>
                  </BenefitsListItem>
                ))}
              </BenefitsList>
            </BenefitsContent>
          </PromoContentWrapper>
        </BenefitsSection>
        <OffersSection>
          <PromoContentWrapper>
            <OffersContent>
              <OffersTitle>{categoryPromoSettings.s3Heading}</OffersTitle>
              <OffersList>
                {offers.map((offer) => (
                  <li key={offer}>{offer}</li>
                ))}
              </OffersList>
            </OffersContent>
          </PromoContentWrapper>
        </OffersSection>
        {Boolean(
          categoryPromoSettings.s4TestimonialBanner ||
            categoryPromoSettings.s4TestimonialText
        ) && (
          <FeedbackSection>
            <PromoContentWrapper>
              <FeedbackContent>
                {categoryPromoSettings.s4TestimonialBanner && (
                  <FeedbackAuthorContainer>
                    <Image
                      src={categoryPromoSettings.s4TestimonialBanner}
                      layout="fill"
                      objectFit="cover"
                    />
                  </FeedbackAuthorContainer>
                )}
                {categoryPromoSettings.s4TestimonialText && (
                  <PromoSectionText
                    as="pre"
                    dangerouslySetInnerHTML={{
                      __html: categoryPromoSettings.s4TestimonialText,
                    }}
                  />
                )}
              </FeedbackContent>
            </PromoContentWrapper>
          </FeedbackSection>
        )}
        <CreatorsSection>
          <PromoContentWrapper>
            <div>
              <PromoSectionTitle>
                {categoryPromoSettings.s5Text}
              </PromoSectionTitle>
              <CreatorsList>
                {influencers.map((influencer) => (
                  <CreatorCard
                    key={influencer.node.id}
                    influencer={influencer.node}
                  />
                ))}
              </CreatorsList>
            </div>
          </PromoContentWrapper>
        </CreatorsSection>
        <RoutinesSection>
          <PromoContentWrapper>
            <div>
              <PromoSectionTitle>
                {categoryPromoSettings.s6Text}
              </PromoSectionTitle>
              <RoutinesList>
                {routines.map((routine) => (
                  <RoutineCard key={routine.node.id} routine={routine.node} />
                ))}
              </RoutinesList>
            </div>
          </PromoContentWrapper>
        </RoutinesSection>
        <CtaSection>
          <PromoContentWrapper>
            <CtaContent>
              <CtaTitle>{categoryPromoSettings.s7Heading}</CtaTitle>
              <InfluencersLink href="/register">
                <Text size="bodyLead">Get started</Text>
              </InfluencersLink>
            </CtaContent>
          </PromoContentWrapper>
        </CtaSection>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default CategoryPromo;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const categoryTitle = query.categoryTitle as string;

  const { data, error } = await store.dispatch(
    categoriesApi.endpoints.getCategory.initiate({
      title: categoryTitle,
      includePromoSettings: true,
    })
  );

  if (data?.categoryPromoSettings == null || error)
    return {
      redirect: {
        permanent: false,
        destination: `/category/${categoryTitle.toLowerCase()}`,
      },
    };

  return {
    props: { category: data },
  };
};
