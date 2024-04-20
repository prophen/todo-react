import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../CreateTaskForm/enums/Status';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return 'Todo';
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
};
