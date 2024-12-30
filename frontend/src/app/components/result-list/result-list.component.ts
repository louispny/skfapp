import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.css'
})
export class ResultListComponent {
  @Input() results: string[] = [];

  constructor() {}

}
