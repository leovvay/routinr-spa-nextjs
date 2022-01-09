import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useSnackbar } from 'notistack';

import { Routine } from '@store/services/routines';
import Text from '@components/Text';
import { LinkToLegacyApp } from '@components/LinkTo';
import Touchable from '@components/Touchable';
import { getShareURL } from '@utils';

import {
  CompleteModalActions,
  CompleteModalCopyButton,
  CompleteModalCopyContainer,
  CompleteModalDialog,
  CompleteModalFBShare,
  CompleteModalGuideLink,
  CompleteModalHelpText,
  CompleteModalINShare,
  CompleteModalShareContainer,
  CompleteModalShareInput,
  CompleteModalTitle,
  CompleteModalTwitterShare,
} from './CompleteModal.styled';

interface CompleteModalProps {
  routine: Routine;
  open: boolean;
  onClose(): void;
}

function CompleteModal({
  open,
  onClose,
  routine,
}: CompleteModalProps): JSX.Element {
  const { fbShareUrl, twitterShareUrl, linkedInShareUrl } = getShareURL(
    routine.title,
    routine.slug,
    'routine'
  );
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const routineLink = `${
    process.env.NEXT_PUBLIC_HOST
  }/routines/${routine.slug.toLowerCase()}`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(routineLink);
      enqueueSnackbar('Copied!', {
        variant: 'success',
      });
    } catch (e) {
      console.error('%c e =', 'color: lightblue', e);
    }
  }, [enqueueSnackbar, routineLink]);

  return (
    <CompleteModalDialog
      onClose={onClose}
      aria-labelledby="complete-routine-modal"
      open={open}
    >
      <CompleteModalTitle size="h3">
        Boom! Let people know about your amazing new routine!
      </CompleteModalTitle>
      <CompleteModalShareContainer>
        <CompleteModalFBShare href={fbShareUrl} target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </CompleteModalFBShare>
        <CompleteModalTwitterShare href={twitterShareUrl} target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </CompleteModalTwitterShare>
        <CompleteModalINShare href={linkedInShareUrl} target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </CompleteModalINShare>
      </CompleteModalShareContainer>
      <CompleteModalCopyContainer>
        <CompleteModalShareInput value={routineLink} />
        <CompleteModalCopyButton onClick={handleCopy}>
          Copy
        </CompleteModalCopyButton>
      </CompleteModalCopyContainer>
      <CompleteModalHelpText>
        <Text size="bodyLead">Need help promoting?</Text>
        <CompleteModalGuideLink
          href="https://blog.routinr.org/promotion-guide"
          target="_blank"
        >
          Download our step by step promotion guide
        </CompleteModalGuideLink>
      </CompleteModalHelpText>
      <CompleteModalActions>
        <LinkToLegacyApp href="/dashboard">Back to dashboard</LinkToLegacyApp>
        <Touchable onClick={() => router.reload()}>
          Build another routine
        </Touchable>
      </CompleteModalActions>
    </CompleteModalDialog>
  );
}

export default CompleteModal;
