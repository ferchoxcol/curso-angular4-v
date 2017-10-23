import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes

import { EmpleadoComponent} from './empleado/empleado.component';
import { FrutaComponent} from './fruta/fruta.component';
import { HomeComponent} from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CochesComponent} from './coches/coches.component';
import { PlantillasComponent} from './plantillas/plantillas.component';

const appRoutes:Routes=[
{path:'',component: HomeComponent},//index
{path:'empleado',component: EmpleadoComponent},
{path:'fruta',component: FrutaComponent},
{path:'contacto',component: ContactoComponent},
{path:'pagina-principal',component: HomeComponent},
{path:'contacto/:page',component: ContactoComponent},
{path:'coches',component: CochesComponent},
{path:'plantillas',component: PlantillasComponent},
{path:'**',component: HomeComponent}//este debe ser el últimos



];//error
export const appRoutingProviders:any[] =  [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
