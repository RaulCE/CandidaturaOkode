import {Component, HostBinding, OnInit} from '@angular/core';
import {PeliculasServicio} from "../../servicios/peliculas.servicio";

@Component({
  selector: 'app-lista-paginas',
  templateUrl: './lista-peliculas.page.html',
  styleUrls: ['./lista-peliculas.page.scss'],
})
export class ListaPeliculasPage implements OnInit {

  peliculas: any = [];
  miBusqueda: string ;
  constructor(private peliculasServicio: PeliculasServicio ) { }
  @HostBinding('class') classes = 'row';
  ngOnInit() {

    this.miBusqueda="";
  }

  getPeliculas(){
    this.peliculasServicio.getPeliculasNombre(this.miBusqueda).subscribe(
      res => {
        this.peliculas = res;
      },
      err => console.error(err)
    );
  }
  limpiarBusqueda(){
    this.miBusqueda="";
  }

}
