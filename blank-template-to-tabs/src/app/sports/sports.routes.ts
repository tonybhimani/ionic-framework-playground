import { Routes } from '@angular/router';
import { SportsPage } from './sports.page';

export const routes: Routes = [
  {
    path: 'sports',
    component: SportsPage,
    children: [
      {
        path: 'baseball',
        loadComponent: () =>
          import('./baseball/baseball.page').then((m) => m.BaseballPage),
      },
      {
        path: 'football',
        loadComponent: () =>
          import('./football/football.page').then((m) => m.FootballPage),
      },
      {
        path: 'basketball',
        loadComponent: () =>
          import('./basketball/basketball.page').then( m => m.BasketballPage),
      },    
      {
        path: '',
        redirectTo: '/sports/baseball',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/sports/baseball',
    pathMatch: 'full',
  },
];
