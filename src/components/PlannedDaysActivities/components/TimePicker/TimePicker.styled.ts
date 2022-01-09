import styled from 'styled-components';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 10px 15px rgb(0 31 80 / 17%);
  padding: 10px 15px;
  z-index: 50;
`;

export const TimePickerRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 100%;
`;

export const TimePickerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TimePickerArrow = styled(ArrowBackIosRoundedIcon)`
  transform: rotate(90deg);
  color: var(--grey);

  &:hover {
    color: inherit;
  }
`;

export const TimePickerArrowDown = styled(TimePickerArrow)`
  transform: rotate(270deg);
`;
