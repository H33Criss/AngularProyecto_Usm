import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-shared-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButton,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButtonModule,
    MatMenuModule,
    MatMenuItem,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public menuItems = routes;
}
