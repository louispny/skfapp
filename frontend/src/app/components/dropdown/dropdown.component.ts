import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameApiService } from '../../services/api/name-api.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  providers: [NameApiService],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'], // Optional if styling is external
})
export class DropdownComponent implements OnInit {
  @Input() methodName!: keyof NameApiService; // La méthode à appeler
  @Output() optionSelected = new EventEmitter<string>(); // Événement émis lorsqu'une option est sélectionnée

  options: string[] = []; // Liste des options
  selectedOption: string = ''; // Option sélectionnée

  isOpen = false;

  constructor(private nameApiService: NameApiService) {}

  ngOnInit() {
    if (this.methodName && typeof this.nameApiService[this.methodName] === 'function') {
      // Appelle dynamiquement la méthode spécifiée
      (this.nameApiService[this.methodName]() as any).subscribe((data: any) => {
        this.options = data.names;
      });
    } else {
      console.error(`Method ${this.methodName} does not exist on ApiService`);
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.optionSelected.emit(option); // Émet l'option sélectionnée
    this.isOpen = false; // Ferme le dropdown après la sélection
  }
}
