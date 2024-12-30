import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameApiService } from '../../services/api/name-api.service';

@Component({
  selector: 'app-name-list',
  standalone: true,
  imports: [CommonModule],
  providers: [NameApiService],
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.css'
})
export class NameListComponent implements OnInit {
  @Input() methodName!: keyof NameApiService; // La méthode à appeler
  @Input() componentTitle: string = '';
  names: string[] = [];

  constructor(private nameApiService: NameApiService) {}

  ngOnInit() {
    if (this.methodName && typeof this.nameApiService[this.methodName] === 'function') {
      // Appelle dynamiquement la méthode spécifiée
      (this.nameApiService[this.methodName]() as any).subscribe((data: any) => {
        this.names = data.names;
      });
    } else {
      console.error(`Method ${this.methodName} does not exist on ApiService`);
    }
  }
}
