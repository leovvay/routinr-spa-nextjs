import React from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';

import { useGetMyLeadersQuery } from '@store/services/users';
import Text from '@components/Text';

import {
  FeedFilterContainer,
  FeedFilterIcon,
  FeedFilterListItemButton,
  FeedFilterPopover,
} from './FeedFilter.styled';

interface FeedFilterProps {
  value: number | undefined;
  onChange(creatorId: number | undefined): void;
}

function FeedFilter({ onChange, value }: FeedFilterProps): JSX.Element {
  const { data: leaders } = useGetMyLeadersQuery();

  return (
    <FeedFilterPopover
      AnchorElement={() => (
        <FeedFilterContainer>
          <FilterListIcon fontSize="large" />
          <Text>Filter</Text>
        </FeedFilterContainer>
      )}
    >
      <List>
        <ListItem disablePadding>
          <FeedFilterListItemButton
            onClick={() => onChange(undefined)}
            checked={value === undefined}
          >
            <ListItemText primary="All" />
            <FeedFilterIcon>
              <DoneIcon color="inherit" />
            </FeedFilterIcon>
          </FeedFilterListItemButton>
        </ListItem>
        {leaders?.map((leader) => (
          <ListItem disablePadding>
            <FeedFilterListItemButton
              checked={Number(value) === Number(leader.id)}
              onClick={() => onChange(Number(leader.id))}
            >
              <ListItemText primary={leader.displayName} />
              <FeedFilterIcon>
                <DoneIcon color="inherit" />
              </FeedFilterIcon>
            </FeedFilterListItemButton>
          </ListItem>
        ))}
      </List>
    </FeedFilterPopover>
  );
}

export default FeedFilter;
