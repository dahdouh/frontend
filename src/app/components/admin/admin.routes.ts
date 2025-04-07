import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'messages', pathMatch: 'full' },
      {
        path: 'messages',
        loadComponent: () =>
          import('./message/message.component').then(
            (mod) => mod.MessageComponent,
          ),
        title: 'Messages',
      },
      {
        path: 'partners',
        loadComponent: () =>
          import('./partner/partner.component').then(
            (mod) => mod.PartnerComponent,
          ),
        title: 'Partners',
      },
      {
        path: 'partners/create',
        loadComponent: () =>
          import('./partner/create/create.component').then(
            (mod) => mod.CreatePartnerComponent,
          ),
        title: 'Partners',
      },
    ],
  },
];
