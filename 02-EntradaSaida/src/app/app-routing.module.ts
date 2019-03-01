import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello/hello.component';
import { SomaComponent } from './soma/soma.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  loadChildren: './home/home.module#HomePageModule' },
  { path: 'hello', component: HelloComponent },
  { path: 'form', component: FormComponent },
  { path: 'soma', component: SomaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
