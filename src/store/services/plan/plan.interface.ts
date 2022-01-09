import { PlannedDay } from '@store/services/plan/planned-day.interface';

export interface Plan {
  id: number;

  plannedDays: PlannedDay[];
}

export interface RemoveRoutineFromPlanResponse {
  removeRoutineFromPlan: Pick<Plan, 'id'>;
}

export interface AddRoutineToPlanResponse {
  addRoutineToPlan: Pick<Plan, 'id'>;
}

export interface ChangeRoutineStartDateResponse {
  changeRoutineStartDate: Pick<Plan, 'id'>;
}

export interface ChangeRoutineStartDateArgs {
  routineId: number;
  startDate: string;
}
