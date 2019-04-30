import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardStackComponent } from './card-stack/card-stack.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'cards', 
    component: CardStackComponent,
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
