import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/misc/page-not-found-component/page-not-found';
import { RegistrationComponent } from './components/authentication/registration-component/registration';
import { LoginComponent } from './components/authentication/login-component/login-component';

export const routes: Routes = [
  {
    path: 'authentication/register',
    component: RegistrationComponent,
    data: {
      headerTitle: 'Authentication'
    }
  },
  {
    path: 'authentication/login',
    component: LoginComponent,
    data: {
      headerTitle: 'Authentication'
    }
  },
  {
    path: '',
    component: RegistrationComponent,
    data: {
      headerTitle: 'Authentication'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      headerTitle: 'invalid route'
    }
  }
];
