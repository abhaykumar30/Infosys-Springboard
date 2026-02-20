import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./dashboard/dashboard";
import { TaskEditor } from "./task-editor/task-editor";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, TaskEditor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Task-manager');
}
