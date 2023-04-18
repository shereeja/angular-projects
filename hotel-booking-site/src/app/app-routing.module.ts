import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PackagesComponent } from './packages/packages.component';
import { StayComponent } from './stay/stay.component';




const routes: Routes = [
  {path: "register",loadChildren:()=>import('./register/register.module').then(mod=>mod.RegisterModule)},

  {path : "", component : StayComponent},

  {path : "stay", component : StayComponent},

  {path : "packages", component : PackagesComponent},

  {path : "contact-form" , component :  ContactFormComponent },

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
