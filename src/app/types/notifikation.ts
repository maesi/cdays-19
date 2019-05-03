import {Topic} from "./topic";
import {Meeting} from "./meeting";
import {User} from "./user";

export interface Notifikation {
  id: number;
  typ: NotifikationTyp;
  read: boolean;
  relation: Topic | Meeting;
}

export enum NotifikationTyp {
  MATCH, EVENT, PARTIPICATE
}
