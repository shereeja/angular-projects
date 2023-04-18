import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
signindetail:any=[];
usermodel= {
email:"",
pswd:""

}
constructor(private service:ServiceService ){}
ngOnInit():void
{
  this.service.getdetails().subscribe((regs:any)=>{
  /*console.log(regs[regs.length-1]);*/
    for(var i=0;i<regs.length;i++){
  
this.signindetail[i]=regs[i].email;
}  
})

}
onSubmit(data:any){
//  console.log(this.usermodel.email);
for(var j=0;j<this.signindetail.length;j++){

  console.log(this.signindetail[j])
  if(this.signindetail[j]==this.usermodel.email)
  {
    console.log("signin success");

  }
  else
  {
    console.log("please register");
  }

}
}
}