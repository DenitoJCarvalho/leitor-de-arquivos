import { read, utils } from 'xlsx';
import { join } from 'path'

export class XlsxService {

  constructor() { }

  /**
   *
   * @param file - buffer do arquivo carregado para leitura.
   * @param page - número de página desejada.
   * @param pageSize - quantidade de itens por página
   * @returns - retorna todas as planilhas do arquivo em formato JSON.
   */
  async readFile(file: Buffer, page: number, pageSize: number) {

    try {
      const workbook = read(file, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = utils.sheet_to_json(sheet);

      const startIndex = (page - 1) * pageSize;
      const paginateData = jsonData.slice(startIndex, startIndex + pageSize);

      return paginateData;

    } catch (e) {
      console.error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
      throw new Error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
    }


  }
}
