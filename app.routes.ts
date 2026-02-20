import { Routes } from '@angular/router';
import { TaskEditor } from './task-editor/task-editor';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'task-editor', component: TaskEditor },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

