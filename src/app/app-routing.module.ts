import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardStackComponent } from './card-stack/card-stack.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutComponent } from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {MatchesComponent} from './matches/matches.component';
import {NotificationComponent} from "./notification/notification.component";
import {AppointmentComponent} from "./appointment/appointment.component";

const routes: Routes = [
  {
    path: 'explore',
    component: CardStackComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'matches',
    component: MatchesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'notifications',
    component: NotificationComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'notifications/appointment',
    component: AppointmentComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'appointment/:id/create',
    component: AppointmentComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'appointment/:id',
    component: AppointmentComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    redirectTo: '/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
