import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() standardDiscountFileName: string = '';
  @Input() specialDiscountFileName: string = '';
  @Output() errorsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  errors: string[] = [];

  constructor(private apiService: ApiService) {}

  sendFile(): void {
    if (this.files.length === 0) {
      console.error('No file selected');
      return;
    }
    this.apiService.uploadFile(this.files, this.standardDiscountFileName,this.specialDiscountFileName).subscribe(
      (response) => {
        console.log('Response from server', response);
        if (response.validation?.errors) {
          this.errors = response.validation.errors; // Stocke les erreurs
          this.errorsChange.emit(this.errors); // Émet les erreurs
        } else {
          this.errors = []; // Réinitialise les erreurs si aucune n'est retournée
          this.errorsChange.emit(this.errors); // Réinitialise les erreurs coté parent
        }
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }

}
