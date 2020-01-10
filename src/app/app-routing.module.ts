import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaComponent } from './nasa/nasa.component';
import { HomeComponent } from './home/home.component';
import { MarsComponent } from './mars/mars.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'nasa',
    component : NasaComponent
  },
  {
    path: 'mars',
    component: MarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
