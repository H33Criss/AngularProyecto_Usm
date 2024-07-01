import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/eventos.model';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private readonly eventosService: EventosService) {}

  async ngOnInit() {
    this.eventos = this.eventosService.getEventos();
  }
}
