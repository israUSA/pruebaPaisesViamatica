import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';
import { SUBREGIONES } from '../../shared/const/subregiones.const';
import { REGIONES } from '../../shared/const/regiones.const';
import { region } from '../interfaces/region.interface';
import { subregion } from '../interfaces/subregion.interface';
import {
  BASE_URL_API_PAISES,
  BUSQUEDA_RESPONSIVE_API_PAISES,
  ENDPOINT_NOMBRE_API_PAISES,
  ENDPOINT_REGION_API_PAISES,
  ENDPOINT_SUBREGION_API_PAISES,
} from '../../shared/const/endpoints.consts';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  /*Se busca un pais por su codigo cca2, se obtiene solo name,capital,population,cca2,flags,currencies,area,maps,continents
    Se usa en el componente ver-informacion */
  getPaisPorCodigo(id: string): Observable<Pais> {
    const url = `${BASE_URL_API_PAISES}/alpha/${id}?${BUSQUEDA_RESPONSIVE_API_PAISES}`;
    return this.http.get<Pais>(url);
  }

  /*Se realiza una busqueda en la api con los paises que coincidan con el nombre
    Se usa en el componente nombre*/
  getPaisesPorNombre(nombre: string): Observable<Pais[]> {
    const url = `${BASE_URL_API_PAISES}/${ENDPOINT_NOMBRE_API_PAISES}/${nombre}`;
    return this.http.get<Pais[]>(url);
  }

  /*Se realiza una busqueda en la api con los paises en una misma region
    Se usa en el componente region*/
  getPaisesPorRegion(nombre: string): Observable<Pais[]> {
    const url = `${BASE_URL_API_PAISES}/${ENDPOINT_REGION_API_PAISES}/${nombre}`;
    return this.http.get<Pais[]>(url);
  }

  /*Se realiza una busqueda en la api con los paises en una misma subregion
    Se usa en el componente subregion*/
  getPaisesPorSubRegion(nombre: string): Observable<Pais[]> {
    const url = `${BASE_URL_API_PAISES}/${ENDPOINT_SUBREGION_API_PAISES}/${nombre}`;
    return this.http.get<Pais[]>(url);
  }

  /*Se cargan subregiones de la constante SUBREGIONES
    Se usa en el componente pais-buscar para el autocompletado*/
  cargarSubregiones(): Observable<subregion[]> {
    let subregiones = new Observable<subregion[]>((observer) =>
      observer.next(SUBREGIONES)
    );
    return subregiones;
  }

  /*Se cargan regiones de la constante REGIONES
    Se usa en el componente pais-buscar para el autocompletado*/
  cargarRegiones(): Observable<region[]> {
    let regiones = new Observable<region[]>((observer) =>
      observer.next(REGIONES)
    );
    return regiones;
  }
}
