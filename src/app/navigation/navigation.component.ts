import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {
    console.log('navigate Page');
  }
  @Input() childPro: string;
  @Output() myEvent = new EventEmitter();
  msg1: string;
  ngOnInit() {
    this.msg1 = this.childPro;
  }
  public getValue() {
    //alert(this.childPro);
    console.log(this.childPro);
    //
    this.myEvent.emit(this.msg1);
  }
  sendValue() {}
}
