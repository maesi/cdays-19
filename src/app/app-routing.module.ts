import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardStackComponent } from './card-stack/card-stack.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'cards', component: CardStackComponent },
  {
    path: 'login',
    component: LoginComponent
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
