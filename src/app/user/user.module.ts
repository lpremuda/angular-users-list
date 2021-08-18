import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserViewComponent} from './user-view/user-view.component';
import {UserAddComponent} from './user-add/user-add.component';
import {StoreModule} from '@ngrx/store';
import {userFeatureKey, reducer} from './store/reducer/user.reducer';


@NgModule({
  declarations: [UserViewComponent, UserAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, reducer),
  ],
  exports: [
    UserViewComponent,
    UserAddComponent
  ]
})
export class UserModule {
}
