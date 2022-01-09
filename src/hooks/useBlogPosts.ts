import { useCallback, useEffect, useState } from 'react';

import { defaultImage } from '@components/Image/Image.styled';

interface UseBlogPostsResult {
  getMore(): void;
  posts: any[];
}

interface BlogResult {
  author: number;
  categories: number[];
  comment_status: string;
  content: {
    protected: boolean;
    rendered: string;
  };
  date: string;
  date_gmt: string;
  excerpt: {
    protected: boolean;
    rendered: string;
  };
  featured_media: number;
  format: string;
  guid: { rendered: string };
  id: number;
  link: string;
  meta: any[];
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: string[];
  template: string;
  title: { rendered: string };
  type: 'post';

  cover?: string;
}

export default function useBlogPosts(perPage = 6): UseBlogPostsResult {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<BlogResult[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getPosts = useCallback(async () => {
    const postsBlogRequest = await fetch(
      `https://blog.routinr.org/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}`
    );

    if (postsBlogRequest.status === 400) {
      return setHasMore(false);
    }

    const postsBlogResult = await postsBlogRequest.json();
    const postsBlogWithMedia = await Promise.all<BlogResult>(
      postsBlogResult.map(async (blog: BlogResult) => {
        const result =
          blog.featured_media &&
          (await fetch(
            `https://blog.routinr.org/wp-json/wp/v2/media/${blog.featured_media}`
          ));
        if (result && result.status !== 401) {
          const cover = await result.json();
          // eslint-disable-next-line no-param-reassign
          blog.cover = cover.media_details.sizes.medium.source_url;
        } else {
          // eslint-disable-next-line no-param-reassign
          blog.cover = defaultImage;
        }
        return blog;
      })
    );

    return setPosts((prevPosts) => prevPosts.concat(postsBlogWithMedia));
  }, [page, perPage]);

  useEffect(() => {
    if (hasMore) getPosts();
  }, [getPosts, hasMore]);

  return {
    getMore: useCallback(() => {
      if (hasMore) setPage((prevPage) => prevPage + 1);
    }, [hasMore]),
    posts,
  };
}
