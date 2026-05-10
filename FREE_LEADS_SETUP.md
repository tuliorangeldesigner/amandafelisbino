# Setup Gratuito de Leads

O site ja tem formularios reais usando rotas internas da Vercel:

- Contato: `/api/contact`
- Newsletter: `/api/newsletter`

Essas rotas fazem duas coisas:

1. Enviam o lead por e-mail via FormSubmit gratuito.
2. Salvam em Google Sheets quando a variavel `GOOGLE_SHEETS_WEBHOOK_URL` estiver configurada.

## E-mail gratuito

Destino atual:
`contato@amandafelisbino.com`

Servico:
FormSubmit

Importante:
Na primeira submissao, o FormSubmit pode enviar um e-mail de confirmacao para `contato@amandafelisbino.com`. E preciso confirmar uma vez para liberar os proximos envios.

## Google Sheets gratuito

Para salvar leads em uma planilha:

1. Crie uma planilha no Google Sheets.
2. Crie uma aba chamada `Leads`.
3. Na primeira linha, use estes cabecalhos:

```text
createdAt | type | name | email | profile | services | budget | message
```

4. Va em `Extensoes > Apps Script`.
5. Cole este script:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.createdAt || new Date().toISOString(),
    data.type || '',
    data.name || '',
    data.email || '',
    data.profile || '',
    data.services || '',
    data.budget || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

6. Clique em `Implantar > Nova implantacao`.
7. Tipo: `App da Web`.
8. Executar como: `Eu`.
9. Quem pode acessar: `Qualquer pessoa`.
10. Copie a URL gerada.

## Configurar na Vercel

Adicione a variavel de ambiente no projeto Vercel:

```text
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/...
```

Depois faca um novo deploy.

## Fluxo final

Quando tudo estiver ativo:

- lead do contato chega por e-mail;
- lead do contato entra na planilha;
- inscricao da newsletter chega por e-mail;
- inscricao da newsletter entra na planilha.
