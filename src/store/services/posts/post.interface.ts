import {
  MediaCover,
  MediaToRemove,
  MediaUpload,
  UpdateEntityCover,
} from '@store/services/common/common.interface';
import { Paginated } from '@store/services/types/pagination.interface';
import { Membership } from '@store/services/membership/membership.interface';
import { User } from '@store/services/users';

export interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  status: 'pending' | 'approve' | 'delete';
  cover: MediaCover;
  youtubeUrl: string;
  tags: string[];
  published: boolean;
  isPremium: boolean;
  membershipType: 'All Memberships' | 'Selected Membership';
  membershipId: number;
  membership?: Membership;
  attachments: MediaCover[];

  isLocked?: boolean;
}

export interface PostWithCreator extends Post {
  creator: Pick<User, 'slug' | 'handle'>;
  createdAt: string; // in milliseconds
}

export interface FeedPost
  extends Pick<
    PostWithCreator,
    'id' | 'slug' | 'title' | 'description' | 'createdAt' | 'cover'
  > {
  creator: Pick<User, 'avatar'>;
}

export type InfluencersPost = Pick<
  Post,
  'id' | 'title' | 'cover' | 'slug' | 'isLocked' | 'membershipId'
>;

export interface CreatePostData
  extends Omit<
    Post,
    | 'id'
    | 'slug'
    | 'status'
    | 'cover'
    | 'published'
    | 'attachments'
    | 'membershipId'
  > {
  attachments: MediaUpload[];
}

export interface UpdatePostData extends Partial<CreatePostData> {
  id: number;
  mediaToRemove?: MediaToRemove[];
}

export interface UpdatePostCover extends UpdateEntityCover {
  postId: number;
}

export interface CreatePostResponse {
  createPost: Post;
}

export interface UpdatePostResponse {
  updatePost: Post;
}

export interface DeletePostResponse {
  deletePost: Post;
}

export interface MyPostsResponse {
  myPosts: Paginated<Post>;
}

export interface UpdatePostCoverResponse {
  changePostCover: Post;
}

export interface MyPremiumPostsResponse {
  myPremiumPosts: Paginated<Pick<Post, 'id' | 'slug' | 'title' | 'cover'>>;
}

export interface FeedPostsResponse {
  myPremiumPosts: Paginated<FeedPost>;
}

export interface InfluencersPostsResponse {
  influencersPosts: Paginated<InfluencersPost>;
}

export interface GetPostBySlugResponse {
  postBySlug: PostWithCreator;
}
