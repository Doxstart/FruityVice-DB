import { Component, OnInit } from '@angular/core';
import { Fruits } from 'src/app/models/fruits';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit{

  fruits: Fruits[] = [];

  constructor(public connService: ConnectionService){
  }

  ngOnInit(): void {
    this.connService.getFruits().subscribe({
      next: data => this.fruits = data,
      error: err => console.log(err)
    })
  }


}
