import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurTypeHomeComponent } from './home/DinosaurType-home.component';
import { DinosaurTypeNewComponent } from './new/DinosaurType-new.component';
import { DinosaurTypeDetailComponent } from './detail/DinosaurType-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurTypeHomeComponent},
  { path: 'new', component: DinosaurTypeNewComponent },
  { path: ':id', component: DinosaurTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DinosaurType-detail-permissions'
      }
    }
  },{
    path: ':dinosaur_type_id/SkeletonDinosaurType', loadChildren: () => import('../SkeletonDinosaurType/SkeletonDinosaurType.module').then(m => m.SkeletonDinosaurTypeModule),
    data: {
        oPermission: {
            permissionId: 'SkeletonDinosaurType-detail-permissions'
        }
    }
}
];

export const DINOSAURTYPE_MODULE_DECLARATIONS = [
    DinosaurTypeHomeComponent,
    DinosaurTypeNewComponent,
    DinosaurTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurTypeRoutingModule { }