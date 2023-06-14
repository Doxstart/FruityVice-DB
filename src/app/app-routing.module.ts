import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

const routes: Routes = [
  {path: 'search', component: SearchbarComponent},
  {path: 'home', component: FrontpageComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
