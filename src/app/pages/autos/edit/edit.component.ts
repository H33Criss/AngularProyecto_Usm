import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../../models/cars.model';
import { CarCardComponent } from '../../../shared/car-card/car-card.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatFabButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CarCardComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatFabButton,
    FormsModule,
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @ViewChild('fileInputImage', { static: false }) fileInputImage: ElementRef;
  @ViewChild('fileInputProfileImage', { static: false })
  fileInputProfileImage: ElementRef;

  public car: Car;
  public cardId: string;

  public selectedFileNameImage: string = '';
  public selectedFileNameProfileImage: string = '';

  private selectedFileImage: File | null = null;
  private selectedFileProfileImage: File | null = null;

  private originalImage: string | null = null;
  private originalProfileImage: string | null = null;

  // Variables temporales para la previsualización
  public previewImage: string | null = null;
  public previewProfileImage: string | null = null;

  constructor(
    private readonly carsService: CarsService,
    private readonly activeRouter: ActivatedRoute,
    private readonly router: Router
  ) {
    this.activeRouter.params.subscribe((params) => {
      this.cardId = params['id'];
      const carOfService = this.carsService.getCarById(this.cardId);
      const carToEdit = { ...carOfService };
      if (carToEdit) {
        this.car = carToEdit as Car;
        this.originalImage = this.car.image; // Guardar la imagen original
        this.originalProfileImage = this.car.profileImage ?? ''; // Guardar la imagen de perfil original
      }
    });
  }

  ngOnInit(): void {
    console.log(this.car);
  }

  onFileSelected(event: any, isProfileImage: boolean): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (isProfileImage) {
          this.selectedFileProfileImage = selectedFile;
          this.selectedFileNameProfileImage = selectedFile.name;
          this.previewProfileImage = e.target.result;
        } else {
          this.selectedFileImage = selectedFile;
          this.selectedFileNameImage = selectedFile.name;
          this.previewImage = e.target.result;
          this.car.image = this.previewImage ?? '';
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  onSave(event: Event): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    if (this.previewImage) {
      this.car.image = this.previewImage;
      localStorage.setItem(
        `car_image_${this.cardId}`,
        this.car.image as string
      );
    }

    if (this.previewProfileImage) {
      this.car.profileImage = this.previewProfileImage;
      localStorage.setItem(
        `car_profileImage_${this.cardId}`,
        this.car.profileImage as string
      );
    }

    this.carsService.updateCar(this.car);
    this.router.navigate(['/autos', this.cardId]);
  }

  onCancel(): void {
    this.previewImage = this.originalImage; // Restaurar la imagen original
    this.previewProfileImage = this.originalProfileImage; // Restaurar la imagen de perfil original
    this.router.navigate(['/autos', this.cardId]);
  }
}
