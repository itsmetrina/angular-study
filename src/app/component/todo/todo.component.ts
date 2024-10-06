import { Component } from '@angular/core';
import { TodoTask } from '../../interfaces/todo';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: [FormsModule, TaskCardComponent],
	templateUrl: './todo.component.html',
	styleUrl: './todo.component.scss'
})
export class TodoComponent {
	id: number = 0;
	todoList: TodoTask[] = [
		{ id: this.id++, name: "Add a new task.", iscompleted: false }
	];
	newTask: string = '';

	addTask = () => {
		if (this.newTask.trim().length > 0) this.todoList.push({
			id: this.id++,
			name: this.newTask.trim(),
			iscompleted: false
		});
		this.newTask = '';
	}

	deleteTask = (id: number) => {
		this.todoList = this.todoList.filter((task: TodoTask) => task.id != id);
	}

	completeTask = (id: number) => {
		this.todoList.forEach((task: TodoTask) => { task.iscompleted = (task.id === id) });
		console.log(this.todoList, 'todoList')
	}
}