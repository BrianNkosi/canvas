import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { HomeComponent } from './home.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { SearchHotelsComponent } from './search-hotels/search-hotels.component';

const routes: Routes = [
  {
    path: '',
    component: HomeShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'flights', component: SearchFlightsComponent },
          { path: 'hotels', component: SearchHotelsComponent },
          { path: '', redirectTo: 'flights', pathMatch: 'full' },
        ],
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
