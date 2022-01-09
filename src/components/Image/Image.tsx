import React from 'react';
import { ImageProps, ImageLoaderProps } from 'next/image';

import styled from 'styled-components';

import { ImageWithDefault } from './Image.styled';

const CLOUDINARY_WITH_RESIZE = 9;
const CLOUDINARY_WITHOUT_RESIZE = 8;
const UNSPLASH_WIDTH_REGEXP = /w=\d+/;

const myLoader = ({ src, width }: ImageLoaderProps) => {
  if (src.startsWith('https://res') || src.startsWith('http://res')) {
    const srcArr = src.split('/');
    const resizeConfig = `w_${width},c_scale`;

    srcArr[0] = 'https:';
    if (srcArr.length === CLOUDINARY_WITH_RESIZE) {
      srcArr[6] = resizeConfig;
    } else if (srcArr.length === CLOUDINARY_WITHOUT_RESIZE) {
      srcArr.splice(6, 0, resizeConfig);
    } else {
      return src;
    }

    return srcArr.join('/');
  }

  if (src.startsWith('https://images.unsplash.com/')) {
    const unsplashWidth = `w=${width}`;
    const widthExists = UNSPLASH_WIDTH_REGEXP.test(src);

    if (widthExists) return src.replace(/w=\d+/, unsplashWidth);
    return `${src}&${unsplashWidth}`;
  }

  if (width) return `${src}?w=${width}`;
  return src;
};

function Image(props: ImageProps): JSX.Element {
  return <ImageWithDefault {...props} loader={myLoader} />;
}

export default styled(Image)``;
