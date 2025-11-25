import { Routes } from '@angular/router';
import { RegisterStudentComponent } from './features/auth/register-student/register-student';
import { LoginComponent } from './features/auth/login/login';
import { RegisterEntityComponent } from './features/auth/register-entity/register-entity';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password'; // Asegúrate de importar el componente real
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
          title: 'Inicia sesión en', 
          subtitle: 'Cuatrovientos Voluntariado', 
          text1: 'Con tu pequeño gesto podremos hacer grandes historias que contar.',
          text2: 'Que nuestras anécdotas sean testimonio de que cada sonrisa cuenta'
        }
      },
      {
        path: 'register-student',
        component: RegisterStudentComponent,
        data: { 
          title: 'Inscríbete en',
          subtitle: 'Cuatrovientos Voluntariado',
          text1: 'Con tu pequeño gesto podremos hacer grandes historias que contar.',
          text2: 'Que nuestras anécdotas sean testimonio de que cada sonrisa cuenta'
        }
      },
      {
        path: 'register-entity',
        component: RegisterEntityComponent,
        data: { 
          title: '¿Quieres formar parte del cambio?',
          // Dejamos subtitle vacío o lo omitimos si no lleva
          text1: 'Únete como entidad colaboradora y ayúdanos a crecer.' 
        }
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          // Estos textos aparecerán a la izquierda
          title: 'Recupera tu cuenta',
          subtitle: 'Cuatrovientos Voluntariado',
          text1: 'No te preocupes, nos pasa a todos.',
          text2: 'Introduce tu correo electrónico y te enviaremos las instrucciones para restablecerla.'
        }
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];