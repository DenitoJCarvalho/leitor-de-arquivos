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
      const workbook = read(file);

      if (!workbook) {
        throw new Error(`Erro ao ler o arquivo. Por favor, verifique formato do arquivo.`);
      }

      const data: { [sheetName: string]: any } = {};

      workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        const dataTable = utils.sheet_to_json(worksheet);

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginated = dataTable.slice(start, end);

        data[sheetName] = paginated;
      });

      return data;

    } catch (e) {
      console.error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
      throw new Error(`Erro ao ler arquivo. ${e instanceof Error ? e.message : 'Erro desconhecido.'}`);
    }


  }
}
