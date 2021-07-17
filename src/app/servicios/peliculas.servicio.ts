import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasServicio {

  api = 'http://www.omdbapi.com';
  key = '5adb9c51';
  constructor( private http: HttpClient  ) { }


  getPeliculasNombre(nombre: string) {
    return this.http.get(`${this.api}/?s=${nombre}&apikey=${this.key}`);
  }
  getPeliculaNombre( nombre: string) {
    return this.http.get(`${this.api}/?t=${nombre}&apikey=${this.key}`);
  }
  getPeliculaImdbID( id: string) {
    return this.http.get(`${this.api}/?i=${id}&apikey=${this.key}`);
  }

}
