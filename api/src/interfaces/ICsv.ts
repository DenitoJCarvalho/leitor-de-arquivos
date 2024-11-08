import { Request, Response } from 'express';

export interface ICsv {
  readFile(request: Request, response: Response): Promise<any>
}
