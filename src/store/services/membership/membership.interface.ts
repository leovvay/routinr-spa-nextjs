import {
  MediaCover,
  MediaUpload,
} from '@store/services/common/common.interface';
import { Paginated } from '@store/services/types/pagination.interface';

import { User } from '../users';

interface MembershipBase {
  cover: MediaCover;
  title: string;
  description: string;
  content: 'All Routines and selected posts' | 'Selected posts';
  price: number;
  recurrence: 'month' | 'one-off';
  includeAddress: boolean;
}

export interface Membership extends MembershipBase {
  id: number;
  isFixed: boolean;
  isPublic: boolean;
  status: string;
  stripePlanId: string;
  creator: User;
}

export interface MembershipWithSubscribeInfo extends Membership {
  isSubscribed: boolean;
}

export type MembershipAsSubscription = Pick<
  Membership,
  | 'id'
  | 'title'
  | 'cover'
  | 'recurrence'
  | 'price'
  | 'content'
  | 'description'
  | 'creator'
>;

export interface MembershipInfo extends MembershipBase {
  id: number;
  isPublic: boolean;
  buyers: number;
  revenue: number;
}

export interface CreateMembershipData extends Omit<MembershipBase, 'cover'> {
  cover: MediaUpload;
}

export interface UpdateMembershipData extends Partial<CreateMembershipData> {
  id: number;
  isPublic?: boolean;
}

export interface CreateMembershipResponse {
  createMembership: Membership;
}

export interface UpdateMembershipResponse {
  updateMembership: Membership;
}

export interface MembershipsResponse {
  myMemberships: Membership[];
}

export interface MyMembershipsInfoResponse {
  myMembershipsInfo: Paginated<MembershipInfo>;
}

export interface DeleteMembershipsResponse {
  deleteMembership: Pick<Membership, 'id'>;
}

export interface MyMySubscribedMembershipsResponse {
  mySubscribedMemberships: Paginated<MembershipAsSubscription>;
}
