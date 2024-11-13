import { Router } from 'express';

import { xlsxController } from '../controllers/xlsx.controller';
import { csvController } from '../controllers/csv.controller';

import { XlsxService } from '../services/xlsx.service';
import { CsvService } from '../services/csv.service';
import multer from 'multer';

const router = Router();
const upload = multer();

const xlsxService = new XlsxService();
const csvService = new CsvService();

const xlsx = new xlsxController(xlsxService);
const csv = new csvController(csvService);

router.post('/read-file/xlsx', upload.single('file'), (req, res) => xlsx.readFile(req, res));
router.post('/read-file/csv', upload.single('file'), (req, res) => csv.readFile(req, res));

export { router };
