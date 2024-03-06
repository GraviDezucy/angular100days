import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toogle',
  standalone: true,
  imports: [],
  templateUrl: './toogle.component.html',
  styleUrl: './toogle.component.css',
})
export class ToogleComponent {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  toogle() {
    this.checkedChange.emit(!this.checked);
  }
}
