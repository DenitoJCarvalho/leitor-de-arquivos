import { Request, Response } from 'express';

export interface IMdbFile {
  readFile(request: Request, response: Response): Promise<any>;
}
