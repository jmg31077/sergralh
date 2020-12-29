import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component:InicioComponent },
  { path: 'nosotros', component:NosotrosComponent },
  { path: 'productos', component:ProductosComponent },
  { path: 'servicios', component:ServiciosComponent },
  { path: 'contactos', component:ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
