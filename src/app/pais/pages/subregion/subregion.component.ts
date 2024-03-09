import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subregion',
  templateUrl: './subregion.component.html',
  styleUrl: './subregion.component.css',
})
export class SubregionComponent {
  constructor(private paisService: PaisService) {}

  placeHolder: string =
    'Ingresa una subregion: Southern Europe, Eastern Africa, North America, Polynesia, etc';
  hayError: boolean = false;
  paisesLista: Pais[] = [];
  subregiones: string[] = [];
  queryBusqueda: string = '';
  numeroDeSugerencias: number = 10;

  buscarPaisesPorSubRegion(nombre: string) {
    this.hayError = false;
    this.queryBusqueda = nombre;
    this.paisService.getPaisesPorSubRegion(nombre).subscribe({
      next: (paises) => {
        this.paisesLista = paises;
        console.log(paises);
      },
      error: (error) => {
        this.hayError = true;
        this.paisesLista = [];
        console.log('Error:', error);
      },
    });
  }

  sugerencias(nombre: string) {
    this.hayError = false;
    // Verificar si el parámetro nombre está vacío para proceder a limpiar las sugerencias
    if (!nombre.trim()) {
      this.subregiones = [];
      return;
    }
    this.paisService.cargarSubregiones().subscribe({
      next: (subregiones) => {
        this.subregiones = subregiones.slice(0, this.numeroDeSugerencias);
      },

      error: (error) => {
        this.subregiones = [];
      },
    });
  }
}
