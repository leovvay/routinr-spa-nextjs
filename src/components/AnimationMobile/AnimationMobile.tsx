import React, { useState, useEffect } from 'react';

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

import AnimationCardFooter from '@components/AnimationCardFooter';
import Text from '@components/Text';
import { useWindowSize } from '@hooks';

import {
  AnimContainer,
  Container,
  AnimCard,
  AnimCardHeader,
  AnimCardContent,
  AnimImageContainer,
  AnimationCardImage,
} from './AnimationMobile.styled';

interface AvatarProps {
  height1: number;
  height2: number;
}

export default function Animation({
  height1,
  height2,
}: AvatarProps): JSX.Element {
  const screenSize = useWindowSize();

  const [totalVH, setTotalVH] = useState(100);
  const [topPercent, setTopPercent] = useState(0);

  const [vhUnit, setVHUnit] = useState(0);
  const [vwUnit, setVWUnit] = useState(0);

  useEffect(() => {
    setTotalVH(((5 * 900 + 374) * 100) / screenSize.height + 150);
    setTopPercent(((3 * 900 * 100) / screenSize.height + 50) / totalVH);

    // 1vh is ?
    setVHUnit(screenSize.height / 100);

    // 1vw is ?
    setVWUnit(screenSize.width / 100);
  }, [screenSize.height, screenSize.width, totalVH]);

  const slideScrollPercent = 50 / totalVH;

  // Food card animation
  const [radius, setRadius] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  // const handImgTop = screenSize.height < 890 ? 463 : 100 * vhUnit - 890 + 463;
  const handImgTop = height1 + 10 + height2 * 0.525;
  const firstPosH1 = 520 + 900 + handImgTop;
  const firstPosW1 = 1 * vwUnit;
  const firstScrollPos = (900 + 100) / vhUnit / totalVH;
  const secondPosH1 = 300 + 100 * vhUnit - 890 + 463;
  const secondPosW1 = 2 * vwUnit;
  const secondScrollPos = (900 + 900 + 200) / vhUnit / totalVH;
  const thirdScrollPos = (900 + 900 + 300) / vhUnit / totalVH;
  const fourthScrollPos = (3 * 900 + 400) / vhUnit / totalVH;
  const fifthScrollPos = (3 * 900 + 450) / vhUnit / totalVH;

  const cardStyles1 = {
    xRange: useTransform(
      scrollYProgress,
      [firstScrollPos, secondScrollPos, thirdScrollPos, fourthScrollPos],
      [firstPosW1, secondPosW1, secondPosW1, 0]
    ),
    yRange: useTransform(
      scrollYProgress,
      [firstScrollPos, secondScrollPos, thirdScrollPos, fourthScrollPos],
      [-firstPosH1, -secondPosH1, -secondPosH1, 0]
    ),
  };

  const scaleXRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 2.59]
  );
  const scaleYRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 2.78]
  );

  useEffect(
    () => scrollYProgress.onChange((v) => setRadius(v >= secondScrollPos)),
    [scrollYProgress, secondScrollPos]
  );

  // Meditation card animation
  const firstPosH2 = 343 + 900 + handImgTop;
  const firstPosW2 = 1 * vwUnit;
  const secondPosH2 = 750 + 100 * vhUnit - 890 + 463;
  const secondPosW2 = 1 * vwUnit;
  const cardStyles2 = {
    xRange: useTransform(
      scrollYProgress,
      [
        firstScrollPos,
        secondScrollPos,
        thirdScrollPos,
        fourthScrollPos,
        fifthScrollPos,
      ],
      [firstPosW2, secondPosW2, secondPosW2, 12, 50]
    ),
    yRange: useTransform(
      scrollYProgress,
      [firstScrollPos, secondScrollPos, thirdScrollPos, fourthScrollPos],
      [-firstPosH2, -secondPosH2, -secondPosH2, 100]
    ),
  };

  // Fitness card animation
  const firstPosH3 = 606 + 900 + handImgTop;
  const firstPosW3 = 1 * vwUnit;
  const secondPosH3 = 750 + 100 * vhUnit - 890 + 373;
  const secondPosW3 = 1 * vwUnit;
  const cardStyles3 = {
    xRange: useTransform(
      scrollYProgress,
      [
        firstScrollPos,
        secondScrollPos,
        thirdScrollPos,
        fourthScrollPos,
        fifthScrollPos,
      ],
      [firstPosW3, secondPosW3, secondPosW3, 18, 22]
    ),
    yRange: useTransform(
      scrollYProgress,
      [firstScrollPos, secondScrollPos, thirdScrollPos, fourthScrollPos],
      [-firstPosH3, -secondPosH3, -secondPosH3, 100]
    ),
  };

  const headerYRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [0, -25]
  );
  const headerXRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [0, -30]
  );
  const headerXScaleRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 1 / 2.59]
  );
  const headerYScaleRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 1 / 2.78]
  );
  const headerOpacityRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 0]
  );
  const contentXRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [0, -17]
  );
  const contentYRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [0, -30]
  );
  const contentScaleXRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 2.1]
  );
  const contentScaleYRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [1, 1.4]
  );
  const footerOpacityRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [0, 1]
  );
  const footerYRange = useTransform(
    scrollYProgress,
    [firstScrollPos, secondScrollPos],
    [0, -22]
  );

  const containerXRange = useTransform(
    scrollYProgress,
    [topPercent, topPercent + slideScrollPercent],
    [0, -405]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(containerXRange, physics);

  const [isHidden, setIsHidden] = useState(false);
  useEffect(
    () => scrollYProgress.onChange((v) => setIsHidden(v >= fourthScrollPos)),
    [scrollYProgress, fourthScrollPos]
  );
  return (
    <AnimContainer isHidden={isHidden} top={handImgTop} height={height2 * 0.28}>
      <motion.div
        style={{
          x: spring,
        }}
      >
        <Container>
          <AnimCard
            top={0}
            left={0}
            background="#eef6ff"
            style={{
              x: cardStyles1.xRange,
              y: cardStyles1.yRange,
              scaleX: scaleXRange,
              scaleY: scaleYRange,
            }}
          >
            <AnimCardHeader
              style={{
                y: headerYRange,
                x: headerXRange,
                scaleX: headerXScaleRange,
                scaleY: headerYScaleRange,
                opacity: headerOpacityRange,
              }}
            >
              <Text
                fontSize={10}
                lineHeight={15}
                letterSpacing="0.02em"
                weight={500}
                fontFamily="var(--font-secondary)"
              >
                Food
              </Text>
              <Text
                fontSize={10}
                lineHeight={15}
                letterSpacing="0.02em"
                weight={500}
                fontFamily="var(--font-secondary)"
              >
                6 - 7 am
              </Text>
            </AnimCardHeader>
            <AnimCardContent>
              <AnimImageContainer
                style={{
                  x: contentXRange,
                  y: contentYRange,
                  scaleX: contentScaleXRange,
                  scaleY: contentScaleYRange,
                }}
              >
                <AnimationCardImage
                  isTopRadius={radius}
                  src="/card-food.png"
                  layout="fill"
                  objectFit="cover"
                />
              </AnimImageContainer>
            </AnimCardContent>
            <AnimationCardFooter
              clockIcon="/clock2.svg"
              zoomIcon="/Shape2.svg"
              color="#011C37"
              titleText="Food"
              timeText="15 min"
              style={{
                opacity: footerOpacityRange,
                y: footerYRange,
              }}
            />
          </AnimCard>
          <AnimCard
            top={0}
            left={0}
            background="#0F090B"
            style={{
              x: cardStyles2.xRange,
              y: cardStyles2.yRange,
              scaleX: scaleXRange,
              scaleY: scaleYRange,
            }}
          >
            <AnimCardHeader
              style={{
                x: headerXRange,
                y: headerYRange,
                scaleX: headerXScaleRange,
                scaleY: headerYScaleRange,
                opacity: headerOpacityRange,
              }}
            >
              <Text
                fontSize={10}
                lineHeight={15}
                letterSpacing="0.02em"
                weight={500}
                fontFamily="var(--font-secondary)"
                color="#FEA54A"
              >
                Meditation
              </Text>
              <Text
                fontSize={10}
                lineHeight={15}
                letterSpacing="0.02em"
                weight={500}
                fontFamily="var(--font-secondary)"
                color="#FEA54A"
              >
                8 - 9 am
              </Text>
            </AnimCardHeader>
            <AnimCardContent>
              <AnimImageContainer
                style={{
                  x: contentXRange,
                  y: contentYRange,
                  scaleX: contentScaleXRange,
                  scaleY: contentScaleYRange,
                }}
              >
                <AnimationCardImage
                  isTopRadius={radius}
                  src="/card_meditation.png"
                  layout="fill"
                  objectFit="cover"
                />
              </AnimImageContainer>
            </AnimCardContent>
            <AnimationCardFooter
              clockIcon="/clock.svg"
              zoomIcon="/Shape.svg"
              color="#FEA54A"
              titleText="Meditation"
              timeText="45 min"
              style={{
                opacity: footerOpacityRange,
                y: footerYRange,
              }}
            />
          </AnimCard>
          <AnimCard
            top={0}
            left={0}
            background="#010006"
            style={{
              x: cardStyles3.xRange,
              y: cardStyles3.yRange,
              scaleX: scaleXRange,
              scaleY: scaleYRange,
            }}
          >
            <AnimCardHeader
              style={{
                y: headerYRange,
                x: headerXRange,
                scaleX: headerXScaleRange,
                scaleY: headerYScaleRange,
                opacity: headerOpacityRange,
              }}
            >
              <Text
                fontSize={10}
                lineHeight={15}
                letterSpacing="0.02em"
                weight={500}
                fontFamily="var(--font-secondary)"
                color="#62C6FF"
              >
                Fitness
              </Text>
              <Text
                fontSize={10}
                lineHeight={15}
                letterSpacing="0.02em"
                weight={500}
                fontFamily="var(--font-secondary)"
                color="#62C6FF"
              >
                5 - 6 am
              </Text>
            </AnimCardHeader>
            <AnimCardContent>
              <AnimImageContainer
                style={{
                  x: contentXRange,
                  y: contentYRange,
                  scaleX: contentScaleXRange,
                  scaleY: contentScaleYRange,
                }}
              >
                <AnimationCardImage
                  isTopRadius={radius}
                  src="/card-fitness.png"
                  layout="fill"
                  objectFit="cover"
                />
              </AnimImageContainer>
            </AnimCardContent>
            <AnimationCardFooter
              clockIcon="/clock1.svg"
              zoomIcon="/Shape1.svg"
              color="#62C6FF"
              titleText="Fitness"
              timeText="1 hr"
              style={{
                opacity: footerOpacityRange,
                y: footerYRange,
              }}
            />
          </AnimCard>
        </Container>
      </motion.div>
    </AnimContainer>
  );
}

Animation.defaultProps = {};
