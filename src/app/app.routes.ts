import { Routes } from '@angular/router';
import { RegisterStudentComponent } from './features/auth/register-student/register-student';
import { LoginComponent } from './features/auth/login/login';
import { RegisterEntityComponent } from './features/auth/register-entity/register-entity';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { 
          // Título con salto de línea (<br>)
          title: 'Inicia sesión en <br> Cuatrovientos Voluntariado',
          text1: 'Con tu pequeño gesto podremos hacer grandes historias que contar.',
          text2: 'Que nuestras anécdotas sean testimonio de que cada sonrisa cuenta'
        }
      },
      {
        path: 'register-student', // Ruta de ALUMNO
        component: RegisterStudentComponent,
        data: { 
          title: 'Inscríbete en <br> Cuatrovientos Voluntariado',
          text1: 'Con tu pequeño gesto podremos hacer grandes historias que contar.',
          text2: 'Que nuestras anécdotas sean testimonio de que cada sonrisa cuenta'
        }
      },
      {
        path: 'register-entity', // Ruta de ENTIDAD
        component: RegisterEntityComponent,
        data: { 
          title: '¿Quieres formar parte del cambio?',
          // En entidad parece que no lleva párrafos pequeños según tu captura, o puedes poner uno genérico:
          text1: 'Únete como entidad colaboradora y ayúdanos a crecer.' 
        }
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];