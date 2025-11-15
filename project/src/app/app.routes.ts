import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/authentication/registration';
import { PageNotFoundComponent } from './components/misc/page-not-found-component/page-not-found';

export const routes: Routes = [
  {path: 'authentication/register', component: RegistrationComponent},
  {path: '**', component: PageNotFoundComponent}
];
