import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardStackComponent } from './card-stack/card-stack.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutComponent } from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {MatchesComponent} from './matches/matches.component';

const routes: Routes = [
  {
    path: 'cards', 
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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    redirectTo: '/cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
