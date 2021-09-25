import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  //providers: [DataServiceService]
})
export class AboutComponent implements OnInit {
  public data: string;
  public subscription: Subscription;
  constructor(private message: DataServiceService) {
    this.subscription = this.message.getMessage().subscribe((d) => {
      this.data = d;
    });
    console.log(this.data);
  }

  ngOnInit() {}
}
