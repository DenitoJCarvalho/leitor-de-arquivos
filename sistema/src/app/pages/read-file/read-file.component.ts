import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-read-file',
  standalone: true,
  imports: [
    MatDividerModule,
    NavbarComponent, FilterComponent
  ],
  templateUrl: './read-file.component.html',
  styleUrl: './read-file.component.css'
})
export class ReadFileComponent {

}
