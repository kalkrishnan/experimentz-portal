import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ExperimentComponent} from './experiment/experiment.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListexperimentsComponent} from './listexperiments/listexperiments.component';


const routes: Routes = [
 { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'experiment', component: ExperimentComponent },
   {path: 'dashboard', component: DashboardComponent },
   {path: 'listexperiments', component: ListexperimentsComponent }
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
