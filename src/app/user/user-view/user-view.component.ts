import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {select, Store} from '@ngrx/store';
import {selectUsers} from '../store/selector/user.selectors';
import {UserState} from '../store/reducer/user.reducer';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  users$: Observable<User[]>;

  constructor(private store: Store<UserState>) {
    this.users$ = this.store.pipe(select(selectUsers));
  }
}
