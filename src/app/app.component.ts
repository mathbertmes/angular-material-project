import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSliderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material-project';
}
