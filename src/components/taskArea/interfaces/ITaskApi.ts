import { Status } from '../../CreateTaskForm/enums/Status';
import { Priority } from './../../CreateTaskForm/enums/Priority';
export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
