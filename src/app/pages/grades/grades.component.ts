import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.scss'
})
export class GradesComponent {
  constructor(private http: HttpClient) {}

  downloadResults() {
    // Send a request to the backend using HttpClient
    this.http.get('your-backend-api-endpoint', { responseType: 'arraybuffer' })
      .subscribe((response: any) => {
        // Handle the response
        this.downloadFile(response);
      });
  }

  private downloadFile(data: any) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link and trigger a download
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'results.zip';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
