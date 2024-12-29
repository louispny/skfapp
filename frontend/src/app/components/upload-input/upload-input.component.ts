import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-input.component.html',
  styleUrl: './upload-input.component.css'
})
export class UploadInputComponent {
  selectedFile: File | null = null;
  @Input() destination: string = '';
  @Output() fileUploaded = new EventEmitter<{file: File, destination: string}>();

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    this.selectedFile = input.files[0];
    this.fileUploaded.emit({ file: this.selectedFile, destination: this.destination });
  }

}
