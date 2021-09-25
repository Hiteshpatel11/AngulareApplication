import { Component, VERSION } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [DataServiceService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  lastName: string;
  public data: string;
  public myMessage: string;
  constructor(private message: DataServiceService) {
    console.log('app Componect');
    this.message.updateMessage('hi HItesh');
    this.lastName = 'myName';
  }

  public getVal($event) {
    console.log(' test ' + $event);
    this.lastName = $event;
  }
}
