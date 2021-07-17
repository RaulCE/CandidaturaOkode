import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPaginasPageRoutingModule } from './lista-peliculas-routing.module';

import { ListaPeliculasPage } from './lista-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPaginasPageRoutingModule
  ],
  declarations: [ListaPeliculasPage]
})
export class ListaPaginasPageModule {}
