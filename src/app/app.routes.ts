import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    // Handle children routes
    children: USUARIO_ROUTES,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
