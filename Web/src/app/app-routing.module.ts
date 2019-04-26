import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosComponent }      from './dinos/dinos.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DinoDetailComponent }  from './dino-detail/dino-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dinos', component: DinosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:name', component: DinoDetailComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}