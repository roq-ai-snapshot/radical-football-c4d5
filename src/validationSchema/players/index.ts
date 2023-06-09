import * as yup from 'yup';
import { playerNoteValidationSchema } from 'validationSchema/player-notes';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
  academy_id: yup.string().nullable().required(),
  player_note: yup.array().of(playerNoteValidationSchema),
});
