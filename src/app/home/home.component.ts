import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import { FlightModel } from '../../models/flight.model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //ovde smo definisali promenljivu, kako se podaci mogu prikazati unutar tajpskripta i po difoltu je null za ovo ispod
  public flights: FlightModel[] | null = null
  public error: string | null = null

  constructor() {
    FlightService.getFlights(0, 3)
    .then(rsp => this.flights = rsp.data.content)
    .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }
}
