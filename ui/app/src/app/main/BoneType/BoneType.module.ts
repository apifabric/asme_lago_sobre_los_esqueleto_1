import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BONETYPE_MODULE_DECLARATIONS, BoneTypeRoutingModule} from  './BoneType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BoneTypeRoutingModule
  ],
  declarations: BONETYPE_MODULE_DECLARATIONS,
  exports: BONETYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoneTypeModule { }