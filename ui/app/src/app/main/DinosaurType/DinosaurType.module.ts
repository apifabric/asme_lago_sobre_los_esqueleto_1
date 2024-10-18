import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DINOSAURTYPE_MODULE_DECLARATIONS, DinosaurTypeRoutingModule} from  './DinosaurType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DinosaurTypeRoutingModule
  ],
  declarations: DINOSAURTYPE_MODULE_DECLARATIONS,
  exports: DINOSAURTYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DinosaurTypeModule { }