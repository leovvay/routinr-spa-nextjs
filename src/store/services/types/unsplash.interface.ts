export interface GetUnsplashQuery {
  keyword: string;
  page: number;
  perPage: number;
}

export interface UnsplashStockPaginated {
  results: UnsplashStock[];
  total: number;
  total_pages: number;
}

export interface UnsplashStock {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: string;
  height: number;
  id: string;
  likes: number;
  links: UnsplashStockLinks;
  promoted_at: string;
  updated_at: string;
  urls: UnsplashStockUrls;
  user: UnsplashStockUser;
  width: number;
}

interface UnsplashStockLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface UnsplashStockUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

interface UnsplashStockUser {
  bio: string;
  first_name: string;
  id: string;
  instagram_username: string;
  last_name: string;
  location: string;
  name: string;
  portfolio_url: string;
  total_collections: string;
  total_likes: string;
  total_photos: string;
  twitter_username: string;
  updated_at: string;
  username: string;
}

export interface UnsplashUpload {
  id?: number;
  unsplashId: string;
  mediumUrl: string;
  url: string;
  userName: string;
}
