import React, { useState } from 'react';
import { Index } from 'react-instantsearch-dom';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import FiltersMobile from '@components/PageFilters/FiltersMobile';

import HiddenAlgoliaSort from '@modules/search/components/HiddenAlgoliaSort';
import HiddenAlgoliaContentTypeRefinement from '@modules/search/components/HiddenAlgoliaContentTypeRefinement';
import HiddenAlgoliaCategoriesRefinement from '@modules/search/components/HiddenAlgoliaCategoriesRefinement';
import RoutinesList from '@modules/search/components/RoutinesList';

import InfluencersList from '../InfluencersList';

import { SearchMobileTabPanel } from './SearchMobile.styled';

const INFLUENCERS_INDEX = process.env
  .NEXT_PUBLIC_ALGOLIA_INFLUENCERS_INDEX as string;
const ROUTINES_INDEX = process.env.NEXT_PUBLIC_ALGOLIA_ROUTINES_INDEX as string;

function SearchMobile(): JSX.Element {
  const [step, setStep] = useState('2');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setStep(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={step}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          variant="fullWidth"
        >
          <Tab label="Influencers" value="1" />
          <Tab label="Routines" value="2" />
        </TabList>
        <Index indexName={INFLUENCERS_INDEX}>
          <SearchMobileTabPanel value="1">
            <InfluencersList />
          </SearchMobileTabPanel>
        </Index>
        <Index indexName={ROUTINES_INDEX}>
          <SearchMobileTabPanel value="2">
            <HiddenAlgoliaSort
              defaultRefinement={ROUTINES_INDEX}
              items={[
                { value: ROUTINES_INDEX, label: 'Recent' },
                { value: `${ROUTINES_INDEX}_popular`, label: 'Popular' },
                { value: `${ROUTINES_INDEX}_trending`, label: 'Trending' },
              ]}
            />
            <HiddenAlgoliaContentTypeRefinement attribute="isFree" />
            <HiddenAlgoliaCategoriesRefinement attribute="categories" />
            <RoutinesList />
          </SearchMobileTabPanel>
        </Index>
      </TabContext>
      <FiltersMobile />
    </Box>
  );
}

export default SearchMobile;
