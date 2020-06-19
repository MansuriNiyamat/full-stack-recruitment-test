import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itineraries;
  constructor(public app: AppService) {  }

  ngOnInit() {
    this.app.getAll().subscribe(
      res => {
        this.itineraries = res.itineraries;
      },
      err => {console.log(err);
      }
    );
  }
}