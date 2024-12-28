import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { SendButtonComponent } from './components/send-button/send-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, UploadInputComponent, SendButtonComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  selectedFile: File | null = null;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.testApi().subscribe((data) => {
      console.log(data);
    });
  }

  onFileSelected(file: File): void {
    this.selectedFile = file;
  }
}
