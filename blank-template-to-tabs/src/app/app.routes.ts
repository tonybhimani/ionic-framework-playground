import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sports/sports.routes').then((m) => m.routes),
  },
];