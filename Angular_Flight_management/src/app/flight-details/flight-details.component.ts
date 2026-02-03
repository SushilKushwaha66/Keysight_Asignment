import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight, FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight: Flight | undefined;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlightById(id).subscribe(data => {
      this.flight = data;
    });
  }

}
