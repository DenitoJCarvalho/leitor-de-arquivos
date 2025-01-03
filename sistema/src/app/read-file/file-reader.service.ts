import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  private http: HttpClient = inject(HttpClient);

  private pathXlsx = `http://localhost:9753/read-file/xlsx`;
  private pathCsv = `http://localhost:9753/read-file/csv`;

  private createFormData(file: File): FormData {
    const formData = new FormData();

    formData.append('file', file);

    return formData;
  }

  readFileXlsx(file: File): Observable<any> {
    return this.http.post<any>(this.pathXlsx, this.createFormData(file));
  }

  readFileCsv(file: File): Observable<any> {
    return this.http.post<any>(this.pathCsv, this.createFormData(file));
  }

}
