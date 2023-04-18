import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent {
  constructor(){

  }
  ngOnInit(){
}
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
