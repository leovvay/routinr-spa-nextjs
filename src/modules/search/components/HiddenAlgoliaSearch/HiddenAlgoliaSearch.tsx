import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';

function HiddenAlgoliaSearch({ refine }: SearchBoxProvided): JSX.Element {
  const router = useRouter();
  const query = new URLSearchParams(router.query as Record<string, string>);
  const searchQuery = query.get('searchQuery') || '';

  useEffect(() => {
    refine(searchQuery);
  }, [refine, router.query, searchQuery]);

  return <div />;
}

export default connectSearchBox(HiddenAlgoliaSearch);
