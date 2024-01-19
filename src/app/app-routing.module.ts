import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JsonViewComponent} from "./json-view/json-view.component";

const routes: Routes = [
  {path: "jsonread", component: JsonViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
