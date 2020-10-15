import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamMainComponent } from './components/team-main/team-main.component';


const routes: Routes = [
  {
    path: '', component: TeamMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
