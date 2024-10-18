import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BONETYPEFUNCTION_MODULE_DECLARATIONS, BoneTypeFunctionRoutingModule} from  './BoneTypeFunction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BoneTypeFunctionRoutingModule
  ],
  declarations: BONETYPEFUNCTION_MODULE_DECLARATIONS,
  exports: BONETYPEFUNCTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoneTypeFunctionModule { }