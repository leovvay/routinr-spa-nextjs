import { Membership } from '@store/services/membership/membership.interface';

import currencyFormat from './currencyFormat';

export default function getMembershipPriceText(
  membership: Pick<Membership, 'price' | 'recurrence'>
) {
  return `${currencyFormat(membership.price)} ${
    membership.recurrence === 'month' ? 'per month' : 'one-off charge'
  }`;
}
