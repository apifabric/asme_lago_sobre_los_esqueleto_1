import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoveryHomeComponent } from './home/Discovery-home.component';
import { DiscoveryNewComponent } from './new/Discovery-new.component';
import { DiscoveryDetailComponent } from './detail/Discovery-detail.component';

const routes: Routes = [
  {path: '', component: DiscoveryHomeComponent},
  { path: 'new', component: DiscoveryNewComponent },
  { path: ':id', component: DiscoveryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Discovery-detail-permissions'
      }
    }
  }
];

export const DISCOVERY_MODULE_DECLARATIONS = [
    DiscoveryHomeComponent,
    DiscoveryNewComponent,
    DiscoveryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoveryRoutingModule { }