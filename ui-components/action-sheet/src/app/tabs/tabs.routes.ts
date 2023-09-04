import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inline',
        loadComponent: () => import('../inline/inline.page').then((m) => m.InlinePage),
      },
      {
        path: 'isopen',
        loadComponent: () => import('../isopen/isopen.page').then( m => m.IsOpenPage),
      },
      {
        path: 'controller',
        loadComponent: () => import('../controller/controller.page').then( m => m.ControllerPage),
      },
      {
        path: 'collecting',
        loadComponent: () => import('../collecting/collecting.page').then( m => m.CollectingPage),
      },
      {
        path: 'styling',
        loadComponent: () => import('../styling/styling.page').then( m => m.StylingPage),
      },
      {
        path: 'customcss',
        loadComponent: () => import('../customcss/customcss.page').then( m => m.CustomcssPage),
      },
      {
        path: 'accessibility',
        loadComponent: () => import('../accessibility/accessibility.page').then( m => m.AccessibilityPage)
      },
      {
        path: '',
        redirectTo: '/tabs/inline',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inline',
    pathMatch: 'full',
  },
];
