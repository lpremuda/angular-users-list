import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {User} from '../../models/user';
import {addUser} from '../store/action/user.actions';
import {UserState} from '../store/reducer/user.reducer';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {

  constructor(private store: Store<UserState>) {
  }

  addUser(userName: string): void {
    const user = new User();
    user.name = userName;
    this.store.dispatch(addUser(user));
  }
}
