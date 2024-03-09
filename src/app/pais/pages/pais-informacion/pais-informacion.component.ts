import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-informacion',
  templateUrl: './pais-informacion.component.html',
  styleUrl: './pais-informacion.component.css'
})
export class PaisInformacionComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  pais: Pais | undefined;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais)

}
}
