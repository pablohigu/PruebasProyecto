import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute, Event } from '@angular/router';
import { filter, map, mergeMap, startWith } from 'rxjs/operators'; // IMPORTANTE: Añadir startWith

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

  layoutData: any = {
    title: '',
    text1: '',
    text2: ''
  };

  ngOnInit() {
    this.router.events.pipe(
      // Filtramos eventos de navegación
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
      // IMPORTANTE: Forzamos un valor inicial para que se ejecute al cargar la página
      startWith(this.router), 
      map(() => this.route),
      map(route => {
        // Buscamos la ruta hija más profunda (donde está la 'data')
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe((data: any) => {
      // Actualizamos los datos si existen
      if (data) {
        this.layoutData = data;
      }
    });
  }
}