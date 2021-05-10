import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { ShellFlightsComponent } from './shell-flights/shell-flights.component';

const routes: Routes = [
  {
    path: '',
    component: ShellFlightsComponent,
    children: [
      {
        path: 'home',
        component: FlightsComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
