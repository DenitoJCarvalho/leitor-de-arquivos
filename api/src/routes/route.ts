import { Router } from 'express';

import { mdbController } from '../controllers/mdb.controller';
import { xlsxController } from '../controllers/xlsx.controller';
import { csvController } from '../controllers/csv.controller';

import { MdbService } from '../services/mdb.service';
import { XlsxService } from '../services/xlsx.service';
import { CsvService } from '../services/csv.service';

const router = Router();

const mdbService = new MdbService();
const xlsxService = new XlsxService();
const csvService = new CsvService();

const mdb = new mdbController(mdbService);
const xlsx = new xlsxController(xlsxService);
const csv = new csvController(csvService);

router.post('/read-file/mdb', mdb.readFile.bind(mdb));
router.post('/read-file/xlsx', xlsx.readFile.bind(xlsx));
router.post('/read-file/csv', csv.readFile.bind(csv));

export { router };
