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
  ],
  template: `
    <!-- <app-toogle #toogleComp [(checked)]="isChecked"></app-toogle>
    <button #toogleBtn (click)="toogleComp.toogle()">Toogle</button> -->

    <button (click)="showLast = !showLast">Toogle Show Last</button>
    <app-toogle #toogleComp [(checked)]="isChecked"></app-toogle
    ><app-toogle #toogleComp [(checked)]="isChecked"></app-toogle
    ><app-toogle #toogleComp [(checked)]="isChecked"></app-toogle>
    <div *ngIf="showLast">
      <app-toogle #toogleComp [(checked)]="isChecked"></app-toogle>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isChecked = true;
  showLast = true;

  // @ViewChild('toogleComp') toogleComp!: ToogleComponent;
  @ViewChild(ToogleComponent, { static: true }) toogleComp!: ToogleComponent;
  // Chỉ static true được khi component không nằm trong directive

  // @ViewChild('toogleBtn', { static: true })
  // toogleBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('nameInput', { static: true })
  nameInput!: ElementRef<HTMLInputElement>;

  @ViewChildren('toogleComp') toogleComps!: QueryList<ToogleComponent>;

  // ngOnInit() {
  //   console.log('On init: ', this.toogleBtn.nativeElement);
  // }

  ngOnInit() {
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 2000);
    console.log('On init: ', this.nameInput);
  }

  ngAfterViewInit() {
    console.log('on AfterView: ', this.toogleComp);
    this.toogleComps.changes.subscribe(console.log);
    this.toogleComp.toogle();
  }
}
