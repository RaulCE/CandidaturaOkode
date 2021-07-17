import { Component, OnInit } from '@angular/core';
import {PeliculasServicio} from "../../servicios/peliculas.servicio";
import {ActivatedRoute, Router} from "@angular/router";
import {Pelicula} from "../../modelos/interfazPelicula";

@Component({
  selector: 'app-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {


  pelicula:Pelicula={
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
  };

  constructor(private peliculasServicio: PeliculasServicio,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    this.getPelicula(params);
  }

  getPelicula(params: any){
    this.peliculasServicio.getPeliculaImdbID(params.id).subscribe(
      res => {
        this.pelicula = res as Pelicula;
      }, err => console.error(err)
    );
  }

}
