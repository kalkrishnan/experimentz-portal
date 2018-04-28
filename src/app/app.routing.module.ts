import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TestComponent} from './test/test.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListTestsComponent} from './listtests/listtests.component';


const routes: Routes = [
 { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent },
   {path: 'dashboard', component: DashboardComponent },
   {path: 'listtests', component: ListTestsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
