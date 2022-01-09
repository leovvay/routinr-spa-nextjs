import React, { useState } from 'react';

import Collapse from '@mui/material/Collapse';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '@components/Text';

import {
  DescriptionSectionButton,
  DescriptionSectionButtonContainer,
  DescriptionSectionContainer,
  DescriptionSectionGradient,
  DescriptionSectionTitle,
} from './DescriptionSection.styled';

interface DescriptionSectionProps {
  title: string;
  text: string;
  color?: string;
}

const defaultProps = {
  color: 'var(--white)',
};

type Props = DescriptionSectionProps & typeof defaultProps;

function DescriptionSection({ title, text, color }: Props): JSX.Element {
  const [checked, setChecked] = useState(false);

  const showButton = !checked && title.length > 100;

  return (
    <DescriptionSectionContainer>
      <DescriptionSectionTitle
        size="validationCaption"
        weight={700}
        $color={color}
      >
        {title}
      </DescriptionSectionTitle>
      <Collapse in={checked} collapsedSize={40}>
        <Text as="pre" size="bodySmallMedium">
          {text || 'No description'}
        </Text>
        {showButton && (
          <>
            <DescriptionSectionButtonContainer>
              <DescriptionSectionButton
                variant="outlined"
                shadow
                onClick={() => setChecked(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </DescriptionSectionButton>
            </DescriptionSectionButtonContainer>
            <DescriptionSectionGradient $color={color} />
          </>
        )}
      </Collapse>
    </DescriptionSectionContainer>
  );
}

DescriptionSection.defaultProps = defaultProps;

export default DescriptionSection;
