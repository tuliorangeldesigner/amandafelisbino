# Fluxo de Alteracoes e Deploy

Este projeto esta conectado ao GitHub e a Vercel.

Repositorio GitHub:
https://github.com/tuliorangeldesigner/amandafelisbino

Producao Vercel:
https://amandafelisbino.vercel.app

## Fluxo correto daqui para frente

1. Fazer alteracoes no projeto local.
2. Rodar build/teste.
3. Fazer `git add`.
4. Fazer `git commit`.
5. Fazer `git push`.
6. A Vercel detecta o push no GitHub e faz deploy automatico.

## Comandos comuns

```bash
npm run build
git status
git add -A
git commit -m "Descricao curta da alteracao"
git push
```

## Observacao

Tambem e possivel fazer deploy manual pela Vercel CLI quando necessario:

```bash
vercel deploy . --prod -y
```
