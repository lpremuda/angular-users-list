import {Action, createReducer, on} from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import {User} from '../../../models/user';

export const userFeatureKey = 'user';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: []
};

// Creates a reducer function to handle state transitions
// Parameters:
//    initialState
//    ons
// Returns: ActionReducer<S, A>: A reducer function.
export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state: UserState, {user}) => ({...state, users: [...state.users, user] })
  )
);

export function reducer(state: UserState | undefined, action: Action): any {
  return userReducer(state, action);
}
