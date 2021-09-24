import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  lastName: string;
  constructor(){ console.log("app Componect");
  this.lastName="myName";
  }

  public getVal($event){
    console.log(" test " + $event);
    this.lastName = $event;
  }
}
