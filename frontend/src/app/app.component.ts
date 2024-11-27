import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared-components/footer/footer.component';
import { NavbarComponent } from './shared-components/navbar/navbarcomponent';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed `styleUrl` to `styleUrls`
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message: string = ''; // To store backend message
  timestamp: string = ''; // To store backend timestamp (dynamic data)
  errorMessage: string = ''; // To handle error messages

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    // Fetch message from the backend on initialization
    this.backendService.getTestMessage().subscribe({
      next: (data) => {
        console.log('Response from backend:', data); // Log response for debugging
        this.message = data.message; // Assign message from backend
        this.timestamp = data.timestamp; // Assign timestamp from backend
      },
      error: (err) => {
        console.error('Error fetching from backend:', err); // Log error for debugging
        this.errorMessage = 'Failed to fetch data from backend.'; // Display error message
      },
    });
  }
}
