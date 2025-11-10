// src/app/app.routes.ts
import {Routes} from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  // Path untuk halaman CV
  {
    path: 'cv',
    component: CvComponent,
    title: 'Curriculum Vitae Saya',
  },

  // Path untuk halaman Kontak
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Kontak Saya',
  },

  // Redirect halaman utama ke /cv
  {
    path: '',
    redirectTo: 'cv',
    pathMatch: 'full',
  },
];
