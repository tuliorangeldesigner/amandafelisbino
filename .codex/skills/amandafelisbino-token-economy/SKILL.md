---
name: amandafelisbino-token-economy
description: Economize tokens ao trabalhar no projeto Amanda Felisbino sem reduzir qualidade. Use em alteracoes, auditorias, deploys, documentacao, design system, conteudo, rotas Next.js, componentes React, dados de blog/projetos e qualquer tarefa neste repositorio que precise preservar contexto, build, GitHub e Vercel com leitura minima e verificacao suficiente.
---

# Amandafelisbino Token Economy

## Objetivo

Trabalhar no projeto com o menor contexto util possivel, mantendo qualidade visual, consistencia tecnica e verificacao real.

## Leitura Inicial Minima

Antes de abrir muitos arquivos, leia apenas o necessario:

1. `AI_HANDOFF.md` para contexto operacional.
2. `PROJECT_CONTEXT.md` se a tarefa envolver estrutura, rotas, GitHub ou Vercel.
3. `DESIGN_SYSTEM.md` se a tarefa envolver UI, layout, cores, tipografia ou motion.
4. `CONTENT_GUIDE.md` se a tarefa envolver copy, blog, projetos ou contato.
5. `DEPLOYMENT_WORKFLOW.md` se a tarefa envolver commit, push ou deploy.

Nao leia todos estes arquivos por padrao. Escolha de acordo com a tarefa.

## Workflow Enxuto

1. Identifique a area afetada com `rg` e listagens curtas.
2. Abra somente os arquivos diretamente envolvidos.
3. Reuse componentes e tokens existentes antes de criar novos.
4. Edite com escopo pequeno.
5. Rode a verificacao proporcional ao risco.
6. Resuma apenas arquivos alterados, verificacao e proximo ponto de atencao.

## Regras de Economia

- Preferir `rg` a abrir arquivos longos.
- Evitar reler arquivos que ja foram entendidos na mesma tarefa.
- Nao colar logs grandes na resposta final; resumir resultado.
- Nao explicar padroes obvios do React/Next/Tailwind.
- Nao criar documentacao extra sem pedido ou necessidade clara.
- Nao iniciar dev server se `npm run build` basta para validar.
- Nao usar navegador/screenshot salvo quando a tarefa e apenas textual ou estrutural.
- Nao fazer deploy manual se o fluxo correto for `git push` e deploy automatico pela Vercel.

## Qualidade Que Nao Pode Cair

Mesmo economizando tokens, sempre preserve:

- design system: lilas estrategico, serif editorial, cards moderados, CTAs claros;
- navegacao principal: Home, Projetos, Blog, Contato;
- footer global em `app/layout.jsx`;
- scroll ao topo em troca de rota via `components/layout/SmoothScroll.jsx`;
- WhatsApp `https://wa.me/554898426731`;
- imagens locais `.webp` quando possivel;
- build passando antes de commit/push.

## Mapas Rapidos

- Menu: `components/layout/Navbar.jsx`
- Smooth scroll: `components/layout/SmoothScroll.jsx`
- Layout global/footer: `app/layout.jsx`, `components/home/Footer.jsx`
- Home: `app/page.jsx`
- Projetos: `data/projects.js`, `components/home/WorkList.jsx`, `app/work/page.jsx`
- Blog: `data/blogs.js`, `components/home/Blog.jsx`, `app/blog/page.jsx`
- Contato: `components/contact/ContactPage.jsx`
- Tokens: `tailwind.config.js`
- Deploy/handoff: `DEPLOYMENT_WORKFLOW.md`, `AI_HANDOFF.md`

## Verificacao Proporcional

- Copy/dados apenas: `npm run build`.
- Componentes/rotas: `npm run build`.
- Mudanca de deploy/GitHub/Vercel: `npm run build`, `git status`, commit, push.
- Bug visual relatado por screenshot: verificar localmente, limpar `.next` se CSS aparecer 404.

## Entrega Padrao

Resposta final curta:

- o que mudou;
- arquivos principais;
- verificacao executada;
- commit/push/deploy quando aplicavel.
