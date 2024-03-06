import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toogle',
  standalone: true,
  imports: [],
  template: `
    <div
      class="toggle-wrapper"
      tabindex="0"
      [class.checked]="checked"
      (click)="toogle()"
    >
      <div class="toggle"></div>
    </div>
  `,
  styleUrl: './toogle.component.css',
})
export class ToogleComponent {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  toogle() {
    this.checkedChange.emit(!this.checked);
  }
}
