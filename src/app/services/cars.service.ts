import { Injectable } from '@angular/core';
import { Car } from '../models/cars.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  myCars: Car[] = [
    {
      id: '1',
      model: 'Nissan S14',
      brand: 'Nissan',
      price: '16666',
      image: 'assets/car-images/nissan-s142.png',
      hp: 666,
      description:
        'El Nissan S14 (1993-1998) es un coche deportivo compacto con diseño aerodinámico, motor turbo y tracción trasera. Popular en tuning y drift, destaca por su manejo dinámico.',
      like: true,
    },
    {
      id: '2',
      model: 'Toyota Supra MK4',
      brand: 'Toyota',
      price: '16666',
      image: 'assets/car-images/toyota-supra2.png',
      hp: 666,
      description:
        'El Toyota Supra MK4, producido entre 1993 y 2002, es un icónico coche deportivo japonés. Destaca por su motor 2JZ-GTE de seis cilindros en línea con doble turbo, conocido por su alto rendimiento y capacidad de modificación.',
      like: true,
    },
    {
      id: '3',
      model: 'DeLorean',
      brand: 'DMC DeLorean',
      price: '16666',
      image: 'assets/car-images/deloreanT.webp',
      hp: 666,
      description:
        'El DeLorean DMC-12, producido entre 1981 y 1983, es famoso por su diseño distintivo con carrocería de acero inoxidable y puertas de ala de gaviota. Popularizado por su aparición en la película "Back to the Future", es un ícono cultural.',
      like: false,
    },
    {
      id: '4',
      model: 'Corvette 2015',
      brand: 'Chevrolet',
      price: '16666',
      image: 'assets/car-images/corvette2.png',
      hp: 666,
      description:
        'El Chevrolet Corvette 2015, conocido como el Corvette Stingray, es un deportivo estadounidense con un motor V8 de 6.2 litros que produce 455 caballos de fuerza. Combina alto rendimiento con un diseño elegante y aerodinámico, ofreciendo una experiencia de conducción emocionante y sofisticada.',
      like: false,
    },
    {
      id: '5',
      model: 'M3 GTR',
      brand: 'BMW',
      price: '16666',
      image: 'assets/car-images/bmwm3gtr.png',
      hp: 666,
      description:
        'El BMW M3 GTR es una versión de alto rendimiento del BMW M3, destacada por su motor V8 y su éxito en competiciones de carreras a principios de los 2000. Originalmente diseñado para competir en la American Le Mans Series, el M3 GTR es conocido por su potencia, ligereza y aerodinámica avanzada. Su exclusividad y éxito en las pistas lo han convertido en un modelo legendario en la historia del automovilismo.',
      like: true,
    },
  ];

  constructor() {}

  public getCars() {
    return this.myCars;
  }
}
