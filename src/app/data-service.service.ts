import { Injectable } from '@angular/core';
import { Subject, observable, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataServiceService {
  updateMessage$: Observable<string>;
  //private sublingMsg = new Subject<string>();
  private sublingMsg = new BehaviorSubject('default message');
  constructor() {
    console.log('service is call');
  }

  public getMessage(): Observable<string> {
    console.log('service get Method is call ' + this.sublingMsg[0]);
    return this.sublingMsg.asObservable();
  }

  public updateMessage(message: string): void {
    console.log('service update Method is call ' + message);
    this.sublingMsg.next(message);
    console.log('service update Method is call ' + this.sublingMsg);
  }
}
