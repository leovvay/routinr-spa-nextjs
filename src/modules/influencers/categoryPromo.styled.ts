import styled from 'styled-components';

import Text from '@components/Text';

import { InfluencersLink } from '@modules/influencers/index.styled';

export const OverviewSection = styled.section`
  width: 100%;
  padding-top: 60px;
  background-color: var(--white);

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const PromoContentWrapper = styled.div`
  max-width: 1220px;
  padding: 0 40px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const OverviewContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const OverviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  ${InfluencersLink} {
    margin-top: 30px;
  }
`;

export const OverviewRight = styled.div`
  display: flex;
  justify-content: center;
`;

export const PromoSectionTitle = styled(Text).attrs({
  as: 'h1',
  fontSize: 42,
  weight: 400,
})`
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const PromoSectionText = styled(Text).attrs({
  as: 'p',
  size: 'bodyLead',
  weight: 600,
})`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const OverviewTitle = styled(PromoSectionTitle)`
  text-align: left;
  margin-top: 90px;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    font-size: 36px;
    text-align: center;
  }
`;

export const OverviewText = styled(PromoSectionText)`
  margin-top: 45px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const OverviewImage = styled.div`
  padding: 35px 65px 60px 90px;
  background: url(/doodle-promo.svg) no-repeat;

  @media screen and (max-width: 768px) {
    padding: 0;
    background: 0 0;
  }
`;

export const OverviewImageContainer = styled.div`
  position: relative;
  width: 380px;
  height: 569px;
  box-shadow: 0 35px 40px rgb(0 31 80 / 17%);
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    border-radius: 0;
  }
`;

export const BenefitsSection = styled(OverviewSection)`
  padding: 80px 0;
`;

export const BenefitsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BenefitsTitle = styled(PromoSectionTitle)`
  max-width: 510px;
`;

export const BenefitsList = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 90px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    gap: 55px;
  }
`;

export const BenefitsListItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 55px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BenefitsListItemImage = styled.div`
  position: relative;
  width: 155px;
  height: 155px;
  border-radius: 4px;
  overflow: hidden;
`;

export const OffersSection = styled(BenefitsSection)`
  background-color: var(--routine-builder-bg-color);
`;

export const OffersContent = styled(BenefitsContent)``;

export const OffersTitle = styled(PromoSectionTitle)`
  max-width: 780px;
`;

export const OffersList = styled.ul`
  margin: 80px 0 0;
  width: 100%;
  padding: 0;
  columns: 2;

  li {
    margin-left: 40px;
    margin-bottom: 30px;
    max-width: 480px;

    &:nth-child(3n) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    columns: 1;
  }
`;

export const FeedbackSection = styled(BenefitsSection)``;
export const FeedbackContent = styled(BenefitsContent)`
  a {
    font-weight: 800;
    color: var(--text-primary-color);
  }
`;
export const FeedbackAuthorContainer = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CreatorsSection = styled(BenefitsSection)`
  padding: 40px 0;
`;

export const CreatorsList = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 15px 3px;
    overflow-x: auto;
    margin-top: 40px;
    gap: 10px;

    > * {
      min-width: 90%;
    }
  }
`;

export const RoutinesSection = styled(CreatorsSection)``;
export const RoutinesList = styled(CreatorsList)``;

export const CtaSection = styled(OverviewSection)`
  padding-top: 90px;
  padding-bottom: 120px;

  @media screen and (max-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }
`;
export const CtaContent = styled(BenefitsContent)`
  gap: 40px;
`;
export const CtaTitle = styled(PromoSectionTitle)`
  max-width: 580px;
`;
