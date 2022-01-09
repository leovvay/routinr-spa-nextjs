import React, { memo, useCallback, useEffect } from 'react';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import dynamic from 'next/dynamic';
import { ControllerFieldState } from 'react-hook-form/dist/types/controller';

import { Routine } from '@store/services/routines';
import Text from '@components/Text';
import TextField from '@components/TextField';
import Button from '@components/Button/Button';
import {
  CategoriesSelectorStyled,
  ValidationError,
} from '@components/RoutineBuilder/components/Overview/Overview.styled';
import { OverviewForm } from '@components/RoutineBuilder/RoutineBuilder.types';

import {
  RoutineBuilderLengthLimit,
  RoutineBuilderSection,
  RoutineBuilderText,
  RoutineBuilderTextFieldTitle,
} from '../../RoutineBuilder.styled';

const BenefitsEditor = dynamic(() => import('./components/BenefitsEditor'), {
  ssr: false,
});

const INPUT_RULES = {
  title: {
    required: {
      value: true,
      message: 'Please, name your routine',
    },
  },
  description: {
    required: {
      value: true,
      message: 'Description must be present',
    },
  },
  category: {
    required: {
      value: true,
      message: 'Select at least one category',
    },
  },
};

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 1200;
const MAX_HASHTAG_LENGTH = 100;

interface CustomControllerRenderProps<Field extends string> {
  field: ControllerRenderProps<FieldValues, Field>;
  fieldState: ControllerFieldState;
}

interface OverviewProps {
  handleSave(routine: OverviewForm): void;
  routine?: Routine;
  form: UseFormReturn<OverviewForm>;
}

function Overview({ handleSave, routine, form }: OverviewProps): JSX.Element {
  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    const categoriesOptions =
      routine?.categories.map((category) => ({
        value: category.id,
        label: category.title,
      })) ?? [];
    reset({
      title: routine?.title ?? '',
      benefits: routine?.benefits ?? '',
      description: routine?.description ?? '',
      categories: categoriesOptions,
      hashtag: routine?.hashtag ?? '',
    });
  }, [reset, routine]);

  return (
    <div>
      <Text size="h0" as="h1">
        Overview
      </Text>
      <RoutineBuilderText>
        First we need to find out more about your routine. Make it enticing and
        choose a good social media tag so people can easily find you.
      </RoutineBuilderText>
      <RoutineBuilderSection>
        <RoutineBuilderTextFieldTitle size="h5" as="h5" weight={600}>
          Routine name
        </RoutineBuilderTextFieldTitle>
        <Controller
          name="title"
          control={control}
          defaultValue={routine?.title ?? ''}
          rules={INPUT_RULES.title}
          render={useCallback(
            ({ field, fieldState }: CustomControllerRenderProps<'title'>) => (
              <>
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="Name your routine and make it stand out"
                  inputProps={{
                    maxLength: MAX_TITLE_LENGTH,
                  }}
                  variant="outlined"
                  fullWidth
                />
                <RoutineBuilderLengthLimit>
                  {MAX_TITLE_LENGTH - field.value.length} characters left
                </RoutineBuilderLengthLimit>
              </>
            ),
            []
          )}
        />
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <RoutineBuilderTextFieldTitle size="h5" as="h5" weight={600}>
          How it will change your life
        </RoutineBuilderTextFieldTitle>
        <RoutineBuilderText>
          Tell others what will change in their life by using your routine. You
          can add multiple benefits to your routine.
        </RoutineBuilderText>
        <Controller
          name="benefits"
          control={control}
          defaultValue={routine?.benefits ?? ''}
          render={useCallback(
            ({
              field: { value, onChange },
            }: CustomControllerRenderProps<'benefits'>) => (
              <BenefitsEditor value={value} onChange={onChange} />
            ),
            []
          )}
        />
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <RoutineBuilderTextFieldTitle size="h5" as="h5" weight={600}>
          Description
        </RoutineBuilderTextFieldTitle>
        <Controller
          name="description"
          control={control}
          defaultValue={routine?.description ?? ''}
          rules={INPUT_RULES.description}
          render={useCallback(
            ({
              field,
              fieldState,
            }: CustomControllerRenderProps<'description'>) => (
              <>
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  minRows={3}
                  fullWidth
                  multiline
                  inputProps={{
                    maxLength: MAX_DESCRIPTION_LENGTH,
                  }}
                />
                <RoutineBuilderLengthLimit>
                  {MAX_DESCRIPTION_LENGTH - field.value.length} characters left
                </RoutineBuilderLengthLimit>
              </>
            ),
            []
          )}
        />
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <RoutineBuilderTextFieldTitle size="h5" as="h5" weight={600}>
          Category
        </RoutineBuilderTextFieldTitle>
        <Controller
          name="categories"
          control={control}
          defaultValue={
            routine?.categories.map((category) => ({
              value: category.id,
              label: category.title,
            })) ?? []
          }
          rules={INPUT_RULES.category}
          render={useCallback(
            ({
              field: { onChange, value },
              fieldState,
            }: CustomControllerRenderProps<'categories'>) => (
              <>
                <CategoriesSelectorStyled
                  value={value}
                  onChange={onChange}
                  hasError={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <ValidationError size="validationCaption">
                    {fieldState.error?.message}
                  </ValidationError>
                )}
              </>
            ),
            []
          )}
        />
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <RoutineBuilderTextFieldTitle size="h5" as="h5" weight={600}>
          Social media hashtag (optional)
        </RoutineBuilderTextFieldTitle>
        <RoutineBuilderText>
          Carefully choose your social media hashtag so you can be easily found.
        </RoutineBuilderText>
        <Controller
          name="hashtag"
          control={control}
          defaultValue={routine?.hashtag ?? ''}
          render={useCallback(
            ({ field, fieldState }: CustomControllerRenderProps<'hashtag'>) => (
              <>
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="#example"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    maxLength: MAX_HASHTAG_LENGTH,
                  }}
                />
                <RoutineBuilderLengthLimit>
                  {MAX_HASHTAG_LENGTH - field.value.length} characters left
                </RoutineBuilderLengthLimit>
              </>
            ),
            []
          )}
        />
      </RoutineBuilderSection>
      <Button size="large" onClick={handleSubmit(handleSave)}>
        <Text>Save & continue</Text>
      </Button>
    </div>
  );
}

Overview.defaultProps = {
  routine: undefined,
};

export default memo(Overview);
