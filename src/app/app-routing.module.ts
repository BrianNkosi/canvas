import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFlightsComponent } from './home/search-flights/search-flights.component';
import { SearchHotelsComponent } from './home/search-hotels/search-hotels.component';
import { HomeShellComponent } from './home/home-shell/home-shell.component';
import { FlightsComponent } from './flights/flights.component';
import { ShellFlightsComponent } from './flights/shell-flights/shell-flights.component';

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
  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights.module').then((m) => m.FlightsModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
