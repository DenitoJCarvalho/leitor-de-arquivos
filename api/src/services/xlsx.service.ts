import { readFile, utils } from 'xlsx';
import { join } from 'path'

export class XlsxService {

  constructor() { }

  /**
   *
   * @param path - caminho do diretório onde o arquivo está localizado.
   * @param filename - nome do arquivo onde o arquivo está localizado.
   * @param page - número de página desejada.
   * @param pageSize - quantidade de itens por página
   * @returns - retorna todas as planilhas do arquivo em formato JSON.
   */
  async readFile(path: string, filename: string, page: number, pageSize: number) {

    try {
      const filePath = join(path, filename);
      const workbook = readFile(filePath);

      if (!workbook) {
        throw new Error(`Erro ao ler o arquivo. Por favor, verifique o caminho e o formato.`);
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
