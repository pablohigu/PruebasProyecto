import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout';
import { LoginComponent } from './features/auth/login/login';
import { RegisterEntityComponent } from './features/auth/register-entity/register-entity';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent, // El marco con la ola azul
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Inicia sesión en Cuatrovientos Voluntariado',
          text1: 'Con tu pequeño gesto podremos hacer grandes historias que contar.',
          text2: 'Que nuestras anécdotas sean testimonio de que cada sonrisa cuenta'
        }
      },
      {
        path: 'register-entity',
        component: RegisterEntityComponent,
        data: {
          title: '¿Quieres formar parte del cambio?',
          // En la captura de registro entidad no hay texto secundario, así que lo dejamos vacío o ponemos uno genérico
          text1: '' 
        }
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' } // Ruta por defecto para errores 404
];