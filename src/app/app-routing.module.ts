import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {DriverComponent} from './driver/driver.component';
import {PassengerComponent} from './passenger/passenger.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'driver',
    component:DriverComponent
  },
  {
    path:'passenger',
    component:PassengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
