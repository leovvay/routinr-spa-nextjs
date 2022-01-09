import styled, { css } from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import SearchIcon from '@mui/icons-material/SearchRounded';
import ClearIcon from '@mui/icons-material/ClearRounded';

import Touchable from '@components/Touchable';

export const UploaderImageContainer = styled.div`
  border: 1px solid var(--primary-color);
  position: relative;
  min-height: 200px;
  min-width: 200px;
`;

export const UploaderImageActions = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  //flex-direction: row-reverse;
`;

export const UploaderImageCheckbox = styled(Checkbox)`
  position: absolute;
  bottom: 0;
  right: 0;

  color: var(--primary-color);

  &.MuiCheckbox-colorPrimary.Mui-checked {
    color: var(--primary-color);
  }
`;

export const ImagePreview = styled(Dialog)`
  & .MuiDialog-paper {
    width: 100%;
    height: 100%;
  }
`;

const iconCss = css`
  padding: 2px;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--white);
`;

export const ImagePreviewIcon = styled(SearchIcon)`
  ${iconCss}
`;

export const ImageRemoveIcon = styled(ClearIcon)`
  ${iconCss}
`;

export const CloseIconButton = styled(Touchable)`
  margin-left: auto;
`;
