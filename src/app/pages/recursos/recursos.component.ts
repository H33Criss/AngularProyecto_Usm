import { RecursosService } from './../../services/recursos.service.service';
import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../models/recursos.model';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule,MatButton,MatButtonModule,MatIcon],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.scss'
})
export class RecursosComponent implements OnInit {

  recursos: Recurso[]=[];

  constructor(private readonly recursosService: RecursosService) {}


  async ngOnInit() {
    this.recursos = this.recursosService.getRecursos();
    //console.log(this.recursos);
  }

}
