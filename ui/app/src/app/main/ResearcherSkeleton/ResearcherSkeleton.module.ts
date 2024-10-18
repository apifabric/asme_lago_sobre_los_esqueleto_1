import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESEARCHERSKELETON_MODULE_DECLARATIONS, ResearcherSkeletonRoutingModule} from  './ResearcherSkeleton-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResearcherSkeletonRoutingModule
  ],
  declarations: RESEARCHERSKELETON_MODULE_DECLARATIONS,
  exports: RESEARCHERSKELETON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResearcherSkeletonModule { }