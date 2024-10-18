import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherHomeComponent } from './home/Researcher-home.component';
import { ResearcherNewComponent } from './new/Researcher-new.component';
import { ResearcherDetailComponent } from './detail/Researcher-detail.component';

const routes: Routes = [
  {path: '', component: ResearcherHomeComponent},
  { path: 'new', component: ResearcherNewComponent },
  { path: ':id', component: ResearcherDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Researcher-detail-permissions'
      }
    }
  },{
    path: ':researcher_id/ResearcherSkeleton', loadChildren: () => import('../ResearcherSkeleton/ResearcherSkeleton.module').then(m => m.ResearcherSkeletonModule),
    data: {
        oPermission: {
            permissionId: 'ResearcherSkeleton-detail-permissions'
        }
    }
}
];

export const RESEARCHER_MODULE_DECLARATIONS = [
    ResearcherHomeComponent,
    ResearcherNewComponent,
    ResearcherDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearcherRoutingModule { }