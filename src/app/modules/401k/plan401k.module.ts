import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route, Routes} from '@angular/router';
import { Plan401Component } from './components/plan401/plan401.component';
import { AssetmanagerComponent } from './components/assetmanager/assetmanager.component';
import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
  {path: 'plan', component: Plan401Component},
  {path: 'assets', component: AssetmanagerComponent}
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Plan401Component,
    AssetmanagerComponent
  ],
  exports:[
    RouterModule
  ]
})
export class Plan401kModule { }
