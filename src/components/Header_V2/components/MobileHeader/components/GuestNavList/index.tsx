import React from 'react';

import LinkTo from '@components/LinkTo';
import RoundButton from '@components/RoundButton';
import Text from '@components/Text';
import Image from '@components/Image';

import NavListItem from '../NavListItem';

export default function GuestNavList(): JSX.Element {
  return (
    <>
      <NavListItem>
        <RoundButton
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://apps.apple.com/au/app/routinr/id1459345510',
              '_blank'
            );
          }}
        >
          <Text
            fontFamily="var(--font-secondary)"
            fontSize={16}
            lineHeight={22}
            letterSpacing="0.01em"
            color="var(--text-landing-white)"
          >
            App Store
          </Text>
          <Image src="/ic_appstore.svg" width={24} height={24} />
        </RoundButton>
      </NavListItem>
      <NavListItem>
        <RoundButton
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://play.google.com/store/apps/details?id=org.routinr.newapp',
              '_blank'
            );
          }}
        >
          <Text
            fontFamily="var(--font-secondary)"
            fontSize={16}
            lineHeight={22}
            letterSpacing="0.01em"
            color="var(--text-landing-white)"
          >
            Google Play
          </Text>
          <Image src="/ic_googlestore.svg" width={24} height={24} />
        </RoundButton>
      </NavListItem>
      <NavListItem>
        <LinkTo href="/login">
          <Text
            fontFamily="var(--font-secondary)"
            fontSize={16}
            lineHeight={22}
            letterSpacing="0.01em"
            color="var(--text-landing-white)"
            padding="9px 24px"
          >
            Log in
          </Text>
        </LinkTo>
      </NavListItem>
      <NavListItem>
        <LinkTo href="/register">
          <Text
            fontFamily="var(--font-secondary)"
            fontSize={16}
            lineHeight={22}
            letterSpacing="0.01em"
            color="var(--text-landing-white)"
            padding="9px 24px"
          >
            Sign up
          </Text>
        </LinkTo>
      </NavListItem>
    </>
  );
}
