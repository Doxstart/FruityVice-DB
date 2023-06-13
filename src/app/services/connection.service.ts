import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Fruits } from '../models/fruits';
import { Prisoners } from '../models/prisoners';
import { Image } from '../models/images';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  // readonly BASE_URL = "https://www.fruityvice.com/api/fruit/all";
  readonly BASE_URL = "https://api.fbi.gov/wanted/v1/list";


  constructor(private http: HttpClient) {}

  // getFruits(): Observable<Fruits[]>{
  //   return this.http.get<any>(this.BASE_URL)
  //   .pipe(
  //     map((data: any) => data)
  //   )
  // }

  getPrisoners(): Observable<Prisoners[]>{
    return this.http.get<any>(this.BASE_URL)
    .pipe(
      map((data: any) => data.items)
    )
  }

  getImages(): Observable<Image[]>{
    return this.getPrisoners()
    .pipe(
      map((data: any) => data.images)
    )
  }
}
