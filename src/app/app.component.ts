import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './component/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-study';
}
