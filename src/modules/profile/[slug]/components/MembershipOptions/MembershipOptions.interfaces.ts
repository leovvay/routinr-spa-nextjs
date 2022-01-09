import { MembershipWithSubscribeInfo } from '@store/services/membership/membership.interface';
import { Influencer } from '@store/services/users';

export interface MembershipOptionsProps {
  open: boolean;
  onClose(): void;
  onBuy(membership: MembershipWithSubscribeInfo): void;
  memberships: MembershipWithSubscribeInfo[];
  influencer: Influencer;
}
