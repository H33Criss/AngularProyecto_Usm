import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarsService } from '../../../services/cars.service';
import { Car } from '../../../models/cars.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButton,
    RouterModule,
  ],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.scss',
})
export class CreateCarComponent {
  carForm: FormGroup;

  constructor(
    private readonly carsService: CarsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      model: ['', [Validators.required, Validators.maxLength(30)]],
      brand: ['', [Validators.required, Validators.maxLength(15)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      image: ['', Validators.required],
      profileImage: ['', Validators.required],
      headerImage: ['', Validators.required],
      hp: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      description: ['', [Validators.required, Validators.maxLength(300)]],
    });

    this.carForm.valueChanges.subscribe((values) => {
      console.log(values);
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log('Form Submitted!', this.carForm.value);
      const newCar: Car = {
        id: this.carsService.getCarId(),
        model: this.carForm.get('model')!.value,
        brand: this.carForm.get('brand')!.value,
        price: this.carForm.get('price')!.value,
        image: this.carForm.get('image')!.value,
        profileImage: this.carForm.get('profileImage')!.value,
        headerImage: this.carForm.get('headerImage')!.value,
        hp: this.carForm.get('hp')!.value,
        description: this.carForm.get('description')!.value,
      };
      console.log(newCar);
      this.carsService.createCar(newCar);
      this.router.navigate(['/autos/lista']);
    }
  }
}
