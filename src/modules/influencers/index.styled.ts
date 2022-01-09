import styled from 'styled-components';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo';

import CategoryItem from '@modules/influencers/components/CategoryItem';

export const InfluencersContainer = styled.div`
  background-color: var(--white);
  padding-bottom: 120px;
`;

export const InfluencersLink = styled(LinkTo)`
  background-color: var(--red);
  border-radius: 24px;
  color: var(--white);
  padding: 12px 40px;
  transition: all 0.3s ease;
  border: 2px solid var(--red);

  &:hover {
    color: var(--red);
    background-color: var(--white);
    border-radius: 3px;
  }
`;

export const OverviewSection = styled.section`
  padding-top: 90px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const OverviewContent = styled.div`
  padding: 0 3%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OverviewLeft = styled.div`
  margin-left: 100px;
  width: 42%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  ${InfluencersLink} {
    margin-top: 30px;
  }
`;

export const OverviewRight = styled.div`
  width: 54%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 50px 0 0;
  }
`;

export const OverviewTitle = styled(Text)`
  margin-top: 50px;
  text-align: left;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 0;
  }
`;

export const OverviewText = styled(Text)`
  margin-top: 45px;
  line-height: 1.7;
`;

export const OverviewTopImage = styled.div`
  & > *:not(:first-child) {
    margin-left: 20px !important;
  }

  & > * {
    box-shadow: 0 35px 40px rgb(0 31 80 / 17%);
  }
`;

export const OverviewBottomImage = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  & > * {
    box-shadow: 0 35px 40px rgb(0 31 80 / 17%);
  }
`;

export const Progress = styled.section`
  margin-top: 160px;
  width: 100%;
`;

export const ProgressContent = styled.div`
  padding: 0 4%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    > span {
      margin: 50px 0 !important;
      transform: rotate(90deg);
    }
  }
`;

export const ProgressColumn = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const Steps = styled.section`
  margin-top: 100px;
  width: 100%;
  background: var(--routine-builder-bg-color);
`;

export const StepsContent = styled.div`
  padding: 80px 7% 40px;
`;

export const StepsOverview = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${InfluencersLink} {
    margin-top: 40px;
  }
`;

export const StepsList = styled.div`
  margin: 85px auto 0;
`;

export const StepsListItem = styled.div`
  width: 84%;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  &:nth-child(2) {
    margin: 15px 0 0 15%;

    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  &:last-child {
    margin: 15px 0 0 25%;

    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }
`;

export const StepsListItemImage = styled.div<{ step: number }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 25px 40px 25px 35px;

  background: url('/influencers/step-${({ step }) => step}-doodle.svg') top/100%
    no-repeat;

  > * {
    border-radius: 4px;
    box-shadow: 0 35px 40px rgb(0 31 80 / 17%);
  }

  > *:nth-child(2) {
    margin: 25px 0 0 20px !important;
`;

export const StepText = styled(Text)`
  margin-top: 20px;
  line-height: 1.7;
`;

export const StepsDescription = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    text-align: center;
    align-items: center;
  }
`;

export const Benefits = styled.section`
  margin-top: 70px;
  width: 100%;
`;

export const BenefitsTitle = styled(Text)`
  text-align: center;
`;

export const BenefitsContent = styled.div`
  padding: 0 11%;
`;

export const BenefitsList = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 80px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BenefitsListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 60px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const BenefitsListItemDescription = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Categories = styled.section`
  margin-top: 180px;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const CategoriesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 0 9%;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const CategoriesList = styled.div`
  width: 100%;
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 425px;
  grid-gap: 32px 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    height: unset;
    margin-top: 0;
    overflow-x: scroll;

    ${CategoryItem} {
      flex: 0 0 45%;
    }
  }
`;

export const CategoriesSubtitle = styled(Text)`
  max-width: 680px;
`;

export const Promo = styled(Categories)``;

export const PromoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
  gap: 40px;
`;
