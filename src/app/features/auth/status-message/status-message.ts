import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-message',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="text-center py-4">
      <h2 class="fw-bold text-primary mb-3">{{ title }}</h2>
      
      <p class="text-muted mb-4 px-3">
        {{ message }}
      </p>

      <div *ngIf="showContactLink" class="small text-muted mb-3">
         ¿Necesitas cambiar algo? Contacta con <br>
         <a href="mailto:voluntariado@cuatrovientos.org">voluntariado@cuatrovientos.org</a>
      </div>

      <div class="mt-4 fw-bold text-primary">
        ¡Juntos haremos la diferencia!
      </div>
      
      <div class="mt-4" *ngIf="backLink">
          <a [routerLink]="backLink" class="btn btn-outline-primary btn-sm">Volver</a>
       </div>
    </div>
  `
})
export class StatusMessageComponent {
  @Input() title: string = '¡Solicitud enviada!';
  @Input() message: string = 'Pronto recibirás un correo electrónico...';
  @Input() showContactLink: boolean = true;
  @Input() backLink: string = '/login';
}