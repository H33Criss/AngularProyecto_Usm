import { Injectable } from '@angular/core';
import { Evento } from '../models/eventos.model';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  myEventos: Evento[] = [
    {
      id: '1',
      image: 'assets/eventos/1.jpg',
      title: 'Restauración Cadillac 1968',
      fecha: 'Marzo 2023',
      descripcion:
        'Un museo automotriz donde se pueden disfrutar de autos tales como una Ford A de 1928, a medio armar mientras se le ajusta el motor. Al lado está en restauración un Mercedes 220S Ponton de 1959, un Cadillac Fleetwood de 1939, un Triumph TR3 1959, un Ford convertible de 1938 y una réplica del impresionante Ford Shelby Cobra, entre varios otros.',
    },
    {
      id: '2',
      image: 'assets/eventos/2.jpg',
      title: 'Convención autos retro',
      fecha: 'Mayo 2023',
      descripcion:
        'Uno de las citas más grandes se vivirá en la comuna de Los Andes, en donde se juntarán en la Plaza de Armas, de manera gratuita, desde las 10:00 a las 17:00 horas. Este encuentro es de carácter nacional e internacional y es organizado por “Clásicos Los Andes”, entidad que trabaja desde el 2013 con el desarrollo de estas actividades.',
    },
    {
      id: '3',
      image: 'assets/eventos/3.jpeg',
      title: 'Llega DeLorean',
      fecha: 'Junio 2023',
      descripcion:
        '"Oct-26-1985", marca como fecha el colorido tablero del Delorean gris que transportó a McFly y que durante todo el día será exhibido en el "Museo de la Moda" de Santiago, junto a una chaqueta y los tennis blancos utilizadas por el personaje encarnado por Michael J. Fox.',
    },
  ];
  constructor() {}

  public getEventos() {
    return this.myEventos;
  }
}
