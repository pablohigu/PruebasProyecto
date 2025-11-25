import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    // 1. FORZAR lectura inicial (Esto arregla que no se vea al dar F5)
    this.updateContent();

    // 2. Escuchar navegaciones futuras
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateContent();
    });
  }

  private updateContent() {
    let currentRoute = this.route;
    // Bajar hasta la última ruta hija (donde definiste el data en app.routes.ts)
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    
    // Usamos 'snapshot' para obtener los datos YA, sin esperar eventos
    if (currentRoute.snapshot.data) {
      this.layoutData = currentRoute.snapshot.data;
    }
  }
}