import React from 'react';
import Head from 'next/head';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

import algoliasearch from 'algoliasearch/lite';
import NoSsr from '@mui/material/NoSsr';

import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import { useIsMobileVersion } from '@hooks';

import HiddenAlgoliaSearch from '@modules/search/components/HiddenAlgoliaSearch';
import SearchDesktop from '@modules/search/components/SearchDesktop';
import SearchMobile from '@modules/search/components/SearchMobile';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string
);

const INFLUENCERS_INDEX = process.env
  .NEXT_PUBLIC_ALGOLIA_INFLUENCERS_INDEX as string;

function SearchPage(): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <PageWrapper>
      <Head>
        <title>Search | Routinr</title>
        <meta property="og:title" content="Search | Routinr" key="title" />
      </Head>
      <Header />
      <InstantSearch indexName={INFLUENCERS_INDEX} searchClient={searchClient}>
        <Configure hitsPerPage={12} />
        <HiddenAlgoliaSearch />
        <PageContent>
          <NoSsr>{isMobile ? <SearchMobile /> : <SearchDesktop />}</NoSsr>
        </PageContent>
      </InstantSearch>
      <Footer />
    </PageWrapper>
  );
}

export default SearchPage;
