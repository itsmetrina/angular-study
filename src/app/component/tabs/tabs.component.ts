import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tabs } from '../../interfaces/tabs';
import { TodoComponent } from '../todo/todo.component';
import { ModalComponent } from '../modal/modal.component';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-tabs',
	standalone: true,
	imports: [TodoComponent, CommonModule, ModalComponent, CardComponent],
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit {
	currentActiveTab: string = 'todo';
	tabList: Tabs[] = [
		{ value: 'todo', tabname: "Todo", activestate: true },
		{ value: 'modal', tabname: "Modal Component", activestate: false },
		{ value: 'card', tabname: "Card Component", activestate: false }
	];
	setActiveTab = (tabDetails: Tabs) => {
		this.showModal = false;
		this.currentActiveTab = tabDetails.value;
		let tab = this.tabList.find(tabs => tabs.value === this.currentActiveTab);
		if (tab) tab.activestate = true;
		this.tabList.filter((tabs) => tabs.value.toLocaleLowerCase() != tabDetails.value.toLocaleLowerCase()).map((tabs) => (tabs.activestate = false));
	};
	showModal: boolean = false;
	openModal = () => this.showModal = true;
	closeModal = (state: boolean) => this.showModal = state;
	ngOnInit(): void {
		console.log('Method not implemented.');
	};
}