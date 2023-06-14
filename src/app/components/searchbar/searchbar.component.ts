import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Input()
  searchTerm: string = "";

  @Input()
  filterPick: string = "";

  products: Products[] = [];
  id: number = 0;

  constructor(public connServ: ConnectionService){

  }
  ngOnInit(): void {
    this.connServ.getProducts().subscribe({
      next: data => this.products = data as any as Products[],
      error: err => console.log(err)
    })
  }

  // submitForm(){
  //   this.connServ.searchProducts(this.searchTerm).subscribe({
  //     next: el => this.products = el as any as Products[],
  //     error: err => console.log(err)
  //   });

  //   this.searchTerm = "";
  // }

  // ^ FUNZIONA ^

  submitForm(){
    if(this.filterPick==="startsWithFilter"){
      this.connServ.searchWithStartsFilter(this.searchTerm); /*.subscribe({
        next: el => console.log(el)//this.products = el as any as Products[],
        error: err => console.log(err)
      })*/
    }
    if(this.filterPick==="isEqualToFilter"){
      this.connServ.searchWithEqualFilter(this.searchTerm);
    }
    if(this.filterPick==="endsWithFilter"){
      this.connServ.searchWithEndsFilter(this.searchTerm);
    }
    if(this.filterPick==="includesFilter"){
      this.connServ.searchProducts(this.searchTerm).subscribe({
        next: el => this.products = el as any as Products[],
        error: err => console.log(err)
      });
    }
    this.searchTerm = "";
  }
}
