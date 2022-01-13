import React, { useCallback, useState, MouseEvent } from 'react';

import Text from '@components/Text';
import Image from '@components/Image';
import RoundButton from '@components/RoundButton';
import CasseyModal from '@components/CasseyModal';
import Animation from '@components/Animation';
import { useWindowSize } from '@hooks';

import {
  DesktopIndexContainer,
  Section,
  ImageContainer,
  ContentContainer,
  Container,
  AbsoluteContainer,
} from './DesktopIndex.styled';

function DesktopIndex(): JSX.Element {
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

  const screenSize = useWindowSize();

  return (
    <DesktopIndexContainer>
      <Section
        background='url("/bg_landing_1.png") no-repeat 65% 50%/cover,
        url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICBpZD0ic25hcHNob3QtNTQ3NjUiIHdpZHRoPSIxODAiIGhlaWdodD0iMjg3IiB2aWV3Qm94PSIwIDAgMTgwIDI4NyI+PGRlc2M+VGhpcyBpbWFnZSB3YXMgbWFkZSBvbiBQYXR0ZXJuaW5qYS5jb208L2Rlc2M+PGRlZnM+CjwhLS0gaW1hZ2UgMjAyMjUgLS0+CjxnIGlkPSJ0cmFuc2Zvcm1lZC0yMDIyNSIgZGF0YS1pbWFnZT0iMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNDA5OTk5OTk5OTk5OTk3LCAxNTAuOTgpIHJvdGF0ZSgwLCA1Ny41LCA1MikiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA0cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA0Ij48ZyBpZD0ib3JpZ2luYWwtMjAyMjUiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgMjAyMjUgLS0+Cgo8IS0tIGltYWdlIDU3MTE5IC0tPgo8ZyBpZD0idHJhbnNmb3JtZWQtNTcxMTkiIGRhdGEtaW1hZ2U9IjU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MS40MDAwMDAwMDAwMDAwMDYsIDEyLjQwOTk5OTk5OTk5OTk5Nykgcm90YXRlKDM1NywgNTcuNSwgNTMuNSkiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA3cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA3Ij48ZyBpZD0ib3JpZ2luYWwtNTcxMTkiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgNTcxMTkgLS0+CjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI4NyIgZmlsbD0icmdiYSgyMDEsIDIwNywgMjE5LCAwKSI+PC9yZWN0Pjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjwvc3ZnPg==)
          center/13%,
        #c9cfdb;'
      >
        <ImageContainer>
          <Image src="/bg_blur_1.svg" layout="fill" objectFit="cover" />
        </ImageContainer>
        <ContentContainer marginLeft="12%" width={25} position="absolute">
          <Text
            fontSize={52}
            weight={700}
            color="var(--text-landing-white)"
            lineHeight={64}
            letterSpacing="-0.04em"
            fontFamily="var(--font-secondary)"
          >
            Turn your audience into paid subscribers
          </Text>
          <RoundButton onClick={openLink}>
            <Text
              fontSize={16}
              lineHeight={22}
              letterSpacing="0.01em"
              color="var(--text-landing-white)"
              fontFamily="var(--font-secondary)"
            >
              Sign up
            </Text>
          </RoundButton>
        </ContentContainer>
      </Section>

      <Section bgColor="black">
        <ImageContainer width="50%" isFlex height={80} top={10} relative>
          <Container style={{ width: '357px', height: '720px' }}>
            <Image src="/section-2-phone.png" width={357} height={720} />
          </Container>
        </ImageContainer>
        <ImageContainer>
          <Image src="/bg_blur_2.svg" layout="fill" objectFit="cover" />
        </ImageContainer>
        <ContentContainer width={40} position="relative" right="0">
          <Text
            fontSize={48}
            color="var(--text-landing-white)"
            weight={700}
            lineHeight={56}
            letterSpacing="-0.04em"
            fontFamily="var(--font-secondary)"
          >
            Build{' '}
            <Text
              fontSize={48}
              weight={700}
              color="var(--text-landing-purple)"
              lineHeight={37}
              letterSpacing="-0.04em"
              fontFamily="var(--font-secondary)"
            >
              interactive routines
            </Text>{' '}
            with photos, videos, and downloads that let your followers{' '}
            <Text
              fontSize={48}
              weight={700}
              color="var(--text-landing-purple)"
              lineHeight={37}
              letterSpacing="-0.04em"
              fontFamily="var(--font-secondary)"
            >
              integrate your content
            </Text>{' '}
            directly into their lives.
          </Text>
          <Text
            fontSize={28}
            color="var(--text-landing-white)"
            weight={700}
            lineHeight={37}
            letterSpacing="-0.04em"
            fontFamily="var(--font-secondary)"
          >
            Meal plans, meditation guides, workout routines, lifestyle tips,
            whatever you can imagine — all in one place.
          </Text>
        </ContentContainer>
      </Section>

      <Section background="linear-gradient(90deg, #bc2c9e 0%, #473196 100%)">
        <ImageContainer
          relative
          height={
            screenSize.width < 1440 ? (screenSize.width / 1.6 / 900) * 100 : 0
          }
          top={
            screenSize.width < 1440
              ? 100 - (screenSize.width / 1.6 / 900) * 100
              : 0
          }
        >
          <Image
            src="/section-3-yoga-woman.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <ContentContainer
          width={45}
          height={532}
          marginTop={50}
          position="absolute"
        >
          <ContentContainer marginLeft="30%">
            <Text
              fontSize={48}
              color="var(--text-landing-white)"
              weight={700}
              lineHeight={56}
              letterSpacing="-0.04em"
              fontFamily="var(--font-secondary)"
            >
              Bring your content to life with our{' '}
              <Text
                fontSize={48}
                color="--text-landing-lightblue"
                weight={700}
                lineHeight={56}
                letterSpacing="-0.04em"
                fontFamily="var(--font-secondary)"
              >
                interactive calendar
              </Text>
              , and enable a whole new level of engagement.
            </Text>
          </ContentContainer>
        </ContentContainer>
      </Section>

      <Container>
        <Section isFullHeight bgColor="black" isSticky minHeight={890}>
          <AbsoluteContainer>
            <ImageContainer
              relative
              width="700px"
              paddingTop="calc(100vh - 890px)"
            >
              <Image src="/holding-phone-mockup.png" width={700} height={890} />
            </ImageContainer>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ContentContainer position="relative" marginLeft="5%">
                <Text
                  fontSize={48}
                  weight={700}
                  lineHeight={56}
                  color="var(--text-landing-white)"
                  letterSpacing="-0.04em"
                  fontFamily="var(--font-secondary)"
                >
                  Routinr is a{' '}
                  <Text
                    fontSize={48}
                    weight={700}
                    lineHeight={56}
                    color="var(--text-landing-pink)"
                    letterSpacing="-0.04em"
                    fontFamily="var(--font-secondary)"
                  >
                    social destination
                  </Text>{' '}
                  that turns mindless scrolling into engaging, premium
                  subscription content.
                </Text>
              </ContentContainer>
            </div>
          </AbsoluteContainer>

          <ImageContainer>
            <Image src="/bg_blur_4.svg" layout="fill" objectFit="cover" />
          </ImageContainer>
          <Animation />
        </Section>
        <div style={{ width: '50vw', height: '50vh' }} />
      </Container>

      <Section
        background="linear-gradient(231deg, #307efe 9.31%, #7c2ae8 77.62%)"
        noGap
      >
        <ContentContainer
          position="relative"
          width={30}
          marginLeft="10%"
          gap={32}
        >
          <Text
            fontSize={34}
            lineHeight={41}
            color="var(--text-landing-white)"
            weight={700}
            letterSpacing="-0.03em"
            fontFamily="var(--font-secondary)"
          >
            “I made $7,000 in one month from selling my program directly to my
            followers. I controlled the content, the timing, the
            communication—and now I control my customer data and my revenue
            stream.”
          </Text>
          <Text
            fontSize={34}
            lineHeight={41}
            color="var(--text-landing-white)"
            weight={700}
            letterSpacing="-0.03em"
            fontFamily="var(--font-secondary)"
          >
            —Cassey
          </Text>
          <RoundButton onClick={toggleModal}>
            <Text
              fontSize={16}
              lineHeight={22}
              color="var(--text-landing-secondary-white)"
              letterSpacing="0.01em"
              fontFamily="var(--font-secondary)"
            >
              Learn more
            </Text>
          </RoundButton>
        </ContentContainer>
        <ImageContainer width="60%" relative>
          <Image src="/cassey.png" layout="fill" objectFit="contain" />
        </ImageContainer>

        {/* Cassey Modal */}
        <CasseyModal modalOpen={modalOpen} onModalClose={onModalClose} />
      </Section>

      <Section bgColor="black">
        <ImageContainer relative>
          <Image
            src="/Section-6-man.png"
            priority
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
        <ImageContainer>
          <Image src="/bg_blur_6.svg" layout="fill" objectFit="cover" />
        </ImageContainer>
        <ContentContainer
          position="absolute"
          marginRight="5%"
          width={32}
          right="0"
        >
          <Text
            fontSize={48}
            lineHeight={56}
            color="var(--text-landing-white)"
            weight={700}
            letterSpacing="-0.04em"
            fontFamily="var(--font-secondary)"
          >
            Start making money from the influence you’ve cultivated
          </Text>
          <RoundButton onClick={openLink}>
            <Text
              fontSize={16}
              lineHeight={22}
              letterSpacing="0.01em"
              fontFamily="var(--font-secondary)"
              color="var(--text-landing-white)"
            >
              Sign up for free
            </Text>
          </RoundButton>
        </ContentContainer>
      </Section>
    </DesktopIndexContainer>
  );
}

export default DesktopIndex;
