import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  myDate: string | Date = new Date();
  fragment: string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {      
      if (fragment) {
        document.querySelector('#' + fragment).scrollIntoView();
      }
    });
  }
}
