import React, { useEffect, useMemo } from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import { useRouter } from 'next/router';

function HiddenAlgoliaContentTypeRefinement({
  refine,
}: RefinementListProvided): JSX.Element {
  const router = useRouter();
  const query = new URLSearchParams(router.query as Record<string, string>);
  const contentType = query.get('contentType');
  const contentTypeRefinement = useMemo(() => {
    if (contentType === 'free') {
      return ['true'];
    }
    if (contentType === 'paid') {
      return ['false'];
    }
    return [];
  }, [contentType]);

  useEffect(() => {
    refine(contentTypeRefinement);
  }, [contentTypeRefinement, refine]);

  return <div />;
}

export default connectRefinementList(HiddenAlgoliaContentTypeRefinement);
