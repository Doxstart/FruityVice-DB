import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Fruits } from '../models/fruits';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly BASE_URL = "https://www.fruityvice.com/api/fruit/all";

  constructor(private http: HttpClient) {
  }

  getFruits(): Observable<Fruits[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data)
    )
  }
}
