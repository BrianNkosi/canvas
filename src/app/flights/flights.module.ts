import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { ShellFlightsComponent } from './shell-flights/shell-flights.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FlightsComponent, ShellFlightsComponent],
  imports: [CommonModule, SharedModule, FlightsRoutingModule],
})
export class FlightsModule {}
