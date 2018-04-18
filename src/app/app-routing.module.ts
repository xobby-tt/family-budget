import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: 'info', component: InfoComponent},
  { path: 'info/entity', component: AddComponent},
  { path: '', redirectTo: '/info', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }