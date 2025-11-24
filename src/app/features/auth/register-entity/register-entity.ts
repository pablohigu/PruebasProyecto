import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-entity',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-entity.html',
  styleUrls: ['./register-entity.scss'] // Si está vacío no pasa nada
})
export class RegisterEntityComponent {
  private fb = inject(FormBuilder);

  // Definición del formulario
  entityForm = this.fb.group({
    orgName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(500)]]
  });

  onSubmit() {
    if (this.entityForm.valid) {
      console.log('REGISTRO ENTIDAD ENVIADO:', this.entityForm.value);
      // Aquí conectarías con tu servicio...
      // ej: this.authService.registerEntity(this.entityForm.value)...
    } else {
      // Muestra los errores rojos si el usuario intenta enviar vacío
      this.entityForm.markAllAsTouched();
    }
  }
}