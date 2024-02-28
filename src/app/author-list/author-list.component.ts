import { Component } from '@angular/core';
import { Author, authors } from '../authors';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [AuthorDetailComponent, CommonModule],
  template: `
    <div>
      <app-author-detail
        *ngFor="let author of authors"
        [author]="author"
        (select)="onSelect($event)"
        (delete)="onDelete($event)"
      ></app-author-detail>
    </div>
    <br />
    <div>
      Current Selected:
      {{ currentSelected.firstName + currentSelected.lastName }}
    </div>
  `,
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent {
  authors = authors;
  currentSelected = authors[0];

  onSelect(selected: Author) {
    this.currentSelected = selected;
  }

  onDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);

    if (this.currentSelected.id === author.id)
      this.currentSelected = this.authors[0];
  }
}
