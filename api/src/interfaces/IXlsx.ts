import { Request, Response } from 'express'

export interface IXlsx {
  readFile(request: Request, response: Response): Promise<any>;
}
