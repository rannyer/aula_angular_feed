import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from "./components/feed/feed.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feed';
}
