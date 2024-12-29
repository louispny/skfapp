import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-send-button',
  standalone: true,
  imports: [],
  providers: [ApiService],
  templateUrl: './send-button.component.html',
  styleUrl: './send-button.component.css'
})
export class SendButtonComponent {
  @Input() files: { file: File, destination: string }[] = [];

  constructor(private apiService: ApiService) {}

  sendFile(): void {
    if (this.files.length === 0) {
      console.error('No file selected');
      return;
    }
    this.apiService.uploadFile(this.files).subscribe(
      (response) => {
        console.log('Response from server', response);
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }

}
