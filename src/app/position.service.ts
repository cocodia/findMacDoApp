import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Position from './Position';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PositionService {

  uri = "http://localhost:4000/position";
  
  constructor(private http: HttpClient) {}

   getPositions(code) {
    return this
            .http
            //.get(`${this.uri}/AK`);
           .get(`${this.uri}/${code}`);
    }

private subject = new Subject<any>();
/**locations setter* */
    sendLocations(locations: any[]) {
        this.subject.next({ array: locations });
    }
/**locations getter */
    getLocations(): Observable<any> {
        return this.subject.asObservable();
    }
}

