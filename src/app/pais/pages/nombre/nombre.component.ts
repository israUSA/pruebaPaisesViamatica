import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {

  constructor(private paisService:PaisService){}

  placeHolder:string = 'Ingresa el nombre de un pais :)'
  hayError:boolean = false;
  paisesLista: Pais[] = [];
  queryBusqueda:string = '';

  buscarPaises(nombre:string){
    this.hayError = false;
    this.queryBusqueda = nombre;
    this.paisService.getPaisesPorNombre(nombre).subscribe({
      next: (paises) => {
        this.paisesLista = paises;
        console.log(paises);
      }, 
      error: (error) => {
        this.hayError = true;
        this.paisesLista = [];
        console.log('Error:', error)
      },
    })

  }

  llenarTabla(nombre:string){
    this.hayError = false;
    this.paisService.getPaisesPorNombre(nombre)
    .subscribe(
      {
      next:  (paises) => {
        this.paisesLista = paises;
      },

     error: (error) => {
        console.log("Error:", error)
      },
    }
    )
  }

  esListaPaisVacia(){
    return this.paisesLista.length === 0;
  }
}
