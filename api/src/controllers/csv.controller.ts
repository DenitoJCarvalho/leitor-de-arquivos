import { CsvService } from '../services/csv.service';

import { ICsv } from '../interfaces/ICsv';
import { Request, Response } from 'express';

export class csvController implements ICsv {

  constructor(
    private csvService: CsvService
  ) { }

  async readFile(request: Request, response: Response): Promise<any> {
    try {
      const { path, fileName } = request.body;
      const page = parseInt(request.query.page as string) || 1;
      const pageSize = parseInt(request.query.pageSize as string) || 10;

      if (!path || !fileName) {
        return response.status(400).json({
          message: `Parâmetros inválidos. Por favor, forneça o caminho do deiretório e o nome doa arquivo.`
        });
      }

      const data = await this.csvService.readFile(path, fileName, page, pageSize);

      return response.status(200).json(data);

    } catch (e) {
      console.error(e);
      return response.status(500).json({
        message: e instanceof Error ? e.message : 'Erro desconhecido.'
      })
    }
  }
}