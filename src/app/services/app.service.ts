import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppService {

  legs = [];
  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get('assets/flights.json').pipe(
      tap(
        data => {
          this.legs = data.legs;
      },
        error => console.log(error)
      )
    );
  }
}
