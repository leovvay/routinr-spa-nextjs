// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSObject } from '@emotion/serialize';

const colourStyles = {
  container(styles: CSSObject) {
    return {
      ...styles,
      minWidth: '100px',
    };
  },
  control: (
    styles: CSSObject,
    { selectProps: { error } }: { selectProps: { error: boolean } }
  ) => {
    const updatedStyles = { ...styles };

    if (error) updatedStyles.borderColor = 'var(--red)';

    return updatedStyles;
  },
  menuList: (styles: CSSObject) => ({
    ...styles,
    maxHeight: '200px',
  }),
  multiValue: (styles: CSSObject) => ({
    ...styles,
    backgroundColor: 'var(--primary-color)',
    borderRadius: '4px',
    fontWeight: 600,
  }),
  multiValueLabel: (styles: CSSObject) => ({
    ...styles,
    color: 'var(--white)',
  }),
  multiValueRemove: (styles: CSSObject) => ({
    ...styles,
    color: 'var(--white)',
    ':hover': {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--white)',
    },
  }),
};

export default colourStyles;
