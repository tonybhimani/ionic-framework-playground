import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inline',
        loadComponent: () =>
          import('../inline/inline.page').then((m) => m.InlinePage),
      },
      {
        path: 'isopen',
        loadComponent: () =>
          import('../isopen/isopen.page').then((m) => m.IsOpenPage),
      },
      {
        path: 'controller',
        loadComponent: () =>
          import('../controller/controller.page').then((m) => m.ControllerPage),
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('../buttons/buttons.page').then((m) => m.ButtonsPage),
      },
      {
        path: 'inputs',
        loadComponent: () =>
          import('../inputs/inputs.page').then((m) => m.InputsPage),
      },
      {
        path: 'customization',
        loadComponent: () =>
          import('../customization/customization.page').then((m) => m.CustomizationPage),
      },
      {
        path: 'accessibility',
        loadComponent: () =>
          import('../accessibility/accessibility.page').then((m) => m.AccessibilityPage),
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
