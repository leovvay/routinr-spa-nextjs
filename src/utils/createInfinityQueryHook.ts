import { useCallback, useEffect, useMemo, useState } from 'react';

import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/query';

import {
  ModelEdge,
  PaginationArgs,
} from '@store/services/types/pagination.interface';

export interface InfinityQueryOptions extends PaginationArgs {
  skipOption?: { skip: boolean };
}

export default function createInfinityQueryHook<
  FindOptions extends InfinityQueryOptions,
  T
>(useQueryHook: UseQuery<QueryDefinition<FindOptions, any, any, any>>) {
  return (
    options: FindOptions,
    dependecies: string[] = []
  ): ReturnType<typeof useQueryHook> & {
    data: ModelEdge<T>[];
    hasNextPage: boolean;
    totalCount: number;
    fetchNext: () => void;
  } => {
    const [after, setAfter] = useState<string | undefined>();
    const [data, setData] = useState([]);

    const filterOptions = useMemo<FindOptions>(
      () => ({
        ...options,
        after,
      }),
      [after, options]
    );
    const {
      data: {
        edges = undefined,
        pageInfo: {
          endCursor = undefined,
          hasNextPage = false,
          totalCount = 0,
        } = {},
      } = {},
      ...rest
    } = useQueryHook(filterOptions, options.skipOption);

    const fetchNext = useCallback(() => {
      setAfter(endCursor);
    }, [endCursor]);

    useEffect(() => {
      setData([]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependecies);

    useEffect(() => {
      if (edges) setData((prev) => prev.concat(edges));
    }, [edges]);

    return {
      data,
      hasNextPage,
      fetchNext,
      totalCount,
      ...rest,
    };
  };
}
