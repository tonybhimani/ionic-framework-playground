import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'basic',
        loadComponent: () =>
          import('../basic/basic.page').then((m) => m.BasicPage),
      },
      {
        path: 'theming',
        loadComponent: () =>
          import('../theming/theming.page').then((m) => m.ThemingPage),
      },
      {
        path: '',
        redirectTo: '/tabs/basic',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/basic',
    pathMatch: 'full',
  },
];
