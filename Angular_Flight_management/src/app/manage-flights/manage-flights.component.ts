import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight, FlightService } from '../services/flight.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css']
})
export class ManageFlightsComponent implements OnInit {

  flights: Flight[] = [];
  filteredFlights: Flight[] = [];
  searchText: string = '';
  viewMode: 'table' | 'card' = 'table';

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.refreshFlights();
  }

  refreshFlights(): void {
    this.flightService.getFlights().subscribe(data => {
      this.flights = data;
      this.filterFlights();
    });
  }

  filterFlights(): void {
    if (!this.searchText) {
      this.filteredFlights = this.flights;
    } else {
      const lowerText = this.searchText.toLowerCase();
      this.filteredFlights = this.flights.filter(f =>
        f.flightNo.toLowerCase().includes(lowerText) ||
        f.origin.toLowerCase().includes(lowerText) ||
        f.destination.toLowerCase().includes(lowerText)
      );
    }
  }

  deleteFlight(id: number): void {
    if (confirm('Are you sure you want to delete this flight?')) {
      this.flightService.deleteFlight(id);
      this.refreshFlights();
    }
  }

  editFlight(id: number): void {
    this.router.navigate(['/admin/edit-flight', id]);
  }

}
