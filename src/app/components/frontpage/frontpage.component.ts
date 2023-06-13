import { Component, OnInit } from '@angular/core';
import { Fruits } from 'src/app/models/fruits';
import { Image } from 'src/app/models/images';
import { Prisoners } from 'src/app/models/prisoners';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit{

  fruits: Fruits[] = [];
  prisoners: Prisoners[] = [];
  images: Image[] = [];

  constructor(public connService: ConnectionService){
  }

  ngOnInit(): void {
    // this.connService.getFruits().subscribe({
    //   next: data => this.fruits = data,
    //   error: err => console.log(err)
    // })
    this.connService.getPrisoners().subscribe({
      next: data => this.prisoners = data as any as Prisoners[],
      error: err => console.log(err)
    })
    this.connService.getImages().subscribe({
      //next: data => this.images = data as any as Image[],
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }

}
