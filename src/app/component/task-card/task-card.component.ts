import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoTask } from '../../interfaces/todo';

@Component({
	selector: 'app-task-card',
	standalone: true,
	imports: [],
	templateUrl: './task-card.component.html',
	styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
	@Input() todoList!: TodoTask[];
	@Output() deleteTaskEvent = new EventEmitter<number>();
	deleteTask(taskId: number) {
		this.deleteTaskEvent.emit(taskId);
	}
}