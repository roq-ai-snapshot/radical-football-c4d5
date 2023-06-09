import { PlayerNoteInterface } from 'interfaces/player-note';
import { UserInterface } from 'interfaces/user';
import { CoachInterface } from 'interfaces/coach';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  coach_id?: string;
  academy_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player_note?: PlayerNoteInterface[];
  user?: UserInterface;
  coach?: CoachInterface;
  academy?: AcademyInterface;
  _count?: {
    player_note?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  coach_id?: string;
  academy_id?: string;
}
