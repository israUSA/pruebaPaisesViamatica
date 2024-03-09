import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { SUBREGIONES } from '../mocks/subregiones.mock';
import { REGIONES } from '../mocks/regiones.mock';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  private baseUrl:string = 'https://restcountries.com/v3.1';
  private busquedaResponsive: string = 'fields=name,capital,population,cca2,flags,currencies';
  private endpointNombre:string = 'name';
  private endpointRegion:string = 'region';
  private endpointSubregion:string = 'subregion';

  getPaisPorCodigo(id:string):Observable<Pais>{

    const url = `${this.baseUrl}/alpha/${id}?${this.busquedaResponsive}`
    return this.http.get<Pais>(url);
  }

  getPaisesPorNombre(nombre:string): Observable<Pais[]>{
    const url = `${this.baseUrl}/${this.endpointNombre}/${nombre}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisesPorRegion(nombre:string): Observable<Pais[]>{
    const url = `${this.baseUrl}/${this.endpointRegion}/${nombre}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisesPorSubRegion(nombre:string): Observable<Pais[]>{
    const url = `${this.baseUrl}/${this.endpointSubregion}/${nombre}`;
    return this.http.get<Pais[]>(url);
  }

  cargarSubregiones(): Observable<string[]>{
    let subregiones = new Observable<string[]> (observer => observer.next(SUBREGIONES));
    return subregiones;
  }

  cargarRegiones():Observable<string[]>{
    let regiones = new Observable<string[]> (observer => observer.next(REGIONES));
    return regiones;
  }

}
