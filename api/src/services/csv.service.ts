import csvParser from 'csv-parser';
import { join } from 'path';
import { createReadStream, read } from 'fs';

export class CsvService {

  constructor() { }

  async readFile(path: string, filename: string, page: number, pageSize: number): Promise<any> {
    try {
      const result: any[] = [];
      const pathFile = join(path, filename);
      const readFile = createReadStream(pathFile);

      return new Promise((resolve, reject) => {
        let currentLine = 0;
        let readLines = 0;

        readFile.pipe(csvParser())
          .on('data', (data) => {
            if (currentLine >= (page - 1) * pageSize && readLines < pageSize) {
              result.push(data);
              readLines++;
            }
            currentLine++;
          })
          .on('end', () => {
            resolve(result);
          })
          .on('error', (e) => {
            reject(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
          })
      });

    } catch (e) {
      console.error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
      throw new Error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
    }

  }
}
