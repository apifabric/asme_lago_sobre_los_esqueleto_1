import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ANALYSI_MODULE_DECLARATIONS, AnalysiRoutingModule} from  './Analysi-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AnalysiRoutingModule
  ],
  declarations: ANALYSI_MODULE_DECLARATIONS,
  exports: ANALYSI_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnalysiModule { }