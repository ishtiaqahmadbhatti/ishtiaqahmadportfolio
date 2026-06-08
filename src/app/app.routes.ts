import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
