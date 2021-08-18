import { createAction, props } from '@ngrx/store';
import {User} from '../../../models/user';

// createAction<T extends string, C extends Creator>(type: T, config?: C | { _as: "props"; }): ActionCreator<T>
// Returns an object in the shape of the Action interface
export const addUser = createAction(
  '[User] Add User',
  (user: User) => ({user})
);




