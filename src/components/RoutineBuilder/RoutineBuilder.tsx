import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';

import { skipToken } from '@reduxjs/toolkit/query/react';
import { useSnackbar } from 'notistack';

import {
  useCreateRoutineMutation,
  useGetRoutineBySlugQuery,
  useUpdateRoutineMutation,
} from '@store/services/routines';
import CreateRoutineInput from '@store/services/routines/dto/createRoutine.input';
import UpdateRoutineInput from '@store/services/routines/dto/updateRoutine.input';
import Loader from '@components/Loader';

import {
  MediaAndAttachmentsForm,
  OverviewForm,
  PublishForm,
} from './RoutineBuilder.types';
import Stepper from './components/Stepper';
import Overview from './components/Overview';
import GetStarted from './components/GetStarted';
import MediaAttachments from './components/MediaAttachments';

import {
  RoutineBuilderContent,
  RoutineBuilderStep,
} from './RoutineBuilder.styled';

const dynamicOption = {
  loading: () => <Loader />,
};

const CompleteModal = dynamic(() => import('./components/CompleteModal'));
const Preview = dynamic(() => import('./components/Preview'));
const Publish = dynamic(() => import('./components/Publish'), dynamicOption);
const Activities = dynamic(
  () => import('./components/Activities'),
  dynamicOption
);

const initialStepsState = {
  1: false,
  2: false,
  3: false,
  4: false,
};

interface RoutineBuilderProps {
  slug?: string;
  initialStep?: number;
}

function RoutineBuilder({
  slug,
  initialStep = 0,
}: RoutineBuilderProps): JSX.Element {
  const overviewForm = useForm<OverviewForm>();
  const mediaForm = useForm<MediaAndAttachmentsForm>();
  const publishForm = useForm<PublishForm>();

  const { enqueueSnackbar } = useSnackbar();

  const isMediaSubmitted = mediaForm.formState.isSubmitted;
  const isOverviewSubmitted = overviewForm.formState.isSubmitted;
  const isOverviewValid = overviewForm.formState.isValid;

  const hasYouTube = mediaForm.watch('youtubeUrl');
  const hasPromoVideo = mediaForm.watch('promoVideo');
  const hasCover = mediaForm.watch('cover');
  const routineHasCover = Boolean(hasCover || hasPromoVideo || hasYouTube);

  const [routineSlug, setRoutineSlug] = useState<string | undefined>(slug);
  const [step, setStep] = useState(initialStep);
  const [stepErrors, setStepErrors] = useState(initialStepsState);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [
    createRoutine,
    { isSuccess: isCreateRoutineSuccess, data: createdRoutine },
  ] = useCreateRoutineMutation();

  const { data: routine } = useGetRoutineBySlugQuery(routineSlug ?? skipToken);
  const [updateRoutine, { isSuccess: isUpdateRoutineSuccess, error, isError }] =
    useUpdateRoutineMutation();

  const updateErrorMessage = error?.message?.split(':')[0];

  const isSaveDisabled = !(
    overviewForm.formState.isDirty || mediaForm.formState.isDirty
  );
  const isPublishDisabled = Object.values(stepErrors).some(Boolean);

  const stepCompleteness = useMemo(() => {
    const { title, description, categories } = overviewForm.getValues();
    const { cover, youtubeUrl, promoVideo } = mediaForm.getValues();
    const routineOverviewComplete = Boolean(
      (routine?.title.length &&
        routine?.description.length &&
        routine?.categories.length) ||
        (title?.length && description?.length && categories.length)
    );

    const routineMediaComplete = Boolean(
      cover ||
        youtubeUrl?.length ||
        promoVideo ||
        (routine &&
          (!routine?.cover.url.startsWith('data') ||
            routine?.youtubeUrl ||
            routine?.promoVideo))
    );
    const routineActivitiesComplete = Boolean(
      routine &&
        routine.days.length &&
        routine.days.every((day) => day.activities.length)
    );

    return {
      1: routineOverviewComplete,
      2: routineMediaComplete,
      3: routineActivitiesComplete,
      4: routine?.isPublished ?? false,
    };
  }, [mediaForm, overviewForm, routine]);

  const goNextStep = useCallback(() => {
    setStep((prevStep) => (prevStep === 4 ? prevStep : prevStep + 1));
  }, []);

  const handleOverviewSaveAndContinue = useCallback(
    async (routineData: OverviewForm) => {
      if (routine) {
        await updateRoutine(
          new UpdateRoutineInput({ id: Number(routine.id), ...routineData })
        );
      } else {
        await createRoutine(new CreateRoutineInput(routineData));
      }

      goNextStep();
    },
    [createRoutine, goNextStep, routine, updateRoutine]
  );

  const handleMediaSaveAndContinue = useCallback(
    async (routineData: MediaAndAttachmentsForm) => {
      if (routine) {
        await updateRoutine(
          new UpdateRoutineInput({ id: Number(routine.id), ...routineData })
        );

        goNextStep();
      }
    },
    [goNextStep, routine, updateRoutine]
  );

  const handleActivitiesSaveAndContinue = useCallback(async () => {
    if (routine && routine.days.length && routine.days[0].activities.length) {
      await updateRoutine(
        new UpdateRoutineInput({
          id: Number(routine.id),
          daysOrder: routine.days.map((day) => Number(day.id)),
        })
      );

      goNextStep();
    } else {
      setStepErrors((prevState) => ({
        ...prevState,
        3: true,
      }));
    }
  }, [goNextStep, routine, updateRoutine]);

  const handlePublish = useCallback(
    async (routineData: PublishForm) => {
      if (routine) {
        await updateRoutine(
          new UpdateRoutineInput({
            id: Number(routine.id),
            isComplete: true,
            isPublished: true,
            ...routineData,
          })
        );

        setIsComplete(true);
      }
    },
    [routine, updateRoutine]
  );

  const handleSave = useCallback(async () => {
    await overviewForm.trigger();
    await mediaForm.trigger();

    const isOverviewFormValid = overviewForm.formState.isValid;
    const isMediaFormValid = mediaForm.formState.isValid;

    const needOverviewSave =
      overviewForm.formState.isDirty && isOverviewFormValid;
    const needMediaSave = mediaForm.formState.isDirty && isMediaFormValid;

    if (needOverviewSave && !isOverviewFormValid) {
      setStepErrors((prevState) => ({
        ...prevState,
        1: true,
      }));
    }
    if (needMediaSave && !isMediaFormValid) {
      setStepErrors((prevState) => ({
        ...prevState,
        2: true,
      }));
    }

    if (!isOverviewFormValid || !isMediaFormValid) return;

    if (needOverviewSave)
      handleOverviewSaveAndContinue(overviewForm.getValues());
    if (needMediaSave) handleMediaSaveAndContinue(mediaForm.getValues());

    enqueueSnackbar('Your changes are saved', {
      variant: 'success',
    });
  }, [
    enqueueSnackbar,
    handleMediaSaveAndContinue,
    handleOverviewSaveAndContinue,
    mediaForm,
    overviewForm,
  ]);

  useEffect(() => {
    if (isCreateRoutineSuccess && createdRoutine) {
      setRoutineSlug(createdRoutine?.slug);
    }
  }, [createdRoutine, isCreateRoutineSuccess]);

  useEffect(() => {
    if (isOverviewSubmitted)
      setStepErrors((prevStepErrors) => ({
        ...prevStepErrors,
        1: !isOverviewValid,
      }));
  }, [isOverviewSubmitted, isOverviewValid]);

  useEffect(() => {
    if (isUpdateRoutineSuccess && isMediaSubmitted)
      setStepErrors((prevStepErrors) => ({
        ...prevStepErrors,
        2: !routineHasCover,
      }));
  }, [isMediaSubmitted, isUpdateRoutineSuccess, routineHasCover]);

  useEffect(() => {
    if (isError)
      enqueueSnackbar(updateErrorMessage, {
        variant: 'error',
      });
  }, [enqueueSnackbar, updateErrorMessage, isError]);

  return (
    <RoutineBuilderContent>
      <RoutineBuilderStep>
        {step === 0 && <GetStarted goNextStep={goNextStep} />}
        {step === 1 && (
          <Overview
            form={overviewForm}
            routine={routine}
            handleSave={handleOverviewSaveAndContinue}
          />
        )}
        {step === 2 && (
          <MediaAttachments
            form={mediaForm}
            routine={routine}
            handleSave={handleMediaSaveAndContinue}
          />
        )}
        {step === 3 && routine && (
          <Activities
            routine={routine}
            handleSave={handleActivitiesSaveAndContinue}
          />
        )}
        {step === 4 && routine && (
          <Publish
            form={publishForm}
            routine={routine}
            handlePublish={handlePublish}
            isPublishDisabled={isPublishDisabled}
          />
        )}
      </RoutineBuilderStep>
      <Stepper
        currentStep={step}
        stepErrors={stepErrors}
        stepCompleteness={stepCompleteness}
        isSaveDisabled={isSaveDisabled}
        handlePreview={() => setIsPreviewOpen(true)}
        handleSave={handleSave}
        handleStepClick={setStep}
      />
      {routine && (
        <Preview
          routine={routine}
          open={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
      {routine && (
        <CompleteModal
          open={isComplete}
          onClose={() => setIsComplete(false)}
          routine={routine}
        />
      )}
    </RoutineBuilderContent>
  );
}

RoutineBuilder.defaultProps = {
  slug: undefined,
  initialStep: 0,
};

export default RoutineBuilder;
