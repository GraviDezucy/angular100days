import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="author">
      {{ author.firstName + author.lastName }}
      <button (click)="select.emit(author)">Select</button>
      <button (click)="delete.emit(author)">X</button>
    </div>
  `,
  styleUrl: './author-detail.component.css',
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<Author>();
}
