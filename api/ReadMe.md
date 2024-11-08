# Leitor de arquivos

Esta aplicação oferece uma API para ler e processar arquivos de 3 tipos de diferentes: **.mdb**, **.xlsx** e **.csv**. Cada tipo de arquivo pode ser lido através de endpoints específicos.

### Tipos de Arquivo Suportados

- .mdb (Microsoft Access Database): Arquivos de banco de dados Microsoft Access.
- .xlsx(Excel): Arquivos de planilhas no formato excel.
-  .csv(Comma-Separated Values): Arquivos de dados no formato CSV, com valores separos por virgula.

### Endpoints <br>

**Leitura de arquivo .mdb**

- <p><b>Endpoint</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">/read-file/mdb</span></p> 
- <p><b>Método</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">POST</span></p>
- <p><b>Descrição</b>: Permite enviar um arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.mdb</span> para ser lido e processado.</p>
-  <p><b>Resposta</b>: Retorna os dados extraídos do arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.mdb</span> no formato <b>JSON</b> ou uma mensagem de erro, caso a leitura falhe.</p>
-  <p><b>Parâmetros</b>: <br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">path </span>(string): caminho do diretório onde o arquivo está localizado.<br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">filename</span>(string): nome do arquivo
  </p>  
  
  ```json
  {
    "path": "C:/Users/Downloads/",
    "filename": "teste.mdb"
  }
  ```

---

**Leitura de arquivo .xlsx**

- <p><b>Endpoint</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">/read-file/xlsx</span></p> 
- <p><b>Método</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">POST</span></p>
- <p><b>Descrição</b>: Permite enviar um arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.xlsx</span> para ser lido e processado.</p>
-  <p><b>Resposta</b>: Retorna os dados extraídos do arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.xlsx</span> no formato <b>JSON</b> ou uma mensagem de erro, caso a leitura falhe.</p>
-  <p><b>Parâmetros</b>: <br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">path</span>(string): caminho do diretório onde o arquivo está localizado.<br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">filename</span>(string): nome do arquivo.
  </p>  

  ```json
  {
    "path": "C:/Users/Downloads/",
    "filename": "teste.mdb"
  }
  ```


---

**Leitura de arquvo .csv**

- <p><b>Endpoint</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">/read-file/csv</span></p> 
- <p><b>Método</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">POST</span></p>
- <p><b>Descrição</b>: Permite enviar um arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.csv</span> para ser lido e processado.</p>
-  <p><b>Resposta</b>: Retorna os dados extraídos do arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.csv</span> no formato <b>JSON</b> ou uma mensagem de erro, caso a leitura falhe.</p>
-  <p><b>Parâmetros</b>: <br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">path</span>(string): caminho do diretório onde o arquivo está localizado.<br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">filename</span>(string): nome do arquivo.
  </p>  
  
  ```json
  {
    "path": "C:/Users/Downloads/",
    "filename": "teste.mdb"
  }
  ```

### Respostas e códigos de status
- **200 OK**: a requisição foi bem sucedida e o arquivo foi processado com sucesso.
```json
[
  {
    "valor": "teste",
    "valor": "teste",
    "valor": 1
  }
]
```
---
- **400 Bad Request**: 
  - Parâmetros inválidos. Por favor, forneça o caminho do diretório e o nome do arquivo.
  - Parâmetros path e filename devem ser strings. 
---
- **500 Internal Server Error**: 
  -  Erro interno ao processar o arquivo.
  -  Erro desconhecido.
  
---

### Como utilizar

1. Informe o caminho do arquivo
2. Informe o nome do arquivo.extensão
3. A resposta será um json array com os dados extraídos do arquivo ou uma mensagem  de erro caso haja algum problema durante a leitura.

---


### Notas

* A aplicação utiliza as bibliotecas específicas para o processamento de cada tipo de arquivo.
* ADODB para .mdb
* XLSX para .xlsx
* CSV-PARSER para .csv
