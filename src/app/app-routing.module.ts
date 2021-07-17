import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ListadoDePeliculas',
    pathMatch: 'full'
  },
  {
    path: 'ListadoDePeliculas',
    loadChildren: () => import('./paginas/ListadoDePeliculas/lista-peliculas.module').then(m => m.ListaPaginasPageModule)
  },
  {
    path: 'DetalleDePelicula/:id',
    loadChildren: () => import('./paginas/DetalleDePelicula/detalle-pelicula.module').then(m => m.PeliculaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
