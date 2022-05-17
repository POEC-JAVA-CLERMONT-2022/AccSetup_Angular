import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionViewComponent} from "./session-view/session-view.component";
import {SessionListComponent} from "./session-list/session-list.component"


const routes: Routes = [
  { path: 'session', component: SessionViewComponent },
  { path: 'list', component: SessionListComponent },
  { path: '', component: SessionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
