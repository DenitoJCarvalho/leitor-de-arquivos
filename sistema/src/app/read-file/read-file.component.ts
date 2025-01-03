import { Component, inject } from '@angular/core';

import { ButtonComponent } from '../components/button/button.component';
import { ErrorComponent } from '../components/error/error.component';
import { InputFileComponent } from '../components/input-file/input-file.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { FileReaderService } from './file-reader.service';

@Component({
  selector: 'app-read-file',
  standalone: true,
  imports: [
    ButtonComponent, ErrorComponent, InputFileComponent, NavbarComponent
  ],
  templateUrl: './read-file.component.html',
  styleUrl: './read-file.component.css'
})
export class ReadFileComponent {

  private fileReadService: FileReaderService = inject(FileReaderService);
  private validFilePattern = /\.(xlsx|csv)$/i;

  protected file?: File;
  protected result: any;
  protected success!: any;
  protected error!: any;
  protected label: string = `Selecione um arquivo do tipo .xlsx ou .csv`;
  protected headers: string[] = [];

  protected onFileSelected(file: File): void {
    this.file = file;
  }

  private allowedFileTypes(type: string): boolean {
    return this.validFilePattern.test(type);
  }

  private validateFile() {

    if (!this.allowedFileTypes(this.file?.name as string)) {
      console.error(`Erro: Arquivo inválido! Por favor informe um arquivo válido.`);
      this.error = `Erro: Arquivo inválido! Por favor informe um arquivo válido.`;
      return false;
    } else {
      return this.file;
    }
  }

  protected processFile(): void {
    if (this.validateFile()) {

      if (this.file?.name.match(/.xlsx/)) {
        this.fileReadService.readFileXlsx(this.file).subscribe({
          next: (res) => {
            this.headers = Object.keys(res.data[0]);
            this.result = Object.values(res.data);
          },
          error: (e) => {
            console.error(e);
            this.error = e;
          }
        });
      }

      if (this.file?.name.match(/.csv/)) {
        this.fileReadService.readFileCsv(this.file).subscribe({
          next: (res) => {
            this.headers = Object.keys(res.data[0]);
            this.result = Object.values(res.data);
          },
          error: (e) => {
            console.error(e);
            this.error = e;
          }
        });
      }
    }

    setTimeout(() => this.error = null, 5000);
  }

}
