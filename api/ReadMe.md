# Leitor de arquivos

Esta aplicação oferece uma API para ler e processar arquivos de 2 tipos de diferentes:  **.xlsx** e **.csv**. Cada tipo de arquivo pode ser lido através de endpoints específicos.

### Tipos de Arquivo Suportados

- .xlsx(Excel): Arquivos de planilhas no formato excel.
-  .csv(Comma-Separated Values): Arquivos de dados no formato CSV, com valores separados por virgula.

### Endpoints <br>


---

**Leitura de arquivo .xlsx**

- <p><b>Endpoint</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">/read-file/xlsx</span></p> 
- <p><b>Método</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">POST</span></p>
- <p><b>Descrição</b>: Permite enviar um arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.xlsx</span> para ser lido e processado.</p>
-  <p><b>Resposta</b>: Retorna os dados extraídos do arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.xlsx</span> no formato <b>JSON</b> ou uma mensagem de erro, caso a leitura falhe.</p>
-  <p><b>Parâmetros</b>: <br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">file</span>(buffer): arquivo a ser carregado para leitura.
  </p>  


---

**Leitura de arquvo .csv**

- <p><b>Endpoint</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">/read-file/csv</span></p> 
- <p><b>Método</b>: <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">POST</span></p>
- <p><b>Descrição</b>: Permite enviar um arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.csv</span> para ser lido e processado.</p>
-  <p><b>Resposta</b>: Retorna os dados extraídos do arquivo <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">.csv</span> no formato <b>JSON</b> ou uma mensagem de erro, caso a leitura falhe.</p>
-  <p><b>Parâmetros</b>: <br>
    -  <span style="background-color: rgba(255,255,255,.2); padding: 1px 4px; border-radius: 4px">file</span>(buffer): buffer de arquivo csv.
  </p>  

---

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

1. Utilize uma ferramenta para testar os endpoints como [Insomnia](https://insomnia.rest/download) ou algum outro de sua preferência.
2. Informe o caminho do arquivo
3. Informe o nome do arquivo.extensão
4. A resposta será um json array com os dados extraídos do arquivo ou uma mensagem  de erro caso haja algum problema durante a leitura.

---


### Notas

* A aplicação utiliza as bibliotecas específicas para o processamento de cada tipo de arquivo.
* XLSX para .xlsx
* CSV-PARSER para .csv
