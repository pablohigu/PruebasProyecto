import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { RegisterEntityComponent } from './features/auth/register-entity/register-entity';
import { RegisterStudentComponent } from './features/auth/register-student/register-student';
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
          // El <br> fuerza el salto de línea después de "en" como en la foto
          title: 'Inicia sesión en <br> Cuatrovientos Voluntariado',
          
          // Párrafo 1
          text1: 'Con tu pequeño gesto podremos hacer grandes historias que contar.',
          
          // Párrafo 2
          text2: 'Que nuestras anécdotas sean testimonio de que cada sonrisa cuenta.'
        }
      },
      {
        path: 'register-student',
        component: RegisterStudentComponent,
        data: { 
          title: 'Inscríbete en <br> Cuatrovientos Voluntariado',
          text1: 'Únete a nuestra comunidad y comienza a dejar tu huella.'
          // text2: '' // Puedes dejarlo vacío si no hay segundo párrafo
        }
      },
      {
        path: 'register-entity',
        component: RegisterEntityComponent,
        data: { 
          title: 'Colabora con <br> Cuatrovientos Voluntariado',
          text1: 'Juntos podemos construir un futuro lleno de oportunidades.'
        }
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];