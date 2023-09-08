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
        path: 'toggle',
        loadComponent: () =>
          import('../toggle/toggle.page').then((m) => m.TogglePage),
      },
      {
        path: 'listen',
        loadComponent: () =>
          import('../listen/listen.page').then((m) => m.ListenPage),
      },
      {
        path: 'multiple',
        loadComponent: () =>
          import('../multiple/multiple.page').then( m => m.MultiplePage)
      },
      {
        path: 'disabling',
        loadComponent: () =>
          import('../disabling/disabling.page').then( m => m.DisablingPage)
      },
      {
        path: 'readonly',
        loadComponent: () =>
          import('../readonly/readonly.page').then( m => m.ReadonlyPage)
      },
      {
        path: 'customization',
        loadComponent: () =>
          import('../customization/customization.page').then( m => m.CustomizationPage)
      },
      {
        path: 'theming',
        loadComponent: () =>
          import('../theming/theming.page').then( m => m.ThemingPage)
      },
      {
        path: 'accessibility',
        loadComponent: () =>
          import('../accessibility/accessibility.page').then( m => m.AccessibilityPage)
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
