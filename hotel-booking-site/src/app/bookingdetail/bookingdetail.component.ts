import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Item } from '../model1';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent {

showPackage : any = 0;




  @Input()
  itemb:Item=new Item

  @Output()
goToPackage1= new EventEmitter

goBack()
{
this.goToPackage1.emit(this.showPackage)
}


    alert()
    {
      window.alert("Booked Successfully");
    }
  
}
