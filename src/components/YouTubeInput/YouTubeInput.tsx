import React, { memo } from 'react';

import { OutlinedTextFieldProps } from '@mui/material/TextField';

import TextField from '@components/TextField';

import { YouTubeInputPreview } from './YouTubeInput.styled';

type YouTubeInputProps = Omit<
  OutlinedTextFieldProps,
  'placeholder' | 'variant' | 'fullWidth'
>;

const YouTubeInput = React.forwardRef(
  (props: YouTubeInputProps, ref): JSX.Element => {
    const { error, value } = props;
    return (
      <>
        <TextField
          {...props}
          inputRef={ref}
          placeholder="https://www.youtube.com/watch?v="
          variant="outlined"
          fullWidth
        />
        {!error && value && <YouTubeInputPreview url={value as string} />}
      </>
    );
  }
);

YouTubeInput.defaultProps = {
  className: undefined,
};

export default memo(YouTubeInput);
