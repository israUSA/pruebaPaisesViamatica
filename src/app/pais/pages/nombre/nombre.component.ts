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
  paisesSugeridos:Pais[] = [];
  queryBusqueda:string = '';
  numeroDeSugerencias:number = 10;

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

  sugerencias(nombre:string){
    this.hayError = false;
    this.paisService.getPaisesPorNombre(nombre)
    .subscribe(
      {
      next:  (paises) => {
        this.paisesLista = paises;
        this.paisesSugeridos = paises.slice(0,this.numeroDeSugerencias);
      },

     error: (error) => {
        this.paisesSugeridos = [];
        console.log("Error:", error)
      },
    }
    )
  }

  esListaPaisVacia(){
    return this.paisesLista.length === 0;
  }
}
