import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonHomeComponent } from './home/Skeleton-home.component';
import { SkeletonNewComponent } from './new/Skeleton-new.component';
import { SkeletonDetailComponent } from './detail/Skeleton-detail.component';

const routes: Routes = [
  {path: '', component: SkeletonHomeComponent},
  { path: 'new', component: SkeletonNewComponent },
  { path: ':id', component: SkeletonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Skeleton-detail-permissions'
      }
    }
  },{
    path: ':skeleton_id/Analysi', loadChildren: () => import('../Analysi/Analysi.module').then(m => m.AnalysiModule),
    data: {
        oPermission: {
            permissionId: 'Analysi-detail-permissions'
        }
    }
},{
    path: ':skeleton_id/BoneSkeleton', loadChildren: () => import('../BoneSkeleton/BoneSkeleton.module').then(m => m.BoneSkeletonModule),
    data: {
        oPermission: {
            permissionId: 'BoneSkeleton-detail-permissions'
        }
    }
},{
    path: ':skeleton_id/Discovery', loadChildren: () => import('../Discovery/Discovery.module').then(m => m.DiscoveryModule),
    data: {
        oPermission: {
            permissionId: 'Discovery-detail-permissions'
        }
    }
},{
    path: ':skeleton_id/ResearcherSkeleton', loadChildren: () => import('../ResearcherSkeleton/ResearcherSkeleton.module').then(m => m.ResearcherSkeletonModule),
    data: {
        oPermission: {
            permissionId: 'ResearcherSkeleton-detail-permissions'
        }
    }
},{
    path: ':skeleton_id/SkeletonDinosaurType', loadChildren: () => import('../SkeletonDinosaurType/SkeletonDinosaurType.module').then(m => m.SkeletonDinosaurTypeModule),
    data: {
        oPermission: {
            permissionId: 'SkeletonDinosaurType-detail-permissions'
        }
    }
}
];

export const SKELETON_MODULE_DECLARATIONS = [
    SkeletonHomeComponent,
    SkeletonNewComponent,
    SkeletonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonRoutingModule { }