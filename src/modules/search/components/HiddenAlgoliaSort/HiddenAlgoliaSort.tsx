import React, { useEffect } from 'react';
import { connectSortBy } from 'react-instantsearch-dom';
import { useRouter } from 'next/router';

const ROUTINES_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_ROUTINES_INDEX as string;

interface HiddenAlgoliaSortProps {
  refine(refinment: string): void;
}

function HiddenAlgoliaSort({ refine }: HiddenAlgoliaSortProps): JSX.Element {
  const router = useRouter();
  const query = new URLSearchParams(router.query as Record<string, string>);
  const sort = query.get('sort') || 'recent';
  const sortIndex = `${ROUTINES_INDEX}_${sort}`;

  useEffect(() => {
    refine(sortIndex);
  }, [refine, sortIndex]);
  return <div />;
}

export default connectSortBy(HiddenAlgoliaSort);
