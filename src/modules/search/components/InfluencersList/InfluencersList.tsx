import React, { useState } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';

import { useLazyGetUserByIdQuery } from '@store/services/users';
import Touchable from '@components/Touchable';
import InfluencerCard from '@components/InfluencerCard';
import Text from '@components/Text';
import ModalInfluencerInfo from '@components/ContentInfo/ModalInfluencerInfo';
import InfluencerDrawer from '@components/ContentInfo/InfluencerDrawer';
import { useIsMobileVersion } from '@hooks';

import { CategoryPageViewMoreButton } from '@modules/category.styled';
import InfluencerCardMobile from '@modules/search/components/InfluencerCardMobile';

import { InfluencersListContent } from './InfluencersList.styled';

interface InfluencerHit {
  avatar: string;
  categories: string[];
  displayName: string;
  followersCount: number;
  handle: string;
  slug: string;
  objectID: string;
}

interface InfluencersListProps {
  hits: InfluencerHit[];
  hasMore: boolean;
  refineNext(): void;
}

function InfluencersList({
  hits,
  hasMore,
  refineNext,
}: InfluencersListProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  const [showInfluencer, setShowInfluencer] = useState(false);

  const [getUserById, { data: shownInfluencer }] = useLazyGetUserByIdQuery();

  return (
    <>
      {hits.length ? (
        <InfluencersListContent>
          {hits?.map((influencer) => (
            <Touchable
              key={influencer.slug}
              onClick={() => {
                setShowInfluencer(true);
                getUserById(Number(influencer.objectID));
              }}
            >
              {isMobile ? (
                <InfluencerCardMobile
                  avatar={influencer.avatar}
                  handle={influencer.handle}
                  followersCount={influencer.followersCount}
                />
              ) : (
                <InfluencerCard
                  avatar={influencer.avatar}
                  handle={influencer.handle}
                  slug={influencer.slug}
                  followersCount={influencer.followersCount}
                  link={false}
                />
              )}
            </Touchable>
          ))}

          {showInfluencer && shownInfluencer && !isMobile && (
            <ModalInfluencerInfo
              influencer={shownInfluencer}
              onClose={() => setShowInfluencer(false)}
            />
          )}
          {isMobile && (
            <InfluencerDrawer
              open={showInfluencer}
              influencer={shownInfluencer}
              onClose={() => setShowInfluencer(false)}
            />
          )}
        </InfluencersListContent>
      ) : (
        <Text>Hmm... Sorry, nothing matches your search.</Text>
      )}
      {hasMore && (
        <CategoryPageViewMoreButton onClick={refineNext}>
          View more
        </CategoryPageViewMoreButton>
      )}
    </>
  );
}

export default connectInfiniteHits(InfluencersList);
