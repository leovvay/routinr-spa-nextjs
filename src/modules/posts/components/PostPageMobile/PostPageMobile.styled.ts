import styled from 'styled-components';

import ButtonBackMobile from '@components/ButtonBackMobile';

export const PostPageMobileMedia = styled.div`
  height: 300px;
  position: relative;
`;

export const PostPageMobileContainer = styled.div`
  position: relative;

  .swiper {
    height: 330px;
  }
`;

export const PostPageMobileBackButton = styled(ButtonBackMobile)`
  position: absolute;
  top: 8%;
  left: 6%;
  z-index: 2;
  width: 50px;
  height: 50px;
`;

export const PostPageMobileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PostPageMobileBody = styled.div`
  padding: 15px 30px;
`;
