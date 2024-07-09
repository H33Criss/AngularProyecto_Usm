import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Car } from '../../models/cars.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  constructor(
    private readonly carsService: CarsService
  ) {}

  @Input() car:Car;

  onClickLike(id: string) {
    console.log(id)
    this.carsService.likeCar(id)
  }

}
