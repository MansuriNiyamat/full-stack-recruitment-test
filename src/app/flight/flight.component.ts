import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  @Input()
  legArray;

  listArray = [];
  constructor(public app: AppService) {  }

  ngOnInit() {
    this.legArray.forEach(element => {
       this.listArray.push(this.app.legs.filter(flight => element === flight.id)[0]) ;
    });
  }

}
