import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    // Handle children routes
    children: [
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
      { path: '**', redirectTo: 'nuevo', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
