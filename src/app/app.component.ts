import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { ToogleComponent } from './toogle/toogle.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HelloComponent,
    FormsModule,
    CommonModule,
    ProgressBarComponent,
    AuthorListComponent,
    ToogleComponent,
    TabsComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter = 1;
  navs = ['Home', 'Feature', 'Pricing'];
}
