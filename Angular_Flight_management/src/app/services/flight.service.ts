import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Flight {
  id: number;
  flightNo: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flights: Flight[] = [
    { id: 101, flightNo: 'AI-202', origin: 'New York', destination: 'London', date: '2023-11-20', time: '10:00 AM' },
    { id: 202, flightNo: 'BA-405', origin: 'London', destination: 'Paris', date: '2023-11-21', time: '02:30 PM' },
    { id: 303, flightNo: 'EK-500', origin: 'Dubai', destination: 'Mumbai', date: '2023-11-22', time: '08:45 PM' }
  ];

  constructor() { }

  getFlights(): Observable<Flight[]> {
    return of(this.flights);
  }

  getFlightById(id: number): Observable<Flight | undefined> {
    const flight = this.flights.find(f => f.id === id);
    return of(flight);
  }

  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }

  deleteFlight(id: number): void {
    this.flights = this.flights.filter(f => f.id !== id);
  }

  updateFlight(flight: Flight): void {
    const index = this.flights.findIndex(f => f.id === flight.id);
    if (index !== -1) {
      this.flights[index] = flight;
    }
  }

  getStatistics() {
    return {
      totalFlights: this.flights.length,
      destinations: new Set(this.flights.map(f => f.destination)).size,
      nextFlight: this.flights.length > 0 ? this.flights[0].time : 'N/A' // Simplified
    };
  }
}
