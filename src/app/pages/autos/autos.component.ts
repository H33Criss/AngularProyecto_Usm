import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { ByIdComponent } from './by-id/by-id.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, ListaComponent, ByIdComponent],
  templateUrl: './autos.component.html',
})
export class AutosComponent {}
