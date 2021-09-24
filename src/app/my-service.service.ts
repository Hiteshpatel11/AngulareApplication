import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable()
export class MyServiceService {

  private message = new BehaviorSubject('my first message');
  currentMsg = this.message.asObservable();
  constructor() { }

  changeMessage(message: string){
    this.message.next(message);
  }

}