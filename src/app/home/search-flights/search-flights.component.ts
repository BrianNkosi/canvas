import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightType } from 'src/app/models/flight-types';
import { FormMessages } from 'src/app/shared/form-messages';
import { GenericValidator } from 'src/app/shared/generic-validator';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss'],
})
export class SearchFlightsComponent implements OnInit {
  public type = true;
  private validator: GenericValidator;
  public flightsForm: FormGroup = new FormGroup({});
  public flightType: FlightType = FlightType.Domestic;
  public message: { [key: string]: string } = {} as {
    [key: string]: string;
  };
  constructor(private fb: FormBuilder) {
    this.validator = new GenericValidator(FormMessages);
  }

  ngOnInit(): void {
    this.flightsForm = this.FlightsForm();

    this.flightsForm.valueChanges.subscribe(
      () => (this.message = this.validator.processMessages(this.flightsForm))
    );
  }

  public FlightsForm(): FormGroup {
    return this.fb.group({
      flightType: [this.flightType],
      fromFlight: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      toFlight: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      departure: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
      adults: [0, [Validators.required]],
    });
  }

  public saveFlights(): void {
    console.log(this.flightsForm.value);
  }

  public toggle(dest: string): void {
    switch (dest) {
      case FlightType.Domestic:
        this.flightsForm.patchValue({ flightType: FlightType.Domestic });
        this.type = true;
        break;
      case FlightType.International:
        this.flightsForm.patchValue({ flightType: FlightType.International });
        this.type = false;
        break;
      default:
        break;
    }
  }
}
