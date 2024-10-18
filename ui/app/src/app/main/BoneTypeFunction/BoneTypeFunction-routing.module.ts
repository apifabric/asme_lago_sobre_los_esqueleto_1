import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoneTypeFunctionHomeComponent } from './home/BoneTypeFunction-home.component';
import { BoneTypeFunctionNewComponent } from './new/BoneTypeFunction-new.component';
import { BoneTypeFunctionDetailComponent } from './detail/BoneTypeFunction-detail.component';

const routes: Routes = [
  {path: '', component: BoneTypeFunctionHomeComponent},
  { path: 'new', component: BoneTypeFunctionNewComponent },
  { path: ':id', component: BoneTypeFunctionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'BoneTypeFunction-detail-permissions'
      }
    }
  }
];

export const BONETYPEFUNCTION_MODULE_DECLARATIONS = [
    BoneTypeFunctionHomeComponent,
    BoneTypeFunctionNewComponent,
    BoneTypeFunctionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoneTypeFunctionRoutingModule { }