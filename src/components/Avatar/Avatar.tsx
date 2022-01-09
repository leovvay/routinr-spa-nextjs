import React from 'react';

import AvatarImage from './Avatar.styled';

interface AvatarProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Avatar({
  src,
  width,
  height,
  className,
}: AvatarProps): JSX.Element {
  return (
    <AvatarImage
      className={className}
      alt="avatar"
      src={src}
      width={width}
      height={height}
      objectFit="cover"
    />
  );
}

Avatar.defaultProps = {
  width: 48,
  height: 48,
  className: undefined,
};
