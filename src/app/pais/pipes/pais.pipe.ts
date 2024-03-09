import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paisPipe'
})
export class PaisPipe implements PipeTransform {

  transform(region: string): string {
    switch(region){
      case 'africa':
        return 'Continente Africano'
      case 'americas':
        return 'Continente Americano'
      case 'asia':
        return 'Conteninente Asiatico'
      case 'europa':
        return 'Continente Europeo'
        default:
          return 'Continente Oceania'
    
    }

  }

}
