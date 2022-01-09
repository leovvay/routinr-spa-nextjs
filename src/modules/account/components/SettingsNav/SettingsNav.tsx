import React, { PropsWithChildren, ReactNode } from 'react';

import SideNav from '@components/SideNav';

const linkOptions = [
  {
    path: '/account',
    label: 'Account settings',
  },
  {
    path: '/account/notifications',
    label: 'Notifications',
  },
  {
    path: '/account/get-paid',
    label: 'Get paid',
  },
  {
    path: '/account/payment-methods',
    label: 'Payment methods',
  },
  {
    path: '/account/transactions',
    label: 'Transaction history',
  },
];

function SettingsNav({ children }: PropsWithChildren<ReactNode>): JSX.Element {
  return <SideNav links={linkOptions}>{children}</SideNav>;
}

export default SettingsNav;
