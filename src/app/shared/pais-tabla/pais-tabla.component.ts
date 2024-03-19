import { Component, Input } from '@angular/core';
import { Pais } from '../../pais/interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrl: './pais-tabla.component.css'
})
export class PaisTablaComponent {
  @Input() paisesLista: Pais[]  = [];
  numeroResultados:number = 5;

}
