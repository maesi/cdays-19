import {Topic} from './topic';

export interface Meeting {
  id: number;
  datum: string;
  ort: string;
  created: boolean;
  participate: boolean;
  topic: Topic;
}
