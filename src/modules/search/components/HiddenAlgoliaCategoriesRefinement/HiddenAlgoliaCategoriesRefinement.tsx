import React, { useEffect, useMemo } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import { useRouter } from 'next/router';

function HiddenAlgoliaCategoriesRefinement({
  refine,
}: RefinementListProvided): JSX.Element {
  const router = useRouter();
  const query = new URLSearchParams(router.query as Record<string, string>);
  const categories = query.get('categories') || '';
  const categoriesList = useMemo(
    () => (categories.length ? categories.split(',') : []),
    [categories]
  );

  useEffect(() => {
    refine(categoriesList);
  }, [categoriesList, refine]);

  return <div />;
}

export default connectRefinementList(HiddenAlgoliaCategoriesRefinement);
