import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoneTypeHomeComponent } from './home/BoneType-home.component';
import { BoneTypeNewComponent } from './new/BoneType-new.component';
import { BoneTypeDetailComponent } from './detail/BoneType-detail.component';

const routes: Routes = [
  {path: '', component: BoneTypeHomeComponent},
  { path: 'new', component: BoneTypeNewComponent },
  { path: ':id', component: BoneTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BoneType-detail-permissions'
      }
    }
  },{
    path: ':bone_type_id/BoneTypeFunction', loadChildren: () => import('../BoneTypeFunction/BoneTypeFunction.module').then(m => m.BoneTypeFunctionModule),
    data: {
        oPermission: {
            permissionId: 'BoneTypeFunction-detail-permissions'
        }
    }
}
];

export const BONETYPE_MODULE_DECLARATIONS = [
    BoneTypeHomeComponent,
    BoneTypeNewComponent,
    BoneTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoneTypeRoutingModule { }