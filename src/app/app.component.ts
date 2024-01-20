import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular100days';

  inputType = 'text';

  user = {
    name: 'Dezucy',
    age: '24'
  };

  handler() {
    console.log("Clicked");
  }
}
