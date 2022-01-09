import React from 'react';

import styled from 'styled-components';

import { Category } from '@store/services/categories';
import Image from '@components/Image';
import Text from '@components/Text';

import {
  CategoryImageContainer,
  CategoryItemContainer,
} from './CategoryItem.styled';

interface CategoryItemProps {
  category: Category;
  className?: string;
}

function CategoryItem({ category, className }: CategoryItemProps): JSX.Element {
  const href = `/${
    category.categoryPromoSettingsId ? 'influencers' : 'category'
  }/${category.title.toLocaleLowerCase()}`;

  return (
    <CategoryItemContainer href={href} className={className}>
      <CategoryImageContainer>
        <Image src={category.image.url} layout="fill" objectFit="cover" />
      </CategoryImageContainer>
      <Text weight={700}>{category.title}</Text>
    </CategoryItemContainer>
  );
}

CategoryItem.defaultProps = {
  className: undefined,
};

export default styled(CategoryItem)``;
