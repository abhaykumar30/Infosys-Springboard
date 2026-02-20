import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-editor.html',
  styleUrl: './task-editor.scss',
})
export class TaskEditor implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['New Task']
    });
  }

  OnSubmit(): void {
    if (this.form.valid) {
      this.taskService.addTask(this.form.value);
      this.router.navigate(['/dashboard']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}