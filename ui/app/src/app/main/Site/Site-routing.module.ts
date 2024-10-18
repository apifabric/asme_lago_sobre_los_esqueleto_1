import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteHomeComponent } from './home/Site-home.component';
import { SiteNewComponent } from './new/Site-new.component';
import { SiteDetailComponent } from './detail/Site-detail.component';

const routes: Routes = [
  {path: '', component: SiteHomeComponent},
  { path: 'new', component: SiteNewComponent },
  { path: ':id', component: SiteDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Site-detail-permissions'
      }
    }
  },{
    path: ':site_id/Discovery', loadChildren: () => import('../Discovery/Discovery.module').then(m => m.DiscoveryModule),
    data: {
        oPermission: {
            permissionId: 'Discovery-detail-permissions'
        }
    }
}
];

export const SITE_MODULE_DECLARATIONS = [
    SiteHomeComponent,
    SiteNewComponent,
    SiteDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }