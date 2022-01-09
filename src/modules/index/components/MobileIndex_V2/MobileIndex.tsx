import React, { useCallback, useState, MouseEvent } from 'react';

import Text from '@components/Text';
import RoundButton from '@components/RoundButton';
import Image from '@components/Image';
import CasseyModal from '@components/CasseyModal';
import 'swiper/css';

import {
  MobileIndexSection,
  MobileContentContainer,
  MobileImageContainer,
  CardView,
  RoundImage,
  CardRow,
  CardColumn,
} from './MobileIndex.styled';

function MobileIndex(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);
  const onModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const openLink = (e: MouseEvent) => {
    e.preventDefault();
    window.location.href = '/register';
  };

  return (
    <>
      {/* Section 1 */}
      <MobileIndexSection
        bgColor='url("/bg_landing_1.png") no-repeat 65% 50%/cover,
        url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICBpZD0ic25hcHNob3QtNTQ3NjUiIHdpZHRoPSIxODAiIGhlaWdodD0iMjg3IiB2aWV3Qm94PSIwIDAgMTgwIDI4NyI+PGRlc2M+VGhpcyBpbWFnZSB3YXMgbWFkZSBvbiBQYXR0ZXJuaW5qYS5jb208L2Rlc2M+PGRlZnM+CjwhLS0gaW1hZ2UgMjAyMjUgLS0+CjxnIGlkPSJ0cmFuc2Zvcm1lZC0yMDIyNSIgZGF0YS1pbWFnZT0iMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNDA5OTk5OTk5OTk5OTk3LCAxNTAuOTgpIHJvdGF0ZSgwLCA1Ny41LCA1MikiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA0cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA0Ij48ZyBpZD0ib3JpZ2luYWwtMjAyMjUiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgMjAyMjUgLS0+Cgo8IS0tIGltYWdlIDU3MTE5IC0tPgo8ZyBpZD0idHJhbnNmb3JtZWQtNTcxMTkiIGRhdGEtaW1hZ2U9IjU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MS40MDAwMDAwMDAwMDAwMDYsIDEyLjQwOTk5OTk5OTk5OTk5Nykgcm90YXRlKDM1NywgNTcuNSwgNTMuNSkiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA3cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA3Ij48ZyBpZD0ib3JpZ2luYWwtNTcxMTkiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgNTcxMTkgLS0+CjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI4NyIgZmlsbD0icmdiYSgyMDEsIDIwNywgMjE5LCAwKSI+PC9yZWN0Pjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjwvc3ZnPg==)
          right/13%,
        #c9cfdb;'
      >
        <MobileImageContainer position="absolute">
          <Image
            src="/mobile_bg_blur_section1.svg"
            layout="fill"
            objectFit="cover"
          />
        </MobileImageContainer>
        <MobileContentContainer
          width="274px"
          height={100}
          marginLeft={24}
          justifyContent="center"
          position="absolute"
        >
          <Text
            fontSize={36}
            weight={700}
            color="var(--text-landing-white)"
            lineHeight={42}
            letterSpacing="-0.04em"
            fontFamily="var(--font-secondary)"
          >
            Turn your audience into paid subscribers
          </Text>
          <RoundButton onClick={openLink}>
            <Text
              fontFamily="var(--font-secondary)"
              fontSize={16}
              lineHeight={22}
              color="var(--text-landing-white)"
              weight={600}
              letterSpacing="0.01em"
            >
              Sign up
            </Text>
          </RoundButton>
        </MobileContentContainer>
      </MobileIndexSection>

      {/* Section 2 */}
      <MobileIndexSection bgColor="#000" padding="40px 24px">
        <MobileContentContainer width="100%" position="relative">
          <Text
            fontSize={36}
            lineHeight={42}
            color="var(--text-landing-white)"
            letterSpacing="-0.04em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            Build{' '}
            <Text
              fontSize={36}
              lineHeight={42}
              color="var(--text-landing-purple)"
              letterSpacing="-0.04em"
              weight={700}
              fontFamily="var(--font-secondary)"
            >
              interactive routines
            </Text>{' '}
            with photos, videos, and downloads that let your followers{' '}
            <Text
              fontSize={36}
              lineHeight={42}
              color="var(--text-landing-purple)"
              letterSpacing="-0.04em"
              weight={700}
              fontFamily="var(--font-secondary)"
            >
              integrate your content
            </Text>{' '}
            directly into their lives.
          </Text>
          <Text
            fontSize={20}
            lineHeight={26}
            color="var(--text-landing-white)"
            letterSpacing="-0.04em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            Meal plans, meditation guides, workout routines, lifestyle tips,
            whatever you can imagine — all in one place.
          </Text>
        </MobileContentContainer>
        <MobileImageContainer
          position="relative"
          marginTop="48px"
          minHeight={478}
        >
          <Image src="/phone.svg" layout="fill" objectFit="contain" />
        </MobileImageContainer>
        <MobileImageContainer
          position="absolute"
          top="50%"
          left="0"
          height="50%"
        >
          <Image
            src="/mobile_bg_blur_section2.svg"
            layout="fill"
            objectFit="cover"
          />
        </MobileImageContainer>
      </MobileIndexSection>

      {/* Section 3 */}
      <MobileIndexSection
        bgColor="linear-gradient(90deg, #BC2C9E 0%, #473196 100%)"
        padding="40px 0 0 0"
      >
        <MobileContentContainer
          position="relative"
          marginLeft={24}
          marginRight={24}
          zIndex={1}
        >
          <Text
            fontSize={36}
            lineHeight={42}
            color="var(--text-landing-white)"
            letterSpacing="-0.04em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            Bring your content to life with our{' '}
            <Text
              fontSize={36}
              lineHeight={42}
              color="var(--text-landing-lightblue)"
              letterSpacing="-0.04em"
              weight={700}
              fontFamily="var(--font-secondary)"
            >
              interactive calendar
            </Text>
            , and enable a whole new level of engagement.
          </Text>
        </MobileContentContainer>
        <MobileImageContainer
          position="relative"
          marginTop="48px"
          width="auto"
          minHeight={300}
          marginLeft={24}
          marginRight={24}
        >
          <CardView top="0" left="10%">
            <RoundImage src="/card-meditation.png" width="100%" height={104} />
            <CardRow bgColor="#1A2F06" borderRadius gap={16} padding>
              <CardColumn>
                <Text
                  fontSize={14}
                  lineHeight={20}
                  color="#FDFEFF"
                  letterSpacing="0.01em"
                  weight={600}
                  fontFamily="var(--font-secondary)"
                >
                  Meditation
                </Text>
                <CardRow gap={5}>
                  <Image
                    src="/clock.svg"
                    width={12}
                    height={12}
                    objectFit="contain"
                  />
                  <Text
                    fontSize={12}
                    lineHeight={18}
                    color="#FDFEFF"
                    letterSpacing="0.01em"
                    weight={400}
                    fontFamily="var(--font-secondary)"
                  >
                    45 min
                  </Text>
                </CardRow>
              </CardColumn>
              <Image
                src="/Shape.svg"
                width={18}
                height={18}
                objectFit="contain"
              />
            </CardRow>
          </CardView>
          <CardView top="150px" right="0">
            <RoundImage src="/card-fitness.svg" width="100%" height={104} />
            <CardRow bgColor="#010006" borderRadius gap={16} padding>
              <CardColumn>
                <Text
                  fontSize={14}
                  lineHeight={20}
                  color="#62C6FF"
                  letterSpacing="0.01em"
                  weight={600}
                  fontFamily="var(--font-secondary)"
                >
                  Meditation
                </Text>
                <CardRow gap={5}>
                  <Image
                    src="/clock1.svg"
                    width={12}
                    height={12}
                    objectFit="contain"
                  />
                  <Text
                    fontSize={12}
                    lineHeight={18}
                    color="#62C6FF"
                    letterSpacing="0.01em"
                    weight={400}
                    fontFamily="var(--font-secondary)"
                  >
                    1 hr
                  </Text>
                </CardRow>
              </CardColumn>
              <Image
                src="/Shape1.svg"
                width={18}
                height={18}
                objectFit="contain"
              />
            </CardRow>
          </CardView>
          <CardView top="250px" left="0">
            <RoundImage src="/card-food.svg" width="100%" height={104} />
            <CardRow bgColor="#EEF6FF" borderRadius gap={16} padding>
              <CardColumn>
                <Text
                  fontSize={14}
                  lineHeight={20}
                  color="#011C37"
                  letterSpacing="0.01em"
                  weight={600}
                  fontFamily="var(--font-secondary)"
                >
                  Meditation
                </Text>
                <CardRow gap={5}>
                  <Image
                    src="/clock2.svg"
                    width={12}
                    height={12}
                    objectFit="contain"
                  />
                  <Text
                    fontSize={12}
                    lineHeight={18}
                    color="#011C37"
                    letterSpacing="0.01em"
                    weight={400}
                    fontFamily="var(--font-secondary)"
                  >
                    1 hr
                  </Text>
                </CardRow>
              </CardColumn>
              <Image
                src="/Shape2.svg"
                width={18}
                height={18}
                objectFit="contain"
              />
            </CardRow>
          </CardView>
        </MobileImageContainer>
        <MobileImageContainer position="relative" minHeight={400}>
          <Image src="/girl.svg" layout="fill" objectFit="cover" />
        </MobileImageContainer>
        <MobileImageContainer position="absolute" top="0" left="0" height="50%">
          <Image
            src="/mobile_bg_blur_section3.svg"
            layout="fill"
            objectFit="cover"
          />
        </MobileImageContainer>
      </MobileIndexSection>

      {/* Section 4 */}
      <MobileIndexSection bgColor="#000" padding="40px 0 0 0">
        <MobileContentContainer
          position="relative"
          marginLeft={24}
          marginRight={24}
          minHeight={210}
        >
          <Text
            fontSize={36}
            lineHeight={42}
            color="var(--text-landing-white)"
            letterSpacing="-0.04em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            Routinr is a{' '}
            <Text
              fontSize={36}
              lineHeight={42}
              color="var(--text-landing-pink)"
              letterSpacing="-0.04em"
              weight={700}
              fontFamily="var(--font-secondary)"
            >
              social destination
            </Text>{' '}
            that turns mindless scrolling into engaging, premium subscription
            content.
          </Text>
        </MobileContentContainer>
        <MobileImageContainer
          position="relative"
          marginTop="10px"
          minHeight={591}
        >
          <Image src="/hand.svg" priority layout="fill" objectFit="cover" />
        </MobileImageContainer>
      </MobileIndexSection>

      {/* Section 5 */}
      <MobileIndexSection
        bgColor="linear-gradient(231deg, #307EFE 9.31%, #7C2AE8 77.62%)"
        padding="40px 0 0 0"
      >
        <MobileContentContainer
          marginLeft={24}
          marginRight={24}
          minHeight={330}
        >
          <Text
            fontSize={26}
            lineHeight={34}
            color="var(--text-landing-white)"
            letterSpacing="-0.03em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            “I made $7,000 in one month from selling my program directly to my
            followers. I controlled the content, the timing, the
            communication—and now I control my customer data and my revenue
            stream.”
          </Text>
          <Text
            fontSize={26}
            lineHeight={34}
            color="var(--text-landing-white)"
            letterSpacing="-0.03em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            —Cassey
          </Text>
          <RoundButton onClick={toggleModal}>
            <Text
              fontSize={16}
              lineHeight={22}
              fontFamily="var(--font-secondary)"
              color="#FCFCFD"
              weight={600}
              letterSpacing="0.01em"
            >
              Learn more
            </Text>
          </RoundButton>
        </MobileContentContainer>
        <MobileImageContainer position="relative" minHeight={620}>
          <Image src="/Cassey.svg" layout="fill" objectFit="cover" />
        </MobileImageContainer>
        {/* Cassey Modal */}
        <CasseyModal modalOpen={modalOpen} onModalClose={onModalClose} />
      </MobileIndexSection>

      {/* Section 6 */}
      <MobileIndexSection bgColor="#000">
        <MobileImageContainer
          position="absolute"
          minHeight={760}
          top="0"
          left="0"
        >
          <Image src="/Section-6-man.png" layout="fill" objectFit="cover" />
        </MobileImageContainer>
        <MobileImageContainer position="absolute" left="0">
          <Image
            src="/mobile_bg_blur_section6.svg"
            layout="fill"
            objectFit="cover"
          />
        </MobileImageContainer>
        <MobileContentContainer
          marginLeft={24}
          marginRight={24}
          bottom={40}
          position="absolute"
        >
          <Text
            fontSize={36}
            lineHeight={42}
            color="var(--text-landing-white)"
            letterSpacing="-0.04em"
            weight={700}
            fontFamily="var(--font-secondary)"
          >
            Start making money from the influence you’ve cultivated
          </Text>
          <RoundButton onClick={openLink}>
            <Text
              fontSize={16}
              lineHeight={22}
              fontFamily="var(--font-secondary)"
              color="var(--text-landing-white)"
              weight={600}
              letterSpacing="0.01em"
            >
              Sign up for free
            </Text>
          </RoundButton>
        </MobileContentContainer>
      </MobileIndexSection>
    </>
  );
}

export default MobileIndex;
