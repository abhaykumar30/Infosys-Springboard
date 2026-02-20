import { Component, inject } from '@angular/core';
import { Status } from '../status/status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Status],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private router = inject(Router);
  openCreateTask() {
    this.router.navigate(['/task-editor']);
  }

}
