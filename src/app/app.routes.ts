import { Routes } from '@angular/router';
import { Path } from 'three';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:"Home" , component:HomeComponent},
    {path:"Skills", component:AboutComponent},
    {path:"Services", component:ServicioComponent},
    {path:"Portafolio", component:PortfolioComponent},
    {path:"Contact", component:ContactComponent},

];
