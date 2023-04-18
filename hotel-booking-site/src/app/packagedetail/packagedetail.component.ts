import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Item } from '../model1';

@Component({
  selector: 'app-packagedetail',
  templateUrl: './packagedetail.component.html',
  styleUrls: ['./packagedetail.component.css']
})
export class PackagedetailComponent implements OnInit{


  ngOnInit(): void {
    
  }

  showPackage:any=0;
  


  @Input()
  childItem: Item = new Item;

@Output()
goToPackage= new EventEmitter

goBack()
{
this.goToPackage.emit(this.showPackage)
}

}
