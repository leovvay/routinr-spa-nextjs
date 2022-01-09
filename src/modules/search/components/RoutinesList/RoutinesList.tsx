import React, { useState } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';

import { User } from '@store/services/users';
import Touchable from '@components/Touchable';
import { useLazyGetRoutineBySlugQuery } from '@store/services/routines';
import RoutineCard from '@components/RoutineCards/RoutineCard';
import ModalRoutineInfo from '@components/ContentInfo/ModalRoutineInfo';
import Text from '@components/Text';
import RoutineDrawer from '@components/ContentInfo/RoutineDrawer';
import { useIsMobileVersion } from '@hooks';
import GridList from '@components/GridList';

import { CategoryPageViewMoreButton } from '@modules/category.styled';

interface RoutineHit {
  title: string;
  cover: { url: string };
  attachmentsCount: number;
  benefits: string;
  slug: string;
  categories: string[];
  creator: Pick<User, 'id' | 'displayName' | 'handle' | 'slug' | 'avatar'>;
  daysCount: number;
  description: string;
  isFree: true;
  objectID: string;
  price: number;
  usageCount: number;
  purchasesAll: number;
  purchasesLastMonth: number;
  purchasesLastWeek: number;
  createdAt: string;
  updatedAt: string;
}

interface RoutinesListProps {
  hits: RoutineHit[];
  hasMore: boolean;
  refineNext(): void;
}

function RoutinesList({
  hits,
  hasMore,
  refineNext,
}: RoutinesListProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  const [showRoutine, setShowRoutine] = useState(false);

  const [getRoutineBySlug, { data: shownRoutine }] =
    useLazyGetRoutineBySlugQuery();

  const routines =
    hits?.map((routine) => ({
      ...routine,
      price: routine.price / 100,
    })) ?? [];

  return (
    <>
      {hits.length ? (
        <GridList>
          {routines.map((routine) => (
            <Touchable
              key={routine.slug}
              onClick={() => {
                setShowRoutine(true);
                getRoutineBySlug(routine.slug);
              }}
            >
              <RoutineCard routine={routine} />
            </Touchable>
          ))}

          {showRoutine && shownRoutine && !isMobile && (
            <ModalRoutineInfo
              routine={shownRoutine}
              onClose={() => setShowRoutine(false)}
            />
          )}
          {isMobile && (
            <RoutineDrawer
              open={showRoutine}
              routine={shownRoutine}
              onClose={() => setShowRoutine(false)}
            />
          )}
        </GridList>
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

export default connectInfiniteHits(RoutinesList);
