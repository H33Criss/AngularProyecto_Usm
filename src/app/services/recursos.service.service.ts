import { Injectable } from '@angular/core';
import { Recurso } from '../models/recursos.model';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  myRecursos: Recurso[] =[
    {
      id: '1',
      name: 'Manuales',
      description: 'Bienvenidos al arte de revivir leyendas. En las páginas que siguen,  emprenderemos un viaje a través del tiempo y la ingeniería, donde cada  tornillo y cada pincelada cuentan una historia. La restauración de autos  clásicos no es solo un proceso técnico; es una danza entre la historia y  la modernidad, un tributo a la belleza atemporal y la innovación  humana. Ya sea que seas un aficionado experimentado o un novato curioso,  esta guía está diseñada para encender esa chispa de admiración por los  vehículos que definieron generaciones y continúan cautivando corazones.  Así que prepara tus herramientas y tu pasión, porque estamos a punto de  devolverle la vida a los gigantes dormidos del asfalto.',
      url:'https://image.slidesharecdn.com/303221857-manual-electronica-del-automovil-pdf-180404174706/85/303221857-manual-electronica-del-automovil-pdf-1-320.jpg'
    },
    {
      id: '2',
      name: 'Recursos tecnicos',
      description: 'El mercado automotor en Chile sorprendió a todos con el crecimiento  experimentado tras los meses de cuarentena por la pandemia. Desde esa  fecha, las ventas de vehículos nuevos y usados se elevaron a los cielos,  lo que deriva también en un crecimiento de actores paralelos a la  industria, tal como el de los repuestos.',
      url:'https://www.romelmotors.com/wp-content/uploads/2019/05/Como-llevar-el-mantenimiento-del-coche.jpg'
    },
    {
      id: '3',
      name: 'Historia del Automóvil',
      description: 'Desde la invención del primer motor de combustión interna hasta los vehículos eléctricos de hoy en día, la historia del automóvil está llena de innovación y progreso. Este recurso explora los hitos más significativos en el desarrollo de los automóviles y cómo han impactado la sociedad.',
      url: 'https://images.cdn2.buscalibre.com/fit-in/360x360/c9/a4/c9a4de11cacddbeadacd49b3c8b9dec8.jpg'
    },
    {
      id: '4',
      name: 'Guía de Mantenimiento',
      description: 'Mantener tu vehículo en buen estado es esencial para su longevidad y rendimiento. Esta guía proporciona consejos y trucos para el mantenimiento regular del automóvil, desde cambios de aceite hasta la inspección de frenos y neumáticos.',
      url: 'https://www.renovetec.com/irim/images/guia2elaboracionplanesdemantenimientov12red.png'
    },
    {
      id: '5',
      name: 'Innovaciones Tecnológicas',
      description: 'El mundo del automóvil está en constante evolución gracias a las innovaciones tecnológicas. Este recurso se centra en las últimas tendencias y avances, como los vehículos autónomos, la inteligencia artificial en la conducción y los sistemas de entretenimiento a bordo.',
      url: 'https://www.epitech-it.es/wp-content/uploads/2023/02/pexels-photo-2599244.jpeg'
    },
    {
      id: '6',
      name: 'Técnicas de Conducción',
      description: 'Aprender técnicas de conducción avanzadas puede mejorar tu experiencia al volante y aumentar la seguridad en la carretera. Este recurso cubre desde técnicas de conducción defensiva hasta habilidades necesarias para manejar en condiciones adversas.',
      url: 'https://images.cdn2.buscalibre.com/fit-in/500x500/d2/31/d231cac3ada4c53c006ca6e68bc6a670.jpg'
    },
    {
      id: '7',
      name: 'Accesorios y Personalización',
      description: 'Personalizar tu vehículo puede hacerlo más cómodo y reflejar tu estilo personal. Este recurso explora una variedad de accesorios y opciones de personalización, desde mejoras en el interior hasta modificaciones exteriores.',
      url: 'https://editorialgg.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/d/4d83f9917ca40623ba511de99d709215.jpg'
    }
  ];
  constructor() { }

  public getRecursos() {
    return this.myRecursos;
  }

}
