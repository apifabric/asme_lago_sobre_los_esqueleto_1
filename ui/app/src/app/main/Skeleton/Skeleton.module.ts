import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SKELETON_MODULE_DECLARATIONS, SkeletonRoutingModule} from  './Skeleton-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SkeletonRoutingModule
  ],
  declarations: SKELETON_MODULE_DECLARATIONS,
  exports: SKELETON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonModule { }