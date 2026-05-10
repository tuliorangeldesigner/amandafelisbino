# Handoff para IA / Agentes

Leia este arquivo antes de alterar o projeto.

## Resumo rapido

Este e um site Next.js para Amanda Felisbino, social media e designer.

Objetivo principal:
- portfolio + autoridade + geracao de leads.

URLs:
- Producao: https://amandafelisbino.vercel.app
- GitHub: https://github.com/tuliorangeldesigner/amandafelisbino

## Arquivos de contexto

Antes de mexer, leia:

1. `PROJECT_CONTEXT.md`
2. `DESIGN_SYSTEM.md`
3. `CONTENT_GUIDE.md`
4. `DEPLOYMENT_WORKFLOW.md`

## Skill de economia de tokens

Existe uma skill especifica para este projeto:

`amandafelisbino-token-economy`

Locais:
- instalada em `C:/Users/tulio/.codex/skills/amandafelisbino-token-economy`
- versionada em `.codex/skills/amandafelisbino-token-economy`

Use esta skill em tarefas futuras para reduzir leitura, logs e repeticao sem reduzir qualidade, build, GitHub ou deploy.

## Regras de trabalho

- Manter o design system existente.
- Usar lilas estrategicamente, principalmente em CTAs, badges, cards e destaques.
- Preservar a navegacao principal: Home, Projetos, Blog, Contato.
- Nao duplicar o footer; ele ja esta global em `app/layout.jsx`.
- Toda pagina deve abrir no topo ao trocar de rota; isso esta em `components/layout/SmoothScroll.jsx`.
- Preferir imagens locais `.webp`.
- Antes de finalizar mudancas, rodar `npm run build`.

## Fluxo de entrega

Para qualquer alteracao:

```bash
npm run build
git status
git add -A
git commit -m "Mensagem curta"
git push
```

A Vercel esta conectada ao GitHub e deve fazer deploy automatico apos o push.

Se for necessario deploy manual:

```bash
vercel deploy . --prod -y
```

## Pontos sensiveis

### CSS/Next cache local

Se o site local aparecer como HTML puro sem estilo, geralmente o CSS do Next esta 404 por cache `.next` quebrado.

Solucao:

```powershell
Get-CimInstance Win32_Process -Filter "name = 'node.exe'" | Where-Object { $_.CommandLine -like '*ui8_6977eb9a908f1d0039d312bc*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
Remove-Item -LiteralPath .next -Recurse -Force
npm run dev
```

Depois abrir:
`http://127.0.0.1:3000`

### WhatsApp

Numero:
`+55 48 9842-6731`

Link:
`https://wa.me/554898426731`

### Vercel e GitHub

Repositorio local ja tem remote:
`origin https://github.com/tuliorangeldesigner/amandafelisbino.git`

Branch principal:
`master`

Projeto Vercel:
`amandafelisbino`

## Onde alterar coisas comuns

- Menu: `components/layout/Navbar.jsx`
- Footer global: `components/home/Footer.jsx`
- Home: `app/page.jsx`
- Projetos: `data/projects.js`, `components/home/WorkList.jsx`, `app/work/page.jsx`
- Blog: `data/blogs.js`, `components/home/Blog.jsx`, `app/blog/page.jsx`
- Contato: `components/contact/ContactPage.jsx`
- Design tokens: `tailwind.config.js`
- CSS global: `app/globals.css`
