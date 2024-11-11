import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-read-file',
  standalone: true,
  imports: [
    MatDividerModule,
    InputComponent, NavbarComponent
  ],
  templateUrl: './read-file.component.html',
  styleUrl: './read-file.component.css'
})
export class ReadFileComponent {

}