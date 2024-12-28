import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload-input',
  standalone: true,
  imports: [],
  templateUrl: './upload-input.component.html',
  styleUrl: './upload-input.component.css'
})
export class UploadInputComponent {
  selectedFile: File | null = null;
  @Output() fileUploaded = new EventEmitter<File>();

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    this.selectedFile = input.files[0];
    this.fileUploaded.emit(this.selectedFile);
  }

}
