import { Status } from '../../CreateTaskForm/enums/Status';

export type TaskCounterStatusType =
  | Status.todo
  | Status.completed
  | Status.inProgress;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
}
