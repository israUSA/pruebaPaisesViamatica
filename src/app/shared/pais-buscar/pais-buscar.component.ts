import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Subject, debounceTime } from 'rxjs';
import { PaisService } from '../../pais/services/pais.service';
import { Router } from '@angular/router';
import { Pais } from '../../pais/interfaces/pais.interface';
import { region } from '../../pais/interfaces/region.interface';
import { subregion } from '../../pais/interfaces/subregion.interface';

@Component({
  selector: 'app-pais-buscar',
  templateUrl: './pais-buscar.component.html',
  styleUrl: './pais-buscar.component.css',
})
export class PaisBuscarComponent {
  constructor(private paisService: PaisService, public router: Router) {}

  query: string = '';
  paises: Pais[] | undefined;
  regiones: region[] = [];
  subregiones:subregion[] = [];
  numeroDeSugerencias: number = 10;
  resultadosSugeridos: Pais[] | region[] = [];

  @Input() placeHolder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();

  selectedItems: any[] | undefined;

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });

    if (this.router.url.includes('nombre')) {
    } else if (this.router.url.includes('subregion')) {
      console.log('estamos en subregion');
    } else if (this.router.url.includes('region')) {
      console.log('estamos en region');
    }
  }

  buscar() {
    console.log("ver query: ",this.query);
    return this.onEnter.emit(this.query);
  }
 

  teclaPresionada(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    console.log(this.query);


    if (this.router.url.includes('nombre')) {
      this.paisService.getPaisesPorNombre(query).subscribe({
        next: (paises) => {
          this.paises = paises;
          this.resultadosSugeridos = paises.slice(0, this.numeroDeSugerencias);
          console.log('Paises: ', paises);
          console.log('Paises Recortados', this.resultadosSugeridos);
        },

        error: (error) => {
          this.resultadosSugeridos = [];
          console.log('Error:', error);
        },
      });
    } 
    
    else if (this.router.url.includes('subregion')) {
      let filtered: any[] = [];
      this.paisService.cargarSubregiones().subscribe({
        next: (subregiones) => {
          this.subregiones = subregiones.slice(0, this.numeroDeSugerencias);

          for (let i = 0; i < (this.subregiones).length; i++) {
            let subregion = (this.subregiones)[i];
            if (subregion.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(subregion);
            }
        }

        this.resultadosSugeridos = filtered;
        },
        

        error: (error) => {
          this.resultadosSugeridos = [];
        },
      });
    
    } 
    
    
    else if (this.router.url.includes('region')) {
      let filtered: any[] = [];

      this.paisService.cargarRegiones().subscribe({
        next: (regiones) => {
          this.regiones = regiones.slice(0, this.numeroDeSugerencias);

          for (let i = 0; i < (this.regiones).length; i++) {
            let region = (this.regiones)[i];
            if (region.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(region);
            }
        }

        this.resultadosSugeridos = filtered;
        },
        

        error: (error) => {
          this.resultadosSugeridos = [];
        },
      });
    }
  }

  inputBusqueda() {
    this.debouncer.next(this.query);
  }
}
