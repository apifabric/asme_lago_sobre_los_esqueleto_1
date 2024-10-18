import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoneSkeletonHomeComponent } from './home/BoneSkeleton-home.component';
import { BoneSkeletonNewComponent } from './new/BoneSkeleton-new.component';
import { BoneSkeletonDetailComponent } from './detail/BoneSkeleton-detail.component';

const routes: Routes = [
  {path: '', component: BoneSkeletonHomeComponent},
  { path: 'new', component: BoneSkeletonNewComponent },
  { path: ':id', component: BoneSkeletonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BoneSkeleton-detail-permissions'
      }
    }
  }
];

export const BONESKELETON_MODULE_DECLARATIONS = [
    BoneSkeletonHomeComponent,
    BoneSkeletonNewComponent,
    BoneSkeletonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoneSkeletonRoutingModule { }