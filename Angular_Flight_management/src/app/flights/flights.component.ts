import { Component, OnInit } from '@angular/core';
import { Flight, FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(data => {
      this.flights = data;
    });
  }

}
