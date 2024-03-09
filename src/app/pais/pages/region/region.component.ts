import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css',
})
export class RegionComponent {
  constructor(private paisService: PaisService) {}

  placeHolder: string =
    'Ingresa una region: africa, americas, asia, europa o oceania';
  hayError: boolean = false;
  paisesLista: Pais[] = [];
  regiones: string[] = [];
  queryBusqueda: string = '';
  numeroDeSugerencias: number = 10;

  buscarPaisesPorRegion(nombre: string) {
    this.hayError = false;
    this.queryBusqueda = nombre;
    this.paisService.getPaisesPorRegion(nombre).subscribe({
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
      this.regiones = [];
      return;
    }

    this.paisService.cargarRegiones().subscribe({
      next: (regiones) => {
        this.regiones = regiones.slice(0, this.numeroDeSugerencias);
      },

      error: (error) => {
        this.regiones = [];
      },
    });
  }
}
