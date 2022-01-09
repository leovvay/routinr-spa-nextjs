import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { skipToken } from '@reduxjs/toolkit/query/react';

import {
  useSegment,
  useUser,
  useSegmentPageEvent,
  useIsMobileVersion,
} from '@hooks';
import Header from '@components/Header';
import Text, { TextLight } from '@components/Text';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import { useGetPostBySlugQuery } from '@store/services/posts';
import Loader from '@components/Loader';
import Image from '@components/Image';
import Footer from '@components/Footer';
import ReportButton from '@components/ReportButton';

import {
  PostPageContainer,
  PostPagePhotoContainer,
  PostPageMedia,
  PostPageSection,
  PostPageSectionContainer,
  PostPageVideo,
  PostPageYoutube,
  PostPageTagsTitle,
  PostPageTags,
  PostPageTagsSectionContainer,
  PostPageTagsContainer,
} from '@modules/posts/post.styled';
import PostMainInfo from '@modules/posts/components/PostMainInfo';
import { Media } from '@modules/posts/post.types';
import PostPageMobile from '@modules/posts/components/PostPageMobile';
import { PageLoaderContainer } from '@modules/index.styled';

const defaultMedias: {
  photos: Media[];
  videos: Media[];
  audios: Media[];
} = { photos: [], videos: [], audios: [] };

function PostPage(): JSX.Element {
  const router = useRouter();
  const segment = useSegment();
  const { currentUser } = useUser();
  const isMobile = useIsMobileVersion();

  const { slug } = router.query;

  const { data: post, error } = useGetPostBySlugQuery(
    (slug as string) || skipToken
  );

  const pageTitle = post
    ? `${post.title} by ${post.creator.handle} | Routinr`
    : 'Post | Routinr';

  const { photos, audios, videos } =
    post?.attachments.reduce((medias, attachment) => {
      const media = {
        url: attachment.url,
        previewUrl: attachment.previewUrl,
      };

      if (attachment.resource_type === 'video') medias.videos.push(media);
      else if (attachment.resource_type === 'audio') medias.audios.push(media);
      else if (attachment.resource_type === 'image') medias.photos.push(media);
      return medias;
    }, defaultMedias) ?? defaultMedias;

  useEffect(() => {
    if (error || post?.isLocked) router.push('/');
  }, [error, post, router]);

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <Header />
      <PageContent>
        {!post && (
          <PageLoaderContainer>
            <Loader />
          </PageLoaderContainer>
        )}
        {post && isMobile && (
          <PostPageMobile
            post={post}
            photos={photos}
            videos={videos}
            audios={audios}
          />
        )}
        {post && !isMobile && (
          <PostPageContainer>
            <PostMainInfo post={post} />
            <PostPageSectionContainer>
              <PostPageSection>
                <Text size="h3" weight={700}>
                  Post
                </Text>
                <TextLight size="h5" weight={600} as="pre">
                  {post.description}
                </TextLight>
              </PostPageSection>
              {Boolean(photos.length) && (
                <PostPageSection>
                  <Text size="h3" weight={700}>
                    Photos
                  </Text>
                  <PostPageMedia>
                    {photos.map((photo) => (
                      <PostPagePhotoContainer key={photo.previewUrl}>
                        <Image
                          src={photo.previewUrl}
                          layout="fill"
                          objectFit="cover"
                        />
                      </PostPagePhotoContainer>
                    ))}
                  </PostPageMedia>
                </PostPageSection>
              )}
              {Boolean(videos.length || post.youtubeUrl) && (
                <PostPageSection>
                  <Text size="h3" weight={700}>
                    Videos
                  </Text>
                  <PostPageMedia>
                    {post.youtubeUrl && (
                      <PostPageYoutube url={post.youtubeUrl} />
                    )}
                    {videos.map((video) => (
                      <PostPageVideo key={video.url} src={video.url} />
                    ))}
                  </PostPageMedia>
                </PostPageSection>
              )}
            </PostPageSectionContainer>
            <PostPageTagsSectionContainer>
              <PostPageTagsTitle size="h3" weight={700}>
                <Image src="/tagsIcon.svg" width={30} height={30} />
                Tags
              </PostPageTagsTitle>
              <PostPageTagsContainer>
                {post.tags.map((tag) => (
                  <PostPageTags key={tag} size="h5">
                    {tag}
                  </PostPageTags>
                ))}
              </PostPageTagsContainer>
            </PostPageTagsSectionContainer>
            <PostPageSectionContainer>
              <ReportButton
                type="post"
                onClick={() => segment.reportPost(post.title, currentUser?.id)}
              />
            </PostPageSectionContainer>
          </PostPageContainer>
        )}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default PostPage;
