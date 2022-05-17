import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionViewComponent} from "./session-view/session-view.component";


const routes: Routes = [
  { path: 'session', component: SessionViewComponent },
  { path: '', component: SessionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
