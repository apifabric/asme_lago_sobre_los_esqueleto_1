import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysiHomeComponent } from './home/Analysi-home.component';
import { AnalysiNewComponent } from './new/Analysi-new.component';
import { AnalysiDetailComponent } from './detail/Analysi-detail.component';

const routes: Routes = [
  {path: '', component: AnalysiHomeComponent},
  { path: 'new', component: AnalysiNewComponent },
  { path: ':id', component: AnalysiDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Analysi-detail-permissions'
      }
    }
  }
];

export const ANALYSI_MODULE_DECLARATIONS = [
    AnalysiHomeComponent,
    AnalysiNewComponent,
    AnalysiDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysiRoutingModule { }