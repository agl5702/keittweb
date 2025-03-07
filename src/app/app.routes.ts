import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { AuthGuard } from './auth.guard';
import { LandingComponent } from './landig/landing.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { AnalisisSueloComponent } from './analisis-suelo/analisis-suelo.component';
import { SiembraComponent } from './siembra/siembra.component';
import { RiegoComponent } from './riego/riego.component';
import { CultivoComponent } from './cultivo/cultivo.component';
import { PlagasComponent } from './plagas/plagas.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Keitt Web',
    component: LandingComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },
  {
    path: 'analisis',
    title: 'Registro',
    component: AnalisisSueloComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', title: 'Home', component: HomeComponent },
      {
        path: 'information',
        title: 'Information',
        component: InformationComponent,
      },
      {
        path: 'introduccion',
        title: 'Introduccion',
        component: IntroduccionComponent,
      },
      {
        path: 'analisis-suelo',
        title: 'Analisis-suelo',
        component: AnalisisSueloComponent,
      },
      { path: 'siembra', title: 'Siembra', component: SiembraComponent },
      { path: 'cultivo', title: 'Cultivo', component: CultivoComponent },
      { path: 'riego', title: 'Riego', component: RiegoComponent },
      { path: 'plagas', title: 'Plagas', component: PlagasComponent },
    ],
  },
];
