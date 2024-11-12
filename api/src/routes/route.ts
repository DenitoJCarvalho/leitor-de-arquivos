import { Router } from 'express';

import { mdbController } from '../controllers/mdb.controller';
import { xlsxController } from '../controllers/xlsx.controller';
import { csvController } from '../controllers/csv.controller';

import { MdbService } from '../services/mdb.service';
import { XlsxService } from '../services/xlsx.service';
import { CsvService } from '../services/csv.service';
import multer from 'multer';

const router = Router();
const upload = multer();

const mdbService = new MdbService();
const xlsxService = new XlsxService();
const csvService = new CsvService();

const mdb = new mdbController(mdbService);
const xlsx = new xlsxController(xlsxService);
const csv = new csvController(csvService);

router.post('/read-file/mdb', mdb.readFile.bind(mdb));
router.post('/read-file/xlsx', upload.single('file'), (req, res) => xlsx.readFile(req, res));
router.post('/read-file/csv', csv.readFile.bind(csv));

export { router };
