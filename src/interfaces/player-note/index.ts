import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerNoteInterface {
  id?: string;
  note: string;
  player_id: string;
  coach_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface PlayerNoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  note?: string;
  player_id?: string;
  coach_id?: string;
}
