declare module 'react-use-infinite-loader' {
  interface UseInfiniteLoaderOptions {
    loadMore: () => void;
    canLoadMore: boolean;
    startFromPage?: number;
    initialise?: boolean;
    rootMargin?: string;
    threshold?: number;
    debug?: boolean;
  }
  function useInfiniteLoader<T extends HTMLElement>(
    options: UseInfiniteLoaderOptions
  ): {
    loaderRef: React.MutableRefObject<T>;
    page: number;
    resetPage(): void;
  };
  export = useInfiniteLoader;
}
