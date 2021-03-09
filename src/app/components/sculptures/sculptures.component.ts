import { OnInit, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtObject } from 'src/app/models/models';
import { SculpturesService } from 'src/app/services/sculptures/sculptures.service';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl, 'PLN ');

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.scss']
})
export class SculpturesComponent implements OnInit {
  sculptures: Observable<ArtObject[]>;

  constructor(private http: SculpturesService) { }

  ngOnInit() {
    this.sculptures = this.http.getSculptures();
  }
}
