import { InfinityQueryOptions } from '@utils';
import { Paginated } from '@store/services/types/pagination.interface';
import { MembershipWithSubscribeInfo } from '@store/services/membership/membership.interface';
import { MediaUpload } from '@store/services/common/common.interface';

interface StripeAccount {
  accountType: 'custom' | 'express';
}

export interface User {
  id: number;
  email: string;
  displayName: string;
  description: string;
  avatar: string;
  slug: string;
  handle: string;
  routinesCount: number;
  membershipsCount: number;
  postsCount: number;
  unreadNotificationsCount: number;
  stripeCustomerId?: string;
  stripeAccountId?: number;
  admin: boolean;
  timezone: string;
  notifications: Notification[];
  followers: Follower[];
  stripeAccount?: StripeAccount;
  stripeAccountStatus: 'unapplied' | 'pending' | 'verified';
}
export type Socials = 'instagram' | 'facebook' | 'youtube' | 'twitter';
export interface Influencer extends User {
  background: string;
  memberships: MembershipWithSubscribeInfo[];

  socials?: Partial<Record<Socials, string>>;
  createdAt: string;
}

export interface UpdateMeArgs
  extends Partial<
    Pick<Influencer, 'handle' | 'displayName' | 'description' | 'socials'>
  > {
  firstName?: string;
  lastName?: string;
  background?: MediaUpload;
  avatar?: MediaUpload;
  isCreator?: boolean;
}

export interface DashboardInfo
  extends Pick<
    User,
    | 'stripeAccount'
    | 'stripeCustomerId'
    | 'stripeAccountId'
    | 'stripeAccountStatus'
    | 'followers'
  > {
  revenue: number;
}
export type Follower = Pick<User, 'avatar' | 'slug'>;

export type PaginatedUserModel = Paginated<User>;

export interface MeResponse {
  me: User;
}

export interface UpdateMeResponse {
  updateMe: Pick<User, 'id'>;
}

export interface DashboardInfoResponse {
  dashboardInfo: DashboardInfo;
}

export interface CategoryInfluencersResponse {
  categoryInfluencers: PaginatedUserModel;
}

export interface CategoryInfluencersFindOptions extends InfinityQueryOptions {
  categoryIds: string[];
}

export interface MyLeadersResponse {
  myLeaders: User[];
}

export interface TrendyUsersResponse {
  trendyUsers: PaginatedUserModel;
}

export interface UserByIdResponse {
  userById: User;
}

export interface InfluencerInfoResponse {
  influencerProfile: Influencer;
}
