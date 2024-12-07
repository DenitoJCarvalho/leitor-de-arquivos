# Sistema

Este documento descreve uso do **frontend** da aplicação, que permite o upload e processamento de arquivos contendo dados organizados em tabelas.


## Como usar a ferramenta:
1. Faça upload do arquivo<br>
   Click no botão **upload** para escolher um arquivo que seja do tipo .**xlsx** ou **.csv**
2. Extraia os dados <br>
   Após selecionar o arquivo, clique no botão **Extrair** para visualizar os dados carregados.

![image-1](/sistema/public/images/image_1.png)

> Nota: O sistema aceita apenas arquivos que sigam o padrão abaixo.

## Formato do arquivo esperado
Os arquivos devem conter as seguintes colunas, nesta ordem:
 - **id**: identificação única do produto
 - **Produto**: nome ou descrição do produto
 - **Valor**: Preço de compra do produto
 - **Quantidade**: quantidade adquirida
 - **Data da compra**: data em que o produto foi comprado
 - **Valor para venda**: preço sugerido para venda

Arquivos que não seguirem este formato resultarão em um erro durante  processamento.

## Exibição dos dados

Após o processamento bem-sucedido, os dados serão exibidos em uma tabela:

- Se houver muitos registros, será habilitada a paginação com scroll, permitindo fácil navegação pelos dados.

![image-2](/sistema/public/images/image_2.png)

## Considerações finais

- Certifique-se de que os arquivos estejam no formato correto para evitar erros.
- Para arquivos muito grandes, pode haver eum tempo de processamento adicional.






