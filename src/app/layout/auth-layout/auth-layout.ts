import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss'
})
export class AuthLayoutComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Datos por defecto
  layoutData: any = {
    title: 'Bienvenido',
    text1: '',
    text2: ''
  };

  ngOnInit() {
    // Escuchamos la navegación para actualizar el texto lateral dinámicamente
    // basándonos en la data definida en las rutas (app.routes.ts)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe((data: any) => {
      // Si la ruta tiene datos, actualizamos. Si no, mantenemos o limpiamos.
      if (data && (data.title || data.text1)) {
        this.layoutData = data;
      }
    });
  }
}