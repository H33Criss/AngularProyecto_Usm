import { Routes } from '@angular/router';
import { AutosComponent } from './pages/autos/autos.component';
import { ListaComponent } from './pages/autos/lista/lista.component';
import { ByIdComponent } from './pages/autos/by-id/by-id.component';
import { HomeComponent } from './pages/home/home.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { EventosComponent } from './pages/eventos/eventos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio',
  },
  {
    path: 'autos',
    component: AutosComponent,
    title: 'Autos',
    children: [
      {
        path: 'lista',
        title: 'Lista de Autos',
        component: ListaComponent,
      },
      {
        path: ':id',
        title: 'Auto detalle',
        component: ByIdComponent,
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'eventos',
    component: EventosComponent,
    title: 'Eventos',
  },
  {
    path: 'recursos',
    component: RecursosComponent,
    title: 'Recursos',
  },
];
