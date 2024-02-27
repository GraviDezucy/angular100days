import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  @Input() name: String | undefined;

  ngOnInit() {
    console.log('Hello Init');
  }

  ngOnDestroy() {
    console.log('Hello Destroy');
  }
}
