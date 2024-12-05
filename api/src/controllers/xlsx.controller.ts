import { XlsxService } from '../services/xlsx.service';

import { IXlsx } from '../interfaces/IXlsx';
import { Request, Response } from 'express';
import multer from 'multer';
import { parse } from 'path';

export class xlsxController implements IXlsx {

  constructor(
    private xlsxService: XlsxService
  ) { }


  async readFile(request: Request, response: Response): Promise<any> {
    try {

      const page = parseInt(request.query.page as string) || 1;
      const pageSize = parseInt(request.query.pageSize as string) || 10;

      if (!request.file) {
        return response.status(400).json({
          message: `Arquivo não é válido. Envie um arquivo .xlsx .`
        });
      }

      const data = await this.xlsxService.readFile(request.file.buffer, page, pageSize);

      return response.status(200).json({ data });

    } catch (e) {
      console.error(e);
      return response.status(500).json({
        message: e instanceof Error ? e.message : 'Erro desconhecido.'
      })
    }
  }
}
