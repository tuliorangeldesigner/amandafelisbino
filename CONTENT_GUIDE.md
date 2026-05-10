# Guia de Conteudo

## Tom de voz

Claro, profissional, direto e consultivo.

O texto deve vender sem parecer agressivo. A Amanda deve soar como alguem que organiza a presenca digital de marcas com criterio, estrategia e acabamento visual.

Evitar:
- promessas exageradas;
- linguagem generica de marketing;
- frases muito longas;
- termos tecnicos sem necessidade;
- excesso de explicacao sobre como usar o site.

Preferir:
- clareza;
- beneficios concretos;
- relacao entre conteudo, presenca digital e demanda;
- chamadas para diagnostico, briefing, perfil e WhatsApp.

## Dados editaveis

Projetos:
`data/projects.js`

Blog:
`data/blogs.js`

Ao adicionar novos projetos ou artigos:
- manter slugs em minusculo e sem acentos;
- escrever titulos com acento normalmente;
- usar imagens locais quando possivel;
- preencher descricoes com foco em problema, solucao e resultado;
- manter categorias curtas.

## Projetos

Campos principais:
- `id`
- `slug`
- `title`
- `category`
- `client`
- `year`
- `role`
- `services`
- `description`
- `challenge`
- `solution`
- `outcome`
- `image`
- `details`
- `screens`

Na home, `WorkList` mostra apenas uma quantidade limitada quando recebe `limit`.

Na pagina `/work`, a lista completa aparece e existe CTA para diagnostico.

## Blog

Campos principais:
- `id`
- `slug`
- `title`
- `excerpt`
- `date`
- `readTime`
- `image`
- `category`
- `author`
- `content`

Tipos de bloco em `content`:
- `paragraph`
- `heading`
- `quote`
- `image`

Na home, o blog mostra menos posts.
Na pagina `/blog`, aparecem mais artigos, bloco de captura e trilhas de leitura.

## Contato e conversao

Pagina:
`components/contact/ContactPage.jsx`

Objetivo:
- facilitar contato qualificado;
- oferecer caminho rapido por WhatsApp;
- manter briefing para leads que preferem explicar melhor.

WhatsApp atual:
`+55 48 9842-6731`

Link usado:
`https://wa.me/554898426731`

## Menu

Menu principal atual:
- Home
- Projetos
- Blog
- Contato

Nao recolocar no menu principal paginas que ja existem como secoes da home, a menos que o usuario peca explicitamente.

## Footer

O footer global "Vamos conversar." esta em:
`components/home/Footer.jsx`

Ele e renderizado em todas as paginas via:
`app/layout.jsx`
