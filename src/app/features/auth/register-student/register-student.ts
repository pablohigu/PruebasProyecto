import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-student.html',
  styleUrls: ['./register-student.scss'] // Opcional si tienes estilos
})
export class RegisterStudentComponent {
  private fb = inject(FormBuilder);

  // Formulario simplificado según la imagen
  studentForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required]
  });

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Registro Alumno:', this.studentForm.value);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }
}