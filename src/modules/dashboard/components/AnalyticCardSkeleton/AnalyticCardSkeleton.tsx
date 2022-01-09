import React from 'react';

import { Box, Skeleton } from '@mui/material';

function AnalyticCardSkeleton(): JSX.Element {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton variant="rectangular" height={118} />
      <Skeleton />
      <Skeleton width="60%" />
      <Skeleton width="60%" />
      <Skeleton />
    </Box>
  );
}

export default AnalyticCardSkeleton;
