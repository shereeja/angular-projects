import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegiuserComponent } from './regiuser/regiuser.component';



const routes: Routes = [
  {path :"login",component:LoginuserComponent},

  {path: "regi",component:RegiuserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
