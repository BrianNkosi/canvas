import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { HomeComponent } from './home.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SearchHotelsComponent } from './search-hotels/search-hotels.component';



@NgModule({
  declarations: [
    HomeShellComponent,
    HomeComponent,
    SearchFlightsComponent,
    SearchHotelsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
