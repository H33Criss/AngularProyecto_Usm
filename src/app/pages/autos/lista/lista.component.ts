import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { Car } from '../../../models/cars.model';
import { CarCardComponent } from '../../../shared/car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CarCardComponent, 
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements OnInit {
  cars: Car[] = [];

  constructor(private readonly carsService: CarsService) {}

  async ngOnInit() {
    this.cars = this.carsService.getCars();
    console.log(this.cars);
  }
}
