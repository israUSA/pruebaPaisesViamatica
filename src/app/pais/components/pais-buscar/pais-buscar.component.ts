import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-buscar',
  templateUrl: './pais-buscar.component.html',
  styleUrl: './pais-buscar.component.css'
})
export class PaisBuscarComponent {
  query: string = '';

  @Input() placeHolder:string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();

  buscar(){
    return this.onEnter.emit(this.query);
  }

  ngOnInit(): void {
    this.debouncer
    .pipe(  debounceTime(300))
    .subscribe((valor) =>{
      this.onDebounce.emit(valor);
    })
    
  }

  teclaPresionada(){
    this.debouncer.next(this.query); 
  }

}
