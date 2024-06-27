import { Component, OnInit } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { ByIdComponent } from './by-id/by-id.component';
import { RouterModule } from '@angular/router';
import { Car } from '../../models/cars.model';
import { CarsService } from '../../services/cars.service';
import { CarCardComponent } from '../../shared/car-card/car-card.component';

@Component({
  standalone: true,
  imports: [RouterModule, ListaComponent, ByIdComponent, CarCardComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.scss'
})
export class AutosComponent implements OnInit {

  cars: Car[] = []

  constructor(
    private readonly carsService: CarsService
  ) { }

  async ngOnInit() {
    this.cars = this.carsService.getCars()
    console.log(this.cars)
  }

}
