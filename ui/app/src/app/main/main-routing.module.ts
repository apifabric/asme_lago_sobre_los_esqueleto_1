import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Analysi', loadChildren: () => import('./Analysi/Analysi.module').then(m => m.AnalysiModule) },
    
        { path: 'Bone', loadChildren: () => import('./Bone/Bone.module').then(m => m.BoneModule) },
    
        { path: 'BoneSkeleton', loadChildren: () => import('./BoneSkeleton/BoneSkeleton.module').then(m => m.BoneSkeletonModule) },
    
        { path: 'BoneType', loadChildren: () => import('./BoneType/BoneType.module').then(m => m.BoneTypeModule) },
    
        { path: 'BoneTypeFunction', loadChildren: () => import('./BoneTypeFunction/BoneTypeFunction.module').then(m => m.BoneTypeFunctionModule) },
    
        { path: 'DinosaurType', loadChildren: () => import('./DinosaurType/DinosaurType.module').then(m => m.DinosaurTypeModule) },
    
        { path: 'Discovery', loadChildren: () => import('./Discovery/Discovery.module').then(m => m.DiscoveryModule) },
    
        { path: 'Researcher', loadChildren: () => import('./Researcher/Researcher.module').then(m => m.ResearcherModule) },
    
        { path: 'ResearcherSkeleton', loadChildren: () => import('./ResearcherSkeleton/ResearcherSkeleton.module').then(m => m.ResearcherSkeletonModule) },
    
        { path: 'Site', loadChildren: () => import('./Site/Site.module').then(m => m.SiteModule) },
    
        { path: 'Skeleton', loadChildren: () => import('./Skeleton/Skeleton.module').then(m => m.SkeletonModule) },
    
        { path: 'SkeletonDinosaurType', loadChildren: () => import('./SkeletonDinosaurType/SkeletonDinosaurType.module').then(m => m.SkeletonDinosaurTypeModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }