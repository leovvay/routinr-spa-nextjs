import React, { useCallback } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useInfinityCategoryInfluencersQuery } from '@store/services/users';
import { useBlogPosts } from '@hooks';
import Text from '@components/Text';
import Image from '@components/Image';
import Avatar from '@components/Avatar';
import LinkTo from '@components/LinkTo';

import 'swiper/css';

import {
  GrowthBlogCard,
  GrowthBlogSection,
  GrowthBlogSectionHeader,
  Link,
  Links,
  PostLink,
} from './GrowthBlog.styled';

const postsSwiperSettings = {
  slidesPerView: 2,
  spaceBetween: 12,
  grabCursor: true,
};

function GrowthBlog(): JSX.Element {
  const { posts, getMore } = useBlogPosts();
  const {
    data: influencers,
    hasNextPage: influencersHasNextPage,
    fetchNext: fetchNextIncluencers,
  } = useInfinityCategoryInfluencersQuery(
    {
      categoryIds: [],
      first: 12,
    },
    []
  );

  const getMoreInfluencers = useCallback(() => {
    if (influencersHasNextPage) fetchNextIncluencers();
  }, [fetchNextIncluencers, influencersHasNextPage]);

  return (
    <GrowthBlogCard>
      <GrowthBlogSection>
        <GrowthBlogSectionHeader>
          <Text size="h5" as="h5">
            From the Growth Blog
          </Text>
          <Link href="https://blog.routinr.org/" target="_blank" blue>
            View more
          </Link>
        </GrowthBlogSectionHeader>
        <Swiper {...postsSwiperSettings} onReachEnd={getMore}>
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div>
                <PostLink target="_blank" href={post.link}>
                  <Image src={post.cover} layout="fill" objectFit="cover" />
                </PostLink>
                <Text>{post.title.rendered}</Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </GrowthBlogSection>
      <GrowthBlogSection>
        <GrowthBlogSectionHeader>
          <Text size="h5" as="h5">
            Inspiring creators
          </Text>
        </GrowthBlogSectionHeader>
        <Swiper slidesPerView={6} onReachEnd={getMoreInfluencers}>
          {influencers.map((influencer) => (
            <SwiperSlide key={influencer.node.id}>
              <LinkTo href={`/profile/${influencer.node.slug}`}>
                <Avatar src={influencer.node.avatar} />
              </LinkTo>
            </SwiperSlide>
          ))}
        </Swiper>
      </GrowthBlogSection>
      <GrowthBlogSection>
        <GrowthBlogSectionHeader>
          <Text size="h5" as="h5">
            Useful links
          </Text>
        </GrowthBlogSectionHeader>
        <Links>
          <Link
            href="https://blog.routinr.org/promotion-guide/"
            target="_blank"
            blue
          >
            Download creators manual
          </Link>
          <Link
            href="https://blog.routinr.org/routinr-zapier-the-perfect-combination-for-influencers/"
            target="_blank"
            blue
          >
            Zapier integration
          </Link>
        </Links>
      </GrowthBlogSection>
    </GrowthBlogCard>
  );
}

export default GrowthBlog;
