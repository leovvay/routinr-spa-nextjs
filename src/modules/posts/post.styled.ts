import styled, { css } from 'styled-components';

import YouTubeVideo from '@components/YouTubeVideo';
import Text from '@components/Text';

export const PostPageContainer = styled.div`
  padding: 30px 68px;
`;

export const PostPageSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 0;

  border-bottom: 2px solid var(--main-border-color);
`;

export const PostPageTagsSectionContainer = styled(PostPageSectionContainer)`
  gap: 15px;
`;

export const PostPageTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const PostPageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PostPageMedia = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 20vw;
  position: relative;
`;

const commonMediaStyles = css`
  border-radius: 4px;
  overflow: hidden;
`;

export const PostPagePhotoContainer = styled.div`
  position: relative;

  ${commonMediaStyles}
`;

export const PostPageVideo = styled.video`
  width: 100%;
  height: 100%;

  ${commonMediaStyles}
`;

export const PostPageYoutube = styled(YouTubeVideo)`
  width: 100%;
  height: 100%;

  ${commonMediaStyles}
`;

export const PostPageTagsTitle = styled(Text)`
  display: inline-flex;
  align-items: center;
  gap: 17px;
`;

export const PostPageTags = styled(Text)`
  color: var(--text-primary-color);
`;
