import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"", component:Layout1Component, children:[
    {path:"home", loadChildren:'./pages/home/home.module#HomeModule'},
    {path:"guitars", loadChildren:'./pages/guitars/guitars.module#GuitarsModule'},
    {path:"bass", loadChildren:'./pages/bass/bass.module#BassModule'},
    {path:"contact", loadChildren:'./pages/contact/contact.module#ContactModule'},
  ]},
];

@NgModule({
  declarations: [
    Layout1Component,
    HeaderComponent,
    FooterComponent,
    // FormComponent,
  ],
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy:PreloadAllModules
    })]
    ,
  exports: [RouterModule],
})
export class AppRoutingModule {}
