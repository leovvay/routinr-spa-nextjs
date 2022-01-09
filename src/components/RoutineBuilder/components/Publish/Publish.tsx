import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { useUser } from '@hooks';
import Text from '@components/Text';
import Switch from '@components/Switch';
import PriceSelector from '@components/PriceSelector/PriceSelector';
import { Routine } from '@store/services/routines';
import { useDashboardInfoQuery } from '@store/services/users';

import { PublishForm } from '../../RoutineBuilder.types';

import { RoutineBuilderText } from '../../RoutineBuilder.styled';
import {
  PublishButton,
  PublishLink,
  PublishSection,
  PublishSprucing,
} from './Publish.styled';

interface PublishProps {
  routine: Routine;
  handlePublish(routineData: PublishForm): void;
  form: UseFormReturn<PublishForm>;
  isPublishDisabled: boolean;
}

function Publish({
  routine,
  handlePublish,
  form,
  isPublishDisabled,
}: PublishProps): JSX.Element {
  const { currentUser } = useUser();
  const { data: dashboardInfo } = useDashboardInfoQuery();

  const isStripeVerified =
    dashboardInfo?.stripeAccountStatus === 'verified' &&
    dashboardInfo.stripeAccount?.accountType === 'express';

  const { handleSubmit, control, watch } = form;

  const isFree = watch('isFree');

  const defaultPrice = routine.price
    ? { value: routine.price, label: routine.price }
    : { value: 0.99, label: 0.99 };

  return (
    <div>
      <Text size="h0" as="h1">
        Choose what you want to charge for your routine (or just make it
        available for free!)
      </Text>
      <RoutineBuilderText>
        Make your routine private in case you only want to use it for yourself
        or a select few.
      </RoutineBuilderText>
      <PublishSection>
        <Controller
          name="isPrivate"
          control={control}
          defaultValue={routine.isPrivate}
          render={({ field }) => (
            <Switch checked={field.value} onChange={field.onChange} />
          )}
        />
        Private
      </PublishSection>
      <RoutineBuilderText>
        Charge whatever you like for people to use your routine or give it away
        for free.
      </RoutineBuilderText>
      <PublishSection>
        <Controller
          name="isFree"
          control={control}
          defaultValue={routine.isFree ?? true}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onChange={field.onChange}
              disabled={!isStripeVerified}
            />
          )}
        />
        Free
      </PublishSection>
      {!isFree && (
        <PublishSection>
          <Text size="h5" as="h5" weight={600}>
            Price
          </Text>
          <Controller
            name="price"
            control={control}
            defaultValue={defaultPrice}
            render={({ field }) => (
              <PriceSelector
                defaultValue={{ value: 0.99, label: 0.99 }}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Text size="bodyCaption">*All Prices in USD</Text>
        </PublishSection>
      )}
      <PublishSection>
        <PublishSprucing>
          &bull; Get more exposure by sprucing up{' '}
          <PublishLink href={`/profile/${currentUser?.slug}`} blue>
            your profile
          </PublishLink>
        </PublishSprucing>
      </PublishSection>

      <PublishButton
        size="large"
        onClick={handleSubmit(handlePublish)}
        disabled={isPublishDisabled}
      >
        <Text>Publish</Text>
      </PublishButton>
    </div>
  );
}

export default Publish;
