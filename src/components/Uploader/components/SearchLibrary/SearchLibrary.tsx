import React, { memo, useEffect, useState } from 'react';
import useInfiniteLoader from 'react-use-infinite-loader';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputAdornment from '@mui/material/InputAdornment';
import { skipToken } from '@reduxjs/toolkit/query/react';

import Image from '@components/Image';
import SearchInput from '@components/SearchInput';
import {
  useGetMyGalleryQuery,
  useGetRandomUnsplashQuery,
  useGetUnsplashQuery,
} from '@store/services/common/common';
import { useInputState, useDebouncedState } from '@hooks';
import Media from '@components/Uploader/components/SearchLibrary/components/Media/Media';
import { UnsplashStock } from '@store/services/types/unsplash.interface';
import { UploadImage } from '@components/Uploader';
import { PaginatedGalleryModel } from '@store/services/common/common.interface';
import { Gallery } from '@store/services/types/media.interface';

import TabPanel from './components/TabPanel/TabPanel';

import {
  SearchLibraryDrawer,
  SearchLibraryHeader,
  SearchLibraryTabs,
} from './SearchLibrary.styled';

interface SearchLibraryProps {
  isOpen: boolean;
  onClose(): void;
  images: UploadImage[];
  handleUnsplash(image: UnsplashStock): void;
  handleGallery(image: Gallery): void;
  isLimitExceeded?: boolean;
  allowedFormats?: string[];
}

const initialGalleryToRender: PaginatedGalleryModel = {
  edges: [],
  pageInfo: {
    endCursor: '',
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: '',
    totalCount: 0,
  },
};

function SearchLibrary({
  isOpen,
  onClose,
  images,
  handleUnsplash,
  handleGallery,
  isLimitExceeded,
  allowedFormats = [],
}: SearchLibraryProps): JSX.Element {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [galleryAfterCursor, setGalleryAfterCursor] = useState<string>();
  const [keyword, setKeyword] = useInputState('');

  const [galleryToRender, setGalleryToRender] = useState<PaginatedGalleryModel>(
    initialGalleryToRender
  );
  const [unsplashToRender, setUnsplashToRender] = useState<UnsplashStock[]>([]);

  const debouncedKeyword = useDebouncedState(keyword, 500);

  const { data: randomImages, refetch } = useGetRandomUnsplashQuery(7);
  const { data: myGallery } = useGetMyGalleryQuery({
    first: 7,
    after: galleryAfterCursor,
    allowedFormats,
    filename: debouncedKeyword,
  });
  const { data: { results, total_pages: totalPages } = {}, isFetching } =
    useGetUnsplashQuery(
      debouncedKeyword.length
        ? { keyword: debouncedKeyword, perPage: 7, page }
        : skipToken
    );

  const handleTabChange = (event: any, newValue: number) => {
    setTab(newValue);
  };

  const isRandomMode = keyword === '';

  const loadMoreUnsplash = () => {
    if (isRandomMode) refetch();
    else setPage((prevPage) => prevPage + 1);
  };

  const loadMoreGallery = () => {
    setGalleryAfterCursor(myGallery?.pageInfo.endCursor);
  };

  const canLoadMoreUnsplash =
    isRandomMode || (!isFetching && page < (totalPages || 0));

  const { loaderRef: unsplashLoaderRef } = useInfiniteLoader<HTMLDivElement>({
    loadMore: loadMoreUnsplash,
    canLoadMore: canLoadMoreUnsplash,
  });

  const { loaderRef: galleryLoaderRef } = useInfiniteLoader<HTMLDivElement>({
    loadMore: loadMoreGallery,
    canLoadMore: Boolean(myGallery?.pageInfo.hasNextPage),
  });

  useEffect(() => {
    if (results) setUnsplashToRender((prevState) => prevState.concat(results));
  }, [results]);

  useEffect(() => {
    setPage(1);
  }, [debouncedKeyword]);

  useEffect(() => {
    if (randomImages)
      setUnsplashToRender((prevState) => prevState.concat(randomImages));
  }, [randomImages]);

  useEffect(() => {
    if (myGallery)
      setGalleryToRender((prevState) => ({
        edges: prevState.edges.concat(myGallery.edges),
        pageInfo: myGallery.pageInfo,
      }));
  }, [myGallery]);

  useEffect(() => {
    setUnsplashToRender([]);
    setGalleryToRender(initialGalleryToRender);
  }, [keyword]);

  return (
    <SearchLibraryDrawer anchor="left" open={isOpen} onClose={onClose}>
      <SearchLibraryHeader>
        <SearchInput
          placeholder="Search term (eg. Food)"
          value={keyword}
          onChange={setKeyword}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <Image
                src="/search-icon-grey.svg"
                alt="search"
                width={20}
                height={20}
              />
            </InputAdornment>
          }
        />
      </SearchLibraryHeader>
      <SearchLibraryTabs position="static">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label="simple tabs example"
        >
          <Tab label="Stock photos" />
          <Tab label="My library" />
        </Tabs>
      </SearchLibraryTabs>
      <TabPanel value={tab} index={0}>
        {unsplashToRender.map((image) => (
          <Media
            key={image.id}
            media={image}
            unsplash
            isUsed={images.some(
              (usedImage) => usedImage.info.url === image.urls.full
            )}
            onAction={() => handleUnsplash(image)}
            disabled={isLimitExceeded}
          />
        ))}
        <div ref={unsplashLoaderRef} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {galleryToRender.edges.map(({ node }) => (
          <Media
            key={node.id}
            media={node}
            isUsed={images.some((usedImage) => usedImage.info.url === node.url)}
            onAction={() => handleGallery(node)}
            disabled={isLimitExceeded}
          />
        ))}
        <div ref={galleryLoaderRef} />
      </TabPanel>
    </SearchLibraryDrawer>
  );
}

SearchLibrary.defaultProps = {
  isLimitExceeded: false,
  allowedFormats: ['image', 'video', 'audio'],
};

export default memo(SearchLibrary);
