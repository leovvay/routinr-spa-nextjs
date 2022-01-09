import React, { useState } from 'react';
import Head from 'next/head';
import TimezoneSelect from 'react-timezone-select';

import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';

import { useUser } from '@hooks';
import { authGuardSSR } from '@utils';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Button from '@components/Button';
import Text, { TextLight } from '@components/Text';
import { useUpdateMyTimezoneMutation } from '@store/services/users';

import SettingsNav from '@modules/account/components/SettingsNav';
import { AccountSettingsContainer } from '@modules/account/index.styled';

function Notifications() {
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser } = useUser();
  const [updateTimezone] = useUpdateMyTimezoneMutation();

  const [timezone, setTimezone] = useState(
    currentUser?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const showApplyButton = currentUser?.timezone !== timezone;

  const handleUpdate = async () => {
    await updateTimezone(timezone);
    enqueueSnackbar('Timezone was changed!', {
      variant: 'success',
    });
  };

  return (
    <PageWrapper>
      <Head>
        <title>Notification settings | Routinr</title>
        <meta
          property="og:title"
          content="Notification settings | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <SettingsNav>
          <AccountSettingsContainer>
            <Stack spacing={2}>
              <Text size="h5" weight={600}>
                Personal calendar integration
              </Text>
              <TextLight weight={600}>Ensure the right timezone.</TextLight>
              <TimezoneSelect
                value={timezone}
                onChange={(chosenTimezone) => setTimezone(chosenTimezone.value)}
              />
            </Stack>
            {showApplyButton && (
              <div>
                <Button onClick={handleUpdate}>Save changes</Button>
              </div>
            )}
          </AccountSettingsContainer>
        </SettingsNav>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Notifications;

export const getServerSideProps = authGuardSSR;
