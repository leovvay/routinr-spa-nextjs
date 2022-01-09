import { CloudinaryMedia } from '../types/media.interface';

export interface Category {
  id: number;
  title: string;
  image: CloudinaryMedia;
  bannerImage: CloudinaryMedia;
  routinesCount: number;
  categoryPromoSettingsId: number | null;
  categoryPromoSettings?: CategoryPromoSettings;
}

export interface CategoryPromoSettings {
  id: number;
  s1BannerImage: string;
  s1Heading: string;
  s1Text: string;
  s2Heading: string;
  s2Benefit1Image: string;
  s2Benefit1Text: string;
  s2Benefit2Image: string;
  s2Benefit2Text: string;
  s2Benefit3Image: string;
  s2Benefit3Text: string;
  s2Benefit4Image: string;
  s2Benefit4Text: string;
  s3Heading: string;
  s3Offer1: string;
  s3Offer2: string;
  s3Offer3: string;
  s3Offer4: string;
  s3Offer5: string;
  s3Offer6: string;
  s4TestimonialBanner: string;
  s4TestimonialText: string;
  s5Text: string;
  s6Text: string;
  s7Heading: string;
  titleTagText: string;
  s5CategoryId: number;
  s6CategoryId: number;
  s5Category: Category;
  s6Category: Category;
}

export interface CategoriesResponse {
  categories: Category[];
}

export interface CategoryResponse {
  category: Category;
}
