import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { Car } from '../../../models/cars.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-by-id',
  standalone: true,
  imports: [MatIcon, MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './by-id.component.html',
  styleUrl: './by-id.component.scss',
})
export class ByIdComponent implements OnInit {
  public carId: string;
  car: Car;

  constructor(
    private readonly carsService: CarsService,
    private readonly activeRouter: ActivatedRoute,
    private readonly router: Router
  ) {
    this.activeRouter.params.subscribe((params) => {
      this.carId = params['id'];
    });
  }

  ngOnInit() {
    const car = this.carsService.getCarById(this.carId);
    if (car) this.car = car;
  }

  public navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  deleteCar(id: string) {
    this.carsService.deleteCar(id)
    // this.router.navigate([]);
  }
}
