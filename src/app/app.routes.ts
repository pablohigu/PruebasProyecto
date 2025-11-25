import { Routes } from '@angular/router';
import { RegisterStudentComponent } from './features/auth/register-student/register-student';
import { LoginComponent } from './features/auth/login/login';
import { RegisterEntityComponent } from './features/auth/register-entity/register-entity';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password';
import { StatusMessageComponent } from './features/auth/status-message/status-message'; // Importar
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
          text1: 'Únete como entidad colaboradora y ayúdanos a crecer.' 
        }
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          title: 'Recupera tu cuenta',
          subtitle: 'Cuatrovientos Voluntariado',
          text1: 'No te preocupes, nos pasa a todos.',
          text2: 'Introduce tu correo electrónico y te enviaremos las instrucciones para restablecerla.'
        }
      },
      // --- NUEVA RUTA: SOLICITUD ENVIADA ---
      {
        path: 'request-sent',
        component: StatusMessageComponent,
        data: {
          // Datos para el Layout Izquierdo (Opcional, puedes repetir los de registro o poner nuevos)
          // Datos para el Componente Central (Card)
          // Nota: StatusMessageComponent usará sus valores por defecto si no se sobrescriben aquí, 
          // que ya coinciden con tu imagen.
        }
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];