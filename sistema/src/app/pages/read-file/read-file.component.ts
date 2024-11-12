import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ButtonComponent } from '../../components/button/button.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InputComponent } from '../../components/input/input.component';
import { InputFileComponent } from '../../components/input-file/input-file.component';

@Component({
  selector: 'app-read-file',
  standalone: true,
  imports: [
    MatDividerModule,
    ButtonComponent, InputComponent, InputFileComponent, NavbarComponent
  ],
  templateUrl: './read-file.component.html',
  styleUrl: './read-file.component.css'
})
export class ReadFileComponent {

}
