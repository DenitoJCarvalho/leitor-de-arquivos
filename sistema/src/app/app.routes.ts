import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'read-file',
    loadComponent: () => import('./pages/read-file/read-file.component').then(c => c.ReadFileComponent),
    pathMatch: 'full',
    title: 'Leitor de arquivo'
  },
  {
    path: '',
    redirectTo: '/read-file',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/read-file',
    pathMatch: 'full'
  }
];
