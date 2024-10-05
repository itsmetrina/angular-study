import { Component, Input } from '@angular/core';
import { NavigationList } from '../../interfaces/navigation-list';

@Component({
	selector: 'app-toolbar',
	standalone: true,
	imports: [],
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
	@Input()
	appName!: string;
	navigationList: NavigationList[] = [
		{ name: 'Google', link: 'https://www.google.com/' },
		{ name: 'Youtube', link: 'https://www.youtube.com/' },
		{ name: 'LinkedIn', link: 'https://www.linkedin.com' },
		{ name: 'Medium', link: 'https://medium.com' }
	];
}