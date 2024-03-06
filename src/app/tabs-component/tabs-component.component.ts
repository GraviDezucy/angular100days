import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li *ngFor="let link of navs" class="nav-item">
              <a class="nav-link">
                <ng-container *ngIf="linkTemplate; else noTemplate">
                  <ng-container
                    *ngTemplateOutlet="
                      linkTemplate;
                      context: { $implicit: link }
                    "
                  ></ng-container>
                </ng-container>
                <ng-template #noTemplate>
                  {{ link }}
                </ng-template>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './tabs-component.component.css',
})
export class TabsComponentComponent {
  @Input() navs!: string[];
  @Input() linkTemplate!: TemplateRef<any>;
}
