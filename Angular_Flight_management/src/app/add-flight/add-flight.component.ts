import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flightNo: string = '';
  origin: string = '';
  destination: string = '';
  date: string = '';
  time: string = '';
  isEditMode: boolean = false;
  flightId: number | null = null;

  constructor(private flightService: FlightService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.flightId = +id;
      this.flightService.getFlightById(this.flightId).subscribe(flight => {
        if (flight) {
          this.flightNo = flight.flightNo;
          this.origin = flight.origin;
          this.destination = flight.destination;
          this.date = flight.date;
          this.time = flight.time;
        }
      });
    }
  }

  saveFlight(): void {
    const flightData = {
      id: this.isEditMode && this.flightId ? this.flightId : Math.floor(Math.random() * 1000),
      flightNo: this.flightNo,
      origin: this.origin,
      destination: this.destination,
      date: this.date,
      time: this.time
    };

    if (this.isEditMode) {
      this.flightService.updateFlight(flightData);
    } else {
      this.flightService.addFlight(flightData);
    }

    this.router.navigate(['/admin/manage-flights']);
  }
}
