import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-tabs',
	standalone: true,
	imports: [TodoComponent, CommonModule],
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit {
	currentActiveTab: string = 'todo';
	tabList: Tabs[] = [
		{ value: 'todo', tabname: "Todo", activestate: true }
	];
	setActiveTab = (tabDetails: Tabs) => {
		this.currentActiveTab = tabDetails.value;
		let tab = this.tabList.find(tabs => tabs.value === this.currentActiveTab);
		if (tab) tab.activestate = true;
		this.tabList.filter((tabs) => tabs.value.toLocaleLowerCase() != tabDetails.value.toLocaleLowerCase()).map((tabs) => (tabs.activestate = false));
		console.log(this.tabList, 'tabList')
	};
	ngOnInit(): void {
		console.log('Method not implemented.');
	};
}