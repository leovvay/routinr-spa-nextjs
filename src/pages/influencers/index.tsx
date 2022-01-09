import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { categoriesApi, Category } from '@store/services/categories';
import { store } from '@store/index';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Text from '@components/Text';
import Image from '@components/Image';

import {
  Benefits,
  BenefitsContent,
  BenefitsList,
  BenefitsListItem,
  BenefitsListItemDescription,
  BenefitsTitle,
  Categories,
  CategoriesContent,
  CategoriesList,
  CategoriesSubtitle,
  ContentWrapper,
  InfluencersContainer,
  InfluencersLink,
  OverviewBottomImage,
  OverviewContent,
  OverviewLeft,
  OverviewRight,
  OverviewSection,
  OverviewText,
  OverviewTitle,
  OverviewTopImage,
  Progress,
  ProgressColumn,
  ProgressContent,
  Promo,
  PromoContent,
  Steps,
  StepsContent,
  StepsDescription,
  StepsList,
  StepsListItem,
  StepsListItemImage,
  StepsOverview,
  StepText,
} from '@modules/influencers/index.styled';
import CategoryItem from '@modules/influencers/components/CategoryItem';

interface InfluencersProps {
  categories: Category[];
}

function Influencers({ categories }: InfluencersProps) {
  return (
    <PageWrapper>
      <Head>
        <title>Inspire, Influence and get paid with Routinr | Routinr</title>
        <meta
          property="og:title"
          content="Inspire, Influence and get paid with Routinr | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <InfluencersContainer>
          <OverviewSection>
            <ContentWrapper>
              <OverviewContent>
                <OverviewLeft>
                  <OverviewTitle as="h1" fontSize={42} weight={400}>
                    Inspire, Influence and get paid with Routinr
                  </OverviewTitle>
                  <OverviewText as="p" size="bodyLead" weight={600}>
                    Routinr is the world’s only lifestyle design marketplace
                    connecting remarkable people across various specialties,
                    with those wanting to adopt in-depth life changing tips,
                    strategies and routines. It’s the better, more sustainable
                    way to connect with your audience.
                  </OverviewText>
                  <InfluencersLink href="/register">
                    <Text size="bodyLead">Start my profile</Text>
                  </InfluencersLink>
                </OverviewLeft>
                <OverviewRight>
                  <OverviewTopImage>
                    <Image
                      src="/influencers/1@2x.jpg"
                      alt="Influencer's promo 1"
                      width={257}
                      height={281}
                    />
                    <Image
                      src="/influencers/3@2x.jpg"
                      alt="Influencer's promo 2"
                      width={297}
                      height={305}
                    />
                  </OverviewTopImage>
                  <OverviewBottomImage>
                    <Image
                      src="/influencers/2@2x.jpg"
                      alt="Influencer's promo 3"
                      width={311}
                      height={323}
                    />
                  </OverviewBottomImage>
                </OverviewRight>
              </OverviewContent>
            </ContentWrapper>
          </OverviewSection>
          <Progress>
            <ContentWrapper>
              <ProgressContent>
                <ProgressColumn>
                  <Text size="h1">The old way</Text>
                  <Image
                    src="/influencers/before@2x.png"
                    alt="Before"
                    width={471}
                    height={471}
                  />
                </ProgressColumn>
                <Image
                  src="/influencers/arrow2@2x.png"
                  alt="arrow"
                  width={112}
                  height={15}
                />
                <ProgressColumn>
                  <Text size="h1">The routinr way</Text>
                  <Image
                    src="/influencers/after@2x.png"
                    alt="After"
                    width={471}
                    height={471}
                  />
                </ProgressColumn>
              </ProgressContent>
            </ContentWrapper>
          </Progress>
          <Steps>
            <ContentWrapper>
              <StepsContent>
                <StepsOverview>
                  <Text as="h1" fontSize={42} weight={400}>
                    How does routinr work?
                  </Text>
                  <OverviewText as="p" size="bodyLead" weight={600}>
                    Think of Routinr as an exclusive gateway between you and
                    your most loyal fans who want to know more about you, your
                    daily rituals, your plans and want to support you on your
                    journey. With Routinr they can become paying supporters and
                    in return, receive a deeper level of content compared to
                    what you share on social media.
                  </OverviewText>
                  <InfluencersLink href="/register">
                    <Text size="bodyLead">Find out more</Text>
                  </InfluencersLink>
                </StepsOverview>
                <StepsList>
                  <StepsListItem>
                    <StepsListItemImage step={1}>
                      <Image
                        width={330}
                        height={151}
                        src="/influencers/step-1-message@2x.jpg"
                        alt="Step 1 message"
                      />
                      <Image
                        width={331}
                        height={255}
                        src="/influencers/step-1-responses@2x.jpg"
                        alt="Step 1 responses"
                      />
                    </StepsListItemImage>
                    <StepsDescription>
                      <Text size="h1" as="h3" weight={700}>
                        Step 1
                      </Text>
                      <StepText size="bodyLead" weight={600} as="p">
                        Ask your fans what they want to see? A workout routine?
                        A travel plan? More about what you had for breakfast?
                        Access to an exclusive slack group? Bootcamp or cooking
                        classes
                      </StepText>
                    </StepsDescription>
                  </StepsListItem>
                  <StepsListItem>
                    <StepsListItemImage step={2}>
                      <Image
                        width={303}
                        height={429}
                        src="/influencers/step-2@2x.jpg"
                        alt="Step 2"
                      />
                    </StepsListItemImage>
                    <StepsDescription>
                      <Text size="h1" as="h3" weight={700}>
                        Step 2
                      </Text>
                      <StepText size="bodyLead" weight={600} as="p">
                        Start creating your premium content and membership
                        rewards. Whether it&apos;s access to your premium
                        routines, posts, exclusive access to message groups or
                        even 1 on 1 coaching, Routinr offers offer flexibility
                        in what you offer. Choose between one-off or recurring
                        payments, online or offline.
                      </StepText>
                    </StepsDescription>
                  </StepsListItem>
                  <StepsListItem>
                    <StepsListItemImage step={3}>
                      <Image
                        width={303}
                        height={372}
                        src="/influencers/step-3@2x.jpg"
                        alt="Step 3"
                      />
                    </StepsListItemImage>
                    <StepsDescription>
                      <Text size="h1" as="h3" weight={700}>
                        Step 3
                      </Text>
                      <StepText size="bodyLead" weight={600} as="p">
                        Continue to create value, develop proper relationships
                        and build a reliable and significant income with daily
                        payouts.
                      </StepText>
                    </StepsDescription>
                  </StepsListItem>
                </StepsList>
              </StepsContent>
            </ContentWrapper>
          </Steps>

          <Benefits>
            <ContentWrapper>
              <BenefitsContent>
                <BenefitsTitle as="h1" fontSize={42} weight={400}>
                  Why routinr?
                </BenefitsTitle>
                <BenefitsList>
                  <BenefitsListItem>
                    <Image
                      width={320}
                      height={237}
                      src="/influencers/cards@2x.jpg"
                      alt="Card"
                    />
                    <BenefitsListItemDescription>
                      <Text as="h3" size="h3" weight={600}>
                        Share life changing influential content
                      </Text>
                      <StepText size="bodyLead" weight={600} as="p">
                        No chasing up sponsors and payment arrangement. Let us
                        take care of that stuff while you focus on providing
                        amazing content.
                      </StepText>
                    </BenefitsListItemDescription>
                  </BenefitsListItem>
                  <BenefitsListItem>
                    <Image
                      width={176}
                      height={237}
                      src="/influencers/payments@2x.png"
                      alt="Payments"
                    />
                    <BenefitsListItemDescription>
                      <Text
                        as="h3"
                        size="h3"
                        weight={600}
                        className="benefits__card-title"
                      >
                        Automated weekly payments
                      </Text>
                      <StepText size="bodyLead" weight={600} as="p">
                        No chasing up sponsors and payment arrangement. Let us
                        take care of that stuff while you focus on providing
                        amazing content.
                      </StepText>
                    </BenefitsListItemDescription>
                  </BenefitsListItem>
                  <BenefitsListItem>
                    <Image
                      width={248}
                      height={237}
                      src="/influencers/database@2x.jpg"
                      alt="Database"
                    />
                    <BenefitsListItemDescription>
                      <Text as="h3" size="h3" weight={600}>
                        Own your own content and database
                      </Text>
                      <StepText size="bodyLead" weight={600} as="p">
                        You created your content so It’s yours and if you want
                        to sell it on your own website or promote it on another
                        site that’s fine.
                      </StepText>
                    </BenefitsListItemDescription>
                  </BenefitsListItem>
                </BenefitsList>
              </BenefitsContent>
            </ContentWrapper>
          </Benefits>
          <Categories>
            <ContentWrapper>
              <CategoriesContent>
                <Text as="h1" fontSize={42} weight={400}>
                  Who uses routinr?
                </Text>
                <CategoriesSubtitle as="h2" size="h1" weight={600}>
                  Unsure what you can sell and contribute? Here are some use
                  cases for routinr.
                </CategoriesSubtitle>
                <CategoriesList>
                  {categories?.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                  ))}
                </CategoriesList>
              </CategoriesContent>
            </ContentWrapper>
          </Categories>
          <Promo>
            <ContentWrapper>
              <PromoContent>
                <Text as="h1" fontSize={42} weight={400}>
                  Join the growing list of influencers using Routinr
                </Text>
                <InfluencersLink href="/register">
                  <Text size="bodyLead">Get started</Text>
                </InfluencersLink>
              </PromoContent>
            </ContentWrapper>
          </Promo>
        </InfluencersContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Influencers;

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  const { data } = await store.dispatch(
    categoriesApi.endpoints.getCategories.initiate()
  );
  return {
    props: { categories: data },
  };
};
