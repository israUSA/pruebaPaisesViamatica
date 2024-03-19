import { NgModule } from '@angular/core';
import {ButtonModule } from 'primeng/button';
import {ButtonGroupModule} from 'primeng/buttongroup'
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [],
  exports:[
    ButtonModule,  
    ButtonGroupModule,
    AutoCompleteModule,
    DataViewModule,
    CardModule,
    InputNumberModule,
  ]
})
export class PrimeNgModule { }
