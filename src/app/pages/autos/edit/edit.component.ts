import { Component, ViewChild, ElementRef } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../../models/cars.model';
import { CarCardComponent } from '../../../shared/car-card/car-card.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatFabButton } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    CarCardComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatFabButton,
    ReactiveFormsModule,
    MatError,
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  form: FormGroup;

  //referencias de las imagenes fake en memoria, static para que si se hace F5 se pierdan
  @ViewChild('fileInputImage', { static: false })
  fileInputImage: ElementRef;
  @ViewChild('fileInputProfileImage', { static: false })
  fileInputProfileImage: ElementRef;

  public car: Car;
  public cardId: string;

  //Nombres de la imagenes seleccionadas, para mostrarlas en pantalla
  public selectedFileNameImage: string = '';
  public selectedFileNameProfileImage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private readonly carsService: CarsService,
    private readonly activeRouter: ActivatedRoute,
    private readonly router: Router
  ) {
    this.activeRouter.params.subscribe((params) => {
      this.cardId = params['id'];
      const carOfService = this.carsService.getCarById(this.cardId);
      // validacion, si no existe el car
      if (!carOfService) {
        router.navigate(['/autos/lista']);
        return;
      }
      //un copia del car, con un nuevo espacio en memoria
      const carToEdit = { ...carOfService };
      if (carToEdit) {
        this.car = carToEdit as Car;
        this.form = this.formBuilder.group({
          modelo: ['', [Validators.required, Validators.maxLength(45)]],
          description: [
            '',
            [
              Validators.required,
              Validators.minLength(20),
              Validators.maxLength(300),
            ],
          ],
        });
      }
    });
  }

  onFileSelected(event: any, isProfileImage: boolean): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (isProfileImage) {
          this.selectedFileNameProfileImage = selectedFile.name;
          this.car.profileImage = e.target.result;
        } else {
          this.selectedFileNameImage = selectedFile.name;
          this.car.image = e.target.result;
        }
      };
      //url de la imagen , pero fake(en memoria)
      reader.readAsDataURL(selectedFile);
    }
  }

  onSave(event: Event): void {
    event.preventDefault(); // evitar el submit default del fomulario
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.carsService.updateCar(this.car);
    this.router.navigate(['/autos', this.cardId]);
  }
}
