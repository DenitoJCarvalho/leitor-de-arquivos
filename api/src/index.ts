import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import helmet from 'helmet'

import { normalizePort } from './server/server';
import { router } from './routes/route';

config({
  path: '.env'
});

const app = express();
const port = normalizePort(process.env.SERVER_PORT || '9753') as number;

app.use(
  cors({
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: ['Content-Type', 'Autorizathion'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  })
);

app.use(helmet());
app.use(express.json());

app.use('/', router);


app.listen(port, async () => {
  try {
    console.log(`Servidor rodando em http://localhost:${port}`);

  } catch (e) {
    console.error({
      message: `Erro ao conectar-se ao banco de dados`,
      error: e instanceof Error ? e.message : `Erro desconhecido`
    });
  }
});
