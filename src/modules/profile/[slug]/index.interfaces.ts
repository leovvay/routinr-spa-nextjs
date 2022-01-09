import { InfiniteData } from 'react-query/types/core/types';
import { MutableRefObject } from 'react';

export interface InfluencersContentPaginated<T> {
  data?: InfiniteData<T>;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  loaderRef: MutableRefObject<HTMLDivElement>;
}
