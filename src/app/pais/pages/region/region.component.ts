import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { region } from '../../interfaces/region.interface';

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
  regiones: region[] = [];
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


}
