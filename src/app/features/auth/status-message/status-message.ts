import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-message.html', // Usamos el archivo HTML
  styleUrls: [] 
})
export class StatusMessageComponent {
  @Input() title: string = '¡Solicitud enviada!';
  @Input() message: string = 'Pronto recibirás un correo electrónico a la dirección que nos has proporcionado con la resolución de tu petición.';
  @Input() showContactLink: boolean = true;
  @Input() backLink: string = '/login';
}