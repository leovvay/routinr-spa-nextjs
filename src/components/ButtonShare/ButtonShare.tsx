import React, { memo, PropsWithChildren, useCallback, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
import Stack from '@mui/material/Stack';

import { getShareURL } from '@utils';
import { useSegment } from '@hooks';
import Image from '@components/Image';
import Popover from '@components/Popover';
import LinkTo from '@components/LinkTo';
import Touchable from '@components/Touchable';
import Text from '@components/Text';
import Button from '@components/Button/Button';

import { ButtonShareButton, ButtonShareContainer } from './ButtonShare.styled';

interface ButtonShareProps {
  title: string;
  type: 'user' | 'routine' | 'post';
  variant?: 'icon' | 'button';
  slug?: string;
  userId?: number;
  className?: string;
}

const anchorOrigin = {
  vertical: 'center' as const,
  horizontal: 'left' as const,
};
const transformOrigin = {
  vertical: 'center' as const,
  horizontal: 'right' as const,
};

function ButtonShare({
  title,
  type,
  slug,
  userId,
  variant,
  className,
  children,
}: PropsWithChildren<ButtonShareProps>): JSX.Element {
  const [openEmbed, setOpenEmbed] = useState(false);

  const { trackEmbedClick, trackShare } = useSegment();
  const { fbShareUrl, twitterShareUrl, linkedInShareUrl } = getShareURL(
    title,
    slug as string,
    type
  );
  const { enqueueSnackbar } = useSnackbar();

  const embedCode =
    '<div ' +
    'class="embed-plan-code" ' +
    'style="position: relative; ' +
    'width: 320px;' +
    ' height: 500px;' +
    ' margin: 0 auto; ' +
    'z-index: 9999;' +
    ' overflow-x: hidden; ' +
    'border: 1px solid #CCC; ' +
    'background-color: #FFF;"' +
    '><iframe ' +
    'src="' +
    `${process.env.NEXT_PUBLIC_HOST}/embed-widget?slug=${slug}&user_id=${userId}` +
    '" ' +
    'width="100%" ' +
    'height="100%" ' +
    'style="border: none;"></iframe></div>';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const anchor = useCallback<React.FC>(() => {
    if (children) return children;

    if (variant === 'icon')
      return <Image src="/users.svg" width={32} height={32} />;

    return (
      <ButtonShareButton>
        <Image src="/share.svg" width={24} height={20} />
        <Text>Share</Text>
      </ButtonShareButton>
    );
  }, [children, variant]);

  const handleOpenEmbed = useCallback(() => setOpenEmbed(true), []);
  const handleCloseEmbed = useCallback(() => setOpenEmbed(false), []);
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      trackEmbedClick();
      enqueueSnackbar('Copied!', {
        variant: 'success',
      });
    } catch (e) {
      console.error('%c e =', 'color: lightblue', e);
    }
  }, [embedCode, enqueueSnackbar, trackEmbedClick]);

  return (
    <Popover
      AnchorElement={anchor}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      className={className}
    >
      <ButtonShareContainer>
        <Touchable onClick={() => trackShare(type, 'facebook', title)}>
          <LinkTo href={fbShareUrl} target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </LinkTo>
        </Touchable>
        <Touchable onClick={() => trackShare(type, 'twitter', title)}>
          <LinkTo href={twitterShareUrl} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </LinkTo>
        </Touchable>
        <Touchable onClick={() => trackShare(type, 'linkedIn', title)}>
          <LinkTo href={linkedInShareUrl} target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </LinkTo>
        </Touchable>
        {type === 'routine' && (
          <>
            <Touchable onClick={handleOpenEmbed}>
              <FontAwesomeIcon icon={faShare} />
              <Text size="bodySmall">Embed</Text>
            </Touchable>
            <Dialog
              onClose={handleCloseEmbed}
              aria-labelledby="embed-code"
              open={openEmbed}
            >
              <DialogTitle>Embed routine</DialogTitle>
              <DialogContent dividers>
                <Stack spacing={1}>
                  <DialogContentText>
                    Copy and paste the following HTML into your website code.
                  </DialogContentText>
                  <Text as="pre">{embedCode}</Text>
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCopy}>Copy code</Button>
                <Button onClick={handleCloseEmbed} variant="outlined">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </ButtonShareContainer>
    </Popover>
  );
}

ButtonShare.defaultProps = {
  slug: undefined,
  userId: undefined,
  className: undefined,
  variant: 'icon',
};

export default memo(ButtonShare);
