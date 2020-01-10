import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaComponent } from './nasa/nasa.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'nasa',
    component : NasaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
