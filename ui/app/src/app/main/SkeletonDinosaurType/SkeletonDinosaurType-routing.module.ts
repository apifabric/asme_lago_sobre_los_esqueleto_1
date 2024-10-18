import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonDinosaurTypeHomeComponent } from './home/SkeletonDinosaurType-home.component';
import { SkeletonDinosaurTypeNewComponent } from './new/SkeletonDinosaurType-new.component';
import { SkeletonDinosaurTypeDetailComponent } from './detail/SkeletonDinosaurType-detail.component';

const routes: Routes = [
  {path: '', component: SkeletonDinosaurTypeHomeComponent},
  { path: 'new', component: SkeletonDinosaurTypeNewComponent },
  { path: ':id', component: SkeletonDinosaurTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SkeletonDinosaurType-detail-permissions'
      }
    }
  }
];

export const SKELETONDINOSAURTYPE_MODULE_DECLARATIONS = [
    SkeletonDinosaurTypeHomeComponent,
    SkeletonDinosaurTypeNewComponent,
    SkeletonDinosaurTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkeletonDinosaurTypeRoutingModule { }