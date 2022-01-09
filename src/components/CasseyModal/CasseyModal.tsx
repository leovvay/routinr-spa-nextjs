import React from 'react';

import { Stack, Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { SwiperSlide } from 'swiper/react';

import { useIsMobileVersion } from '@hooks';
import Text from '@components/Text';
import ModalCard from '@components/ModalCard';
import Image from '@components/Image';

import {
  ContentContainer,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  DialogStack,
  CardsContainer,
  MobileIndexCategorySwiper,
  MobileModalCloseButton,
  MobileCloseIconContainer,
} from './CasseyModal.styled';

interface CasseyModalProps {
  modalOpen: boolean;
  onModalClose(): void;
}

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

const routinesSwiperSettings = {
  slidesPerView: 'auto' as const,
  spaceBetween: 32,
  grabCursor: true,
  touchEventsTarget: 'container' as const,
};

const desktopStyle = {
  backgroundColor: 'var(--modal-bg-color)',
  borderRadius: '32px',
  minWidth: '800px',
};

const mobileStyle = {
  backgroundColor: 'var(--modal-bg-color)',
  width: '100%',
  maxHeight: '100%',
  margin: '0',
};

export default function CasseyModal({
  modalOpen,
  onModalClose,
}: CasseyModalProps): JSX.Element {
  const isMobile = useIsMobileVersion();
  return (
    <Dialog
      open={modalOpen}
      onClose={onModalClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: isMobile ? mobileStyle : desktopStyle,
      }}
    >
      <ModalContent>
        <DialogStack>
          <ModalHeader
            isMobile={isMobile}
            background='url("Cassey_modal.svg") no-repeat 50% 10%/cover,
  url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICBpZD0ic25hcHNob3QtNTQ3NjUiIHdpZHRoPSIxODAiIGhlaWdodD0iMjg3IiB2aWV3Qm94PSIwIDAgMTgwIDI4NyI+PGRlc2M+VGhpcyBpbWFnZSB3YXMgbWFkZSBvbiBQYXR0ZXJuaW5qYS5jb208L2Rlc2M+PGRlZnM+CjwhLS0gaW1hZ2UgMjAyMjUgLS0+CjxnIGlkPSJ0cmFuc2Zvcm1lZC0yMDIyNSIgZGF0YS1pbWFnZT0iMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNDA5OTk5OTk5OTk5OTk3LCAxNTAuOTgpIHJvdGF0ZSgwLCA1Ny41LCA1MikiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA0cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA0Ij48ZyBpZD0ib3JpZ2luYWwtMjAyMjUiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgMjAyMjUgLS0+Cgo8IS0tIGltYWdlIDU3MTE5IC0tPgo8ZyBpZD0idHJhbnNmb3JtZWQtNTcxMTkiIGRhdGEtaW1hZ2U9IjU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MS40MDAwMDAwMDAwMDAwMDYsIDEyLjQwOTk5OTk5OTk5OTk5Nykgcm90YXRlKDM1NywgNTcuNSwgNTMuNSkiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA3cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA3Ij48ZyBpZD0ib3JpZ2luYWwtNTcxMTkiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgNTcxMTkgLS0+CjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI4NyIgZmlsbD0icmdiYSgyMDEsIDIwNywgMjE5LCAwKSI+PC9yZWN0Pjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjwvc3ZnPg==)
    center/13%,
  #c9cfdb;'
          />
          <ContentContainer isMobile={isMobile}>
            <Stack spacing={3} width="100%">
              <Text
                fontSize={isMobile ? 30 : 40}
                lineHeight={isMobile ? 34 : 44}
                letterSpacing="-0.02em"
                fontFamily="var(--font-secondary)"
                weight={isMobile ? 600 : 700}
                color="var(--text-landing-white)"
              >
                Cassey Maynard
              </Text>
              <Text
                fontSize={isMobile ? 20 : 24}
                lineHeight={isMobile ? 30 : 34}
                letterSpacing={isMobile ? '-0.04em' : '-0.01em'}
                fontFamily="var(--font-secondary)"
                color="var(--text-landing-white)"
              >
                As a fitness and lifestyle influencer Cassey built an 8-week
                wellness program on Routinr and sold it to her followers. Her
                8-week program included guided meditations, dance workouts,
                journal prompts, recipes and health tips all delivered
                seamlessly to her followers in Routinr’s interactive content
                calendar. Cassey now has a range of different programs on
                Routinr selling from $50 to $1,000. As Cassey makes new
                routines, programs, and new premium posts, her followers keep
                coming back as repeat customers.
              </Text>

              {!isMobile && (
                <CardsContainer>
                  <ModalCard
                    imageSrc="/week_pro_image.png"
                    iconSrc="/modal_calendar_blue.svg"
                    textColor="#2CE8E0"
                    textContent="Energise your life - 8 Week Program"
                    textDays="56"
                    bgColor="#1A2022"
                  />
                  <ModalCard
                    imageSrc="/workout_pro_image.png"
                    iconSrc="/modal_calendar_pink.svg"
                    textColor="#EFA2B4"
                    textContent="5x5 Mini Workout Program"
                    textDays="5"
                    bgColor="#21211F"
                  />
                  <ModalCard
                    imageSrc="/stretch_routine_image.png"
                    iconSrc="/modal_calendar_white.svg"
                    textColor="#FAF0E7"
                    textContent="WFH - Daily Stretch Routine"
                    textDays="5"
                    bgColor="#20120D"
                  />
                </CardsContainer>
              )}
            </Stack>
          </ContentContainer>
          {isMobile && (
            <MobileIndexCategorySwiper {...routinesSwiperSettings}>
              <SwiperSlide>
                <ModalCard
                  imageSrc="/week_pro_image.png"
                  iconSrc="/modal_calendar_blue.svg"
                  textColor="#2CE8E0"
                  textContent="Energise your life - 8 Week Program"
                  textDays="56"
                  bgColor="#1A2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ModalCard
                  imageSrc="/workout_pro_image.png"
                  iconSrc="/modal_calendar_pink.svg"
                  textColor="#EFA2B4"
                  textContent="5x5 Mini Workout Program"
                  textDays="5"
                  bgColor="#21211F"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ModalCard
                  imageSrc="/stretch_routine_image.png"
                  iconSrc="/modal_calendar_white.svg"
                  textColor="#FAF0E7"
                  textContent="WFH - Daily Stretch Routine"
                  textDays="5"
                  bgColor="#20120D"
                />
              </SwiperSlide>
            </MobileIndexCategorySwiper>
          )}
        </DialogStack>
        {isMobile && (
          <MobileModalCloseButton onClick={onModalClose}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Text
                fontSize={16}
                lineHeight={22}
                fontFamily="var(--font-secondary)"
                letterSpacing="0.01em"
                color="var(--text-landing-white)"
              >
                Close
              </Text>
              <MobileCloseIconContainer>
                <Image src="/close_icon.svg" width="15px" height="15px" />
              </MobileCloseIconContainer>
            </Stack>
          </MobileModalCloseButton>
        )}
        {!isMobile && (
          <ModalCloseButton onClick={onModalClose}>
            <Image src="/desktop_close_icon.svg" width="48px" height="48px" />
          </ModalCloseButton>
        )}
      </ModalContent>
    </Dialog>
  );
}
