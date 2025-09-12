import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'infopanel-layout',
        loadComponent: () => import('./project/infopanel-layout/infopanel-layout').then(m => m.PurchaseOrderTableComponent)    
    },
    {
        path: '',
        /*loadComponent: () => import('./infopanel-layout').then(m => m.PurchaseOrderTableComponent) //*/
        redirectTo: 'infopanel-layout',
        pathMatch: 'full'   
    }
];
