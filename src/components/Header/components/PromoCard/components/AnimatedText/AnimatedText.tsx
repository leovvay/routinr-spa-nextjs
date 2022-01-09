import React, { useEffect, useState } from 'react';

import Fade from '@mui/material/Fade';

import LinkTo from '@components/LinkTo';

import { AnimatedTextText } from './AnimatedText.styled';

const categories = [
  'Fitness',
  'Wellness',
  'Food',
  'Business',
  'Beauty',
  'Yoga',
];

function AnimatedText(): JSX.Element {
  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const word = categories[currentIndex];

  useEffect(() => {
    let t2: NodeJS.Timeout;
    const t = setInterval(() => {
      setShow(false);

      t2 = setTimeout(() => {
        setCurrentIndex((index) =>
          index === categories.length - 1 ? 0 : index + 1
        );
        setShow(true);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(t);
      clearTimeout(t2);
    };
  });

  return (
    <Fade in={show}>
      <AnimatedTextText size="h1" weight={700} fontSize={60} as="h1">
        <LinkTo href={`/category/${word}`}>{word}</LinkTo>
      </AnimatedTextText>
    </Fade>
  );
}

export default AnimatedText;
