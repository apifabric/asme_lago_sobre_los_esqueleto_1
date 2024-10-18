import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BONESKELETON_MODULE_DECLARATIONS, BoneSkeletonRoutingModule} from  './BoneSkeleton-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BoneSkeletonRoutingModule
  ],
  declarations: BONESKELETON_MODULE_DECLARATIONS,
  exports: BONESKELETON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoneSkeletonModule { }