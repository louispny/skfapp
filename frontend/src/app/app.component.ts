import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { SendButtonComponent } from './components/send-button/send-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, UploadInputComponent, SendButtonComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  selectedFiles: { file: File, destination: string }[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.testApi().subscribe((data) => {
      console.log(data);
    });
  }

  onFileSelected(data: { file: File, destination: string }) {
    this.selectedFiles.push(data);
    console.log('Selected files with destinations', this.selectedFiles);
  }
}
