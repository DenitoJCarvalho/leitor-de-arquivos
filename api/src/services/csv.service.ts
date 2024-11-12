import csvParser from 'csv-parser';
import { Readable } from 'stream';

export class CsvService {

  constructor() { }

  /**
   * Lê o contêudo de um arquivo CSV a partir de um Buffer.
   * @param buffer - buffer do arquivo csv
   * @param page - número de pagina desejada.
   * @param pageSize - número de itens pro página.
   * @returns - dados paginados do arquivos csv em formato JSON
   */
  async readFile(buffer: Buffer, page: number, pageSize: number): Promise<any> {
    try {
      const result: any[] = [];
      const readableStream = new Readable();
      readableStream.push(buffer);
      readableStream.push(null);

      return new Promise((resolve, reject) => {
        let currentLine = 0;
        let readLines = 0;

        readableStream
          .pipe(csvParser())
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
            reject(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`)
          });
      })
    } catch (e) {
      console.error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
      throw new Error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
    }

  }
}
