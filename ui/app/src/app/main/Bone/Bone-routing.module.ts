import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoneHomeComponent } from './home/Bone-home.component';
import { BoneNewComponent } from './new/Bone-new.component';
import { BoneDetailComponent } from './detail/Bone-detail.component';

const routes: Routes = [
  {path: '', component: BoneHomeComponent},
  { path: 'new', component: BoneNewComponent },
  { path: ':id', component: BoneDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Bone-detail-permissions'
      }
    }
  },{
    path: ':bone_id/BoneSkeleton', loadChildren: () => import('../BoneSkeleton/BoneSkeleton.module').then(m => m.BoneSkeletonModule),
    data: {
        oPermission: {
            permissionId: 'BoneSkeleton-detail-permissions'
        }
    }
}
];

export const BONE_MODULE_DECLARATIONS = [
    BoneHomeComponent,
    BoneNewComponent,
    BoneDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoneRoutingModule { }