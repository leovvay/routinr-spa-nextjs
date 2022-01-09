import React, { memo } from 'react';

import TabPanelContainer from './TabPanel.styled';

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && children}
    </TabPanelContainer>
  );
}

export default memo(TabPanel);
