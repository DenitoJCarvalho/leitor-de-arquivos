import ADODB from 'node-adodb';

export class MdbService {

  constructor(
  ) {
  }

  /**
   *
   * @param filePath - caminho onde está o arquivo
   * @param tableName  - nome da tabela
   * @returns
   */
  async readDataTable(filePath: string, tableName: string): Promise<any> {
    try {

      const connectionString = `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${filePath}`;
      const connection = ADODB.open(connectionString);

      const query = `SELECT * FROM ${tableName}`;

      return await connection.query(query)
        .then(data => data)
        .catch(e => {
          console.error(e instanceof Error ? e.message : 'Erro desconhecido.')
          e instanceof Error ? e.message : 'Erro desconhecido'
        })

    } catch (e) {
      console.error(`Erro ao consultar tabela: ${e}`);
      throw new Error(`
        Erro ao consultar tabela no arquivo.mdb
      ${e instanceof Error ? e.message : 'Erro desconhecido.'}
      `);
    }
  }

}
