import React from 'react';
import { useRouter } from 'next/router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { DateTime } from 'luxon';

import { PostWithCreator } from '@store/services/posts';
import Image from '@components/Image';
import Text, { TextLight } from '@components/Text';

import { PostMainInfoCreatorLink } from '@modules/posts/components/PostMainInfo/PostMainInfo.styled';
import { Media } from '@modules/posts/post.types';
import { PostPageVideo, PostPageYoutube } from '@modules/posts/post.styled';

import 'swiper/css';
import 'swiper/css/pagination';

import {
  PostPageMobileBackButton,
  PostPageMobileBody,
  PostPageMobileContainer,
  PostPageMobileMedia,
  PostPageMobileText,
} from './PostPageMobile.styled';

const swiperSettings = {
  modules: [Pagination],
  pagination: {
    dynamicBullets: true,
    clickable: true,
  },
};

interface PostPageMobileProps {
  post: PostWithCreator;
  photos: Media[];
  videos: Media[];
  audios: Media[];
}

function PostPageMobile({
  post,
  photos,
  videos,
  audios,
}: PostPageMobileProps): JSX.Element {
  const router = useRouter();

  const created = DateTime.fromMillis(Number(post.createdAt)).toRelative();
  const someMedia = Boolean(photos.length || videos.length || audios.length);

  return (
    <PostPageMobileContainer>
      <PostPageMobileBackButton onClick={router.back} />
      {post.youtubeUrl ? (
        <PostPageMobileMedia>
          <PostPageYoutube url={post.youtubeUrl} />
        </PostPageMobileMedia>
      ) : (
        <PostPageMobileMedia>
          <Image src={post.cover.previewUrl} layout="fill" objectFit="cover" />
        </PostPageMobileMedia>
      )}
      <PostPageMobileBody>
        <PostPageMobileText>
          <Text size="h3">{post.title}</Text>
          <TextLight size="bodyCaptionSmall" weight={500}>
            {`${created} • by `}
            <PostMainInfoCreatorLink
              href={`/profile/${post.creator.slug}`}
              blue
            >
              @{post.creator.handle}
            </PostMainInfoCreatorLink>
          </TextLight>
          <Text size="bodySmallMedium">{post.description}</Text>
        </PostPageMobileText>
        {someMedia && (
          <Swiper {...swiperSettings}>
            {photos.map((photo) => (
              <SwiperSlide key={photo.previewUrl}>
                <PostPageMobileMedia>
                  <Image
                    src={photo.previewUrl}
                    layout="fill"
                    objectFit="cover"
                  />
                </PostPageMobileMedia>
              </SwiperSlide>
            ))}
            {videos.map((video) => (
              <SwiperSlide key={video.url}>
                <PostPageMobileMedia>
                  <PostPageVideo src={video.url} />
                </PostPageMobileMedia>
              </SwiperSlide>
            ))}
            {audios.map((audio) => (
              <SwiperSlide key={audio.url}>
                <PostPageMobileMedia>
                  <PostPageVideo src={audio.url} />
                </PostPageMobileMedia>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </PostPageMobileBody>
    </PostPageMobileContainer>
  );
}

export default PostPageMobile;
