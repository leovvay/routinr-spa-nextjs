import { Paginated } from '@store/services/types/pagination.interface';
import { User } from '@store/services/users';
import { InfinityQueryOptions } from '@utils';
import { Category } from '@store/services/categories';
import {
  MediaCover,
  MediaToRemove,
  MediaUpload,
} from '@store/services/common/common.interface';
import { Day } from '@store/services/routines/day.interface';

export interface Routine {
  id: number;
  slug: string;
  title: string;
  description: string;
  benefits: string;
  hashtag: string;
  price: number;
  isFree: boolean;
  isPrivate: boolean;
  isComplete: boolean;
  isPublished: boolean;
  usageCount: number;
  daysCount: number;
  attachmentsCount: number;
  cover: RoutineMedia;
  youtubeUrl: string;
  promoVideo: string;
  resource: 'video' | 'image';

  creator: User;
  categories: Category[];
  attachments: RoutineMedia[];
  supports: RoutineMedia[];
  days: Day[];
}

export interface RoutineWithUserInfo extends Routine {
  routineUserInfo: {
    isPurchased: boolean;
    isUsed: boolean;
  };
}

export type RoutineDashboardEmpty = Pick<Routine, 'id'>;
export interface RoutineDashboard
  extends Pick<
    Routine,
    | 'id'
    | 'title'
    | 'cover'
    | 'isComplete'
    | 'isPublished'
    | 'isPrivate'
    | 'slug'
  > {
  status: 'approve' | 'pending' | 'delete';
  buyers: number;
  revenue: number;
}
export type InfluencersRoutine = Pick<
  Routine,
  | 'id'
  | 'slug'
  | 'title'
  | 'cover'
  | 'creator'
  | 'attachmentsCount'
  | 'daysCount'
  | 'isFree'
  | 'price'
>;

export interface RoutineMedia extends MediaCover {
  filename: string;
  resource_type: 'image' | 'video' | 'audio' | 'raw';
}

export type PaginatedRoutineModel = Paginated<Routine>;

export type PageSortType = 'recent' | 'popular' | 'trending';
export type PageContentType = 'all' | 'free' | 'paid';

export interface CategoryRoutinesFindOptions extends InfinityQueryOptions {
  categoryIds: string[];
  skipRoutines?: number[];
  contentType: PageContentType;
  sort: PageSortType;
}

export interface CategoryRoutinesResponse {
  categoryRoutines: PaginatedRoutineModel;
}

export interface MyRoutinesIdsResponse {
  myRoutinesIds: Paginated<RoutineDashboardEmpty>;
}

export interface CreateRoutineData
  extends Partial<
    Pick<Routine, 'title' | 'description' | 'benefits' | 'hashtag'>
  > {
  categories?: Pick<Category, 'id'>[];
}

export interface UpdateRoutineData extends Partial<CreateRoutineData> {
  id: number;

  cover?: MediaUpload;

  youtubeUrl?: string;

  promoVideo?: MediaUpload;

  attachments?: MediaUpload[];

  supports?: MediaUpload[];

  mediaToRemove?: MediaToRemove[];

  isPublished?: Routine['isPublished'];

  isPrivate?: Routine['isPrivate'];
}

export interface CreateRoutineResponse {
  createRoutine: Pick<Routine, 'id' | 'slug'>;
}

export interface UpdateRoutineResponse {
  updateRoutine: Pick<Routine, 'id' | 'slug'>;
}

export interface DeleteRoutineResponse {
  deleteRoutine: Pick<Routine, 'id'>;
}

export interface CloneRoutineResponse {
  cloneRoutine: Pick<Routine, 'id'>;
}

export interface GetRoutineByIdResponse {
  getRoutineById: RoutineInCalendarInfo;
}

export interface GetRoutineBySlugResponse {
  getRoutineBySlug: Routine;
}

export interface GetRoutinePageInfoResponse {
  getRoutineBySlug: RoutineWithUserInfo;
}

export interface GetMyRoutinesInfoResponse {
  getMyRoutinesInfo: Paginated<RoutineDashboard>;
}

export interface InfluencersRoutinesResponse {
  getInfluencersRoutines: Paginated<InfluencersRoutine>;
}

export interface MyPlanRoutinesResponse {
  myPlanRoutines: Paginated<RoutineInPlanInfo>;
}

export interface RoutineInCalendarInfo
  extends Pick<
    RoutineWithUserInfo,
    'id' | 'slug' | 'title' | 'cover' | 'days' | 'routineUserInfo'
  > {
  creator: Pick<Routine['creator'], 'slug'>;
  attachments: RoutineMedia[];
}

export interface RoutineInPlanInfo
  extends Pick<
    RoutineWithUserInfo,
    | 'id'
    | 'slug'
    | 'title'
    | 'cover'
    | 'daysCount'
    | 'attachmentsCount'
    | 'attachments'
    | 'days'
    | 'routineUserInfo'
  > {
  creator: Pick<Routine['creator'], 'slug' | 'avatar'>;
}
