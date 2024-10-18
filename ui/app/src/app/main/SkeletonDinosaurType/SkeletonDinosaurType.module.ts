import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SKELETONDINOSAURTYPE_MODULE_DECLARATIONS, SkeletonDinosaurTypeRoutingModule} from  './SkeletonDinosaurType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SkeletonDinosaurTypeRoutingModule
  ],
  declarations: SKELETONDINOSAURTYPE_MODULE_DECLARATIONS,
  exports: SKELETONDINOSAURTYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonDinosaurTypeModule { }