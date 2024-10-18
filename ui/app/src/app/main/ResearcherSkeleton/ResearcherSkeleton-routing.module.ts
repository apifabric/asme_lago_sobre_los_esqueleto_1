import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherSkeletonHomeComponent } from './home/ResearcherSkeleton-home.component';
import { ResearcherSkeletonNewComponent } from './new/ResearcherSkeleton-new.component';
import { ResearcherSkeletonDetailComponent } from './detail/ResearcherSkeleton-detail.component';

const routes: Routes = [
  {path: '', component: ResearcherSkeletonHomeComponent},
  { path: 'new', component: ResearcherSkeletonNewComponent },
  { path: ':id', component: ResearcherSkeletonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ResearcherSkeleton-detail-permissions'
      }
    }
  }
];

export const RESEARCHERSKELETON_MODULE_DECLARATIONS = [
    ResearcherSkeletonHomeComponent,
    ResearcherSkeletonNewComponent,
    ResearcherSkeletonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearcherSkeletonRoutingModule { }