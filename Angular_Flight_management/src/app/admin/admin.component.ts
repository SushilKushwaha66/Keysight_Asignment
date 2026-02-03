import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  stats = { totalFlights: 0, destinations: 0, nextFlight: 'N/A' };

  constructor(public router: Router, private flightService: FlightService) { }

  ngOnInit(): void {
    const s = this.flightService.getStatistics();
    // In a real app this would likely be an Observable
    this.stats = s;
  }
}
