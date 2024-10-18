import { MenuRootItem } from 'ontimize-web-ngx';

import { AnalysiCardComponent } from './Analysi-card/Analysi-card.component';

import { BoneCardComponent } from './Bone-card/Bone-card.component';

import { BoneSkeletonCardComponent } from './BoneSkeleton-card/BoneSkeleton-card.component';

import { BoneTypeCardComponent } from './BoneType-card/BoneType-card.component';

import { BoneTypeFunctionCardComponent } from './BoneTypeFunction-card/BoneTypeFunction-card.component';

import { DinosaurTypeCardComponent } from './DinosaurType-card/DinosaurType-card.component';

import { DiscoveryCardComponent } from './Discovery-card/Discovery-card.component';

import { ResearcherCardComponent } from './Researcher-card/Researcher-card.component';

import { ResearcherSkeletonCardComponent } from './ResearcherSkeleton-card/ResearcherSkeleton-card.component';

import { SiteCardComponent } from './Site-card/Site-card.component';

import { SkeletonCardComponent } from './Skeleton-card/Skeleton-card.component';

import { SkeletonDinosaurTypeCardComponent } from './SkeletonDinosaurType-card/SkeletonDinosaurType-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Analysi', name: 'ANALYSI', icon: 'view_list', route: '/main/Analysi' }
    
        ,{ id: 'Bone', name: 'BONE', icon: 'view_list', route: '/main/Bone' }
    
        ,{ id: 'BoneSkeleton', name: 'BONESKELETON', icon: 'view_list', route: '/main/BoneSkeleton' }
    
        ,{ id: 'BoneType', name: 'BONETYPE', icon: 'view_list', route: '/main/BoneType' }
    
        ,{ id: 'BoneTypeFunction', name: 'BONETYPEFUNCTION', icon: 'view_list', route: '/main/BoneTypeFunction' }
    
        ,{ id: 'DinosaurType', name: 'DINOSAURTYPE', icon: 'view_list', route: '/main/DinosaurType' }
    
        ,{ id: 'Discovery', name: 'DISCOVERY', icon: 'view_list', route: '/main/Discovery' }
    
        ,{ id: 'Researcher', name: 'RESEARCHER', icon: 'view_list', route: '/main/Researcher' }
    
        ,{ id: 'ResearcherSkeleton', name: 'RESEARCHERSKELETON', icon: 'view_list', route: '/main/ResearcherSkeleton' }
    
        ,{ id: 'Site', name: 'SITE', icon: 'view_list', route: '/main/Site' }
    
        ,{ id: 'Skeleton', name: 'SKELETON', icon: 'view_list', route: '/main/Skeleton' }
    
        ,{ id: 'SkeletonDinosaurType', name: 'SKELETONDINOSAURTYPE', icon: 'view_list', route: '/main/SkeletonDinosaurType' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AnalysiCardComponent

    ,BoneCardComponent

    ,BoneSkeletonCardComponent

    ,BoneTypeCardComponent

    ,BoneTypeFunctionCardComponent

    ,DinosaurTypeCardComponent

    ,DiscoveryCardComponent

    ,ResearcherCardComponent

    ,ResearcherSkeletonCardComponent

    ,SiteCardComponent

    ,SkeletonCardComponent

    ,SkeletonDinosaurTypeCardComponent

];