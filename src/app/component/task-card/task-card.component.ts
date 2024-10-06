import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTask } from '../../interfaces/todo';

@Component({
	selector: 'app-task-card',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './task-card.component.html',
	styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
	@Input() todoList!: TodoTask[];
	@Output() deleteTaskEvent = new EventEmitter<number>();
	@Output() completeTaskEvent = new EventEmitter<number>();
	deleteTask(taskId: number) {
		this.deleteTaskEvent.emit(taskId);
	};
	completeTask(taskId: number) {
		this.completeTaskEvent.emit(taskId);
	};
}