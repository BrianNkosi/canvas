import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFlightsComponent } from './home/search-flights/search-flights.component';
import { SearchHotelsComponent } from './home/search-hotels/search-hotels.component';
import { HomeShellComponent } from './home/home-shell/home-shell.component';
import { FlightsComponent } from './flights/flights.component';
import { ShellFlightsComponent } from './flights/shell-flights/shell-flights.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
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
