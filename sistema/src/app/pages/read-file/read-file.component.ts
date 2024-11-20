import { Component, inject } from '@angular/core';

import { ButtonComponent } from '../../components/button/button.component';
import { ErrorComponent } from '../../components/error/error.component';
import { InputFileComponent } from '../../components/input-file/input-file.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

import { FileReaderService } from '../../services/file-reader.service';

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

  protected file?: File;
  protected result: any;
  protected success!: any;
  protected error!: any;
  protected label: string = `Selecione um arquivo do tipo .xlsx ou .csv`;
  protected headers: string[] = [];


  protected onFileSelected(file: File): void {
    this.file = file;
  }

  private allowedFileTypes(type: string) {
    const validFilePattern = /\.(xlsx|csv)$/i;
    return validFilePattern.test(type);
  }

  private validateFile(): boolean {

    if (!this.allowedFileTypes(this.file?.name as string)) {
      console.error(`Erro: Arquivo inválido! Por favor informe um arquivo válido.`);
      this.error = `Erro: Arquivo inválido! Por favor informe um arquivo válido.`;
      return false;
    }

    if (!this.file) {
      console.error(`Erro:  Arquivo vázio.`);
      this.error = `Erro: Arquivo vazio.`;
      return false;
    }

    this.error = null;
    return true;

  }

  protected processFile(): void {
    if (this.validateFile()) {
      const fileObservable = this.file?.name.endsWith('.xlsx')
        ? this.fileReadService.readFileXlsx(this.file as File)
        : this.fileReadService.readFileCsv(this.file as File)

      fileObservable.subscribe({
        next: (res) => {
          console.log(Object.keys(res.data[0]));
          console.log(res);
          this.headers = Object.keys(res.data[0]);

        },
        error: (e) => {
          console.error(e);
          this.error = e;
        }
      });
    }

    setTimeout(() => this.error = null, 5000);
  }

}
