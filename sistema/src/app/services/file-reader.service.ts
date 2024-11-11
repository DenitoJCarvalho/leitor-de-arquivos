import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  private http: HttpClient = inject(HttpClient);

  private pathXlsx = `localhost:9753/read-file/xlsx`;
  private pathCsv = `localhost:9753/read-file/csv`;


  async readFileXlsx(path: string, fileName: string, page: number, pageSize: number): Promise<any> {
    return this.http.post<any>(this.pathXlsx, { path, fileName, page, pageSize });
  }

  async readFileCsv(path: string, fileName: string, page: number, pageSize: number): Promise<any> {
    return this.http.post<any>(this.pathCsv, { path, fileName, page, pageSize });
  }

}
