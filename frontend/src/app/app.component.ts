import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UploadInputComponent } from './components/upload-input/upload-input.component';
import { SendButtonComponent } from './components/send-button/send-button.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { NameListComponent } from './components/name-list/name-list.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, UploadInputComponent, SendButtonComponent, CommonModule, ResultListComponent, NameListComponent, DropdownComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  selectedFiles: { file: File, destination: string }[] = [];
  standardDiscountFileName: string = '';
  specialDiscountFileName: string = '';
  errors: string[] = [];
    
  [key: string]: any;

  constructor() {
  }

  onFileSelected(data: { file: File, destination: string }) {
    this.selectedFiles.push(data);
    console.log('Selected files with destinations', this.selectedFiles);
  }

  onErrorsChange(errors: string[]): void {
    this.errors = errors;
    console.log('Errors', this.errors);
  }

  onOptionSelected(property: string, value: string): void {
    this[property] = value;
  }
}
