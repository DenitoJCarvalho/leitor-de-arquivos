import { Request, Response } from 'express';

import { IMdbFile } from '../interfaces/IMdbFile';

import { MdbService } from '../services/mdb.service';

export class mdbController implements IMdbFile {

  constructor(
    private mdbService: MdbService
  ) { }

  async readFile(request: Request, response: Response): Promise<any> {
    try {
      const { filePath, tableName } = request.body;

      if (!filePath || !tableName) {
        return response.status(400).json({
          message: `Parâmetros ausentes. Certifique-se de enviar "o caminho do arquivo" e o "nome da tabela".`
        });
      }

      if (typeof filePath !== 'string' || typeof tableName !== 'string') {
        return response.status(400).json({
          message: `Parâmetros filePath e tableName devem ser strings.`
        })
      }

      const data = await this.mdbService.readDataTable(filePath, tableName);

      return response.status(200).json(data);

    } catch (e) {
      console.error(e instanceof Error ? e.message : 'Erro desconhecido.');
      return response.status(500).json({
        message: e instanceof Error ? e.message : `Erro desconhecido`
      });
    }
  }
}
