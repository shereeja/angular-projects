import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-regiuser',
  templateUrl: './regiuser.component.html',
  styleUrls: ['./regiuser.component.css']
})
export class RegiuserComponent {
hotels=["kochi", "palakkaad","munnar", "kozhikod"]
usermodel=new User("","sheree@gmail.com",99999999,'',"family",true);
}
