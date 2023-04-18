
 import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../model1';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

showPackage = 0;

itemn : any;


  item1 : Item[]=
  [
    {
      img1: "assets/am.jpg",
      place:"Kochi",
      company1:"Amritara Heritage Hotel",
      amount1:3000,
      placefor:"beach"
    },
    {
      img1: "assets/b2.jpg",
      place:"Alappuzha",
      company1:"Symphony Beach Hotel",
      amount1:3500,
      placefor:"beach"
    }
    ,
    {
      img1: "assets/b3.jpg",
      place:"Trivandrum",
      company1:"Laira Beach Hotel",
      amount1:4200,
      placefor:"beach"
    },
    {
      img1: "assets/m1.jpg",
      place:"Gavi",
      company1:"Mount High Hotel",
      amount1:2800,
      placefor:"hill"
    },
    {
      img1: "assets/m2.jpg",
      place:"Idukki",
      company1:"Hillzone Hotel",
      amount1:3200,
      placefor:"hill"
    },
    {
      img1: "assets/m3.jpg",
      place:"Munnar",
      company1:"Hightop Hills Hotel",
      amount1:3700,
      placefor:"hill"
    },
    {
      img1: "assets/p1.jpg",
      place:" Thrissur",
      company1:"Vento Park Hotel",
      amount1:2900,
      placefor:"party"
    },
    {
      img1: "assets/p2.jpg",
      place:"Palakkad",
      company1:"Heaven Row Hotel",
      amount1:3800,
      placefor:"party"
    },
    {
      img1: "assets/p3.jpg",
      place:"Kochi",
      company1:"Kyla Lux Hotel",
      amount1:4200,
      placefor:"party"
    }
  ]
 
  placefil:String="";
 
filterPackage(value:any)
{
  

  this.placefil=value;
}
displayallPackage()
{
  this.placefil='';
}

displayPackageSection(n:any)
{
 this.itemn=n;
 this.showPackage=1;
  
}

displayBookSection(n:any)
{
  this.itemn=n;
   this.showPackage=2;
   
 }
goBackClicked($event:any)
{
  this.showPackage=$event;
}

@Output()
goToPackage = new EventEmitter

goBack()
{
this.goToPackage.emit(this.showPackage)
}

}





