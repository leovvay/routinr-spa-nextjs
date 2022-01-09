import { Activity } from '@store/services/routines/activity.interface';

export enum RepetitionType {
  noRepeat,
  everyDay,
  weekdays,
  weekends,
}

export interface Day {
  id: number;

  weekday: number;

  repetitionType: RepetitionType;

  repetitionEndDate: string | null;

  routineId: number;

  activities: Activity[];
}

export type CreateDayInput = Omit<Day, 'id' | 'activities'>;
export type UpdateDayInput = Partial<Omit<Day, 'routineId' | 'activities'>>;

export interface CreateDayResponse {
  createDay: Pick<Day, 'id'>;
}

export interface UpdateDayResponse {
  updateDay: Pick<Day, 'id'>;
}

export interface DeleteDayResponse {
  deleteDay: Pick<Day, 'id'>;
}
