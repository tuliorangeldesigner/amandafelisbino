# Contexto do Projeto

## Identidade

Site portfolio de Amanda Felisbino, profissional de social media, design e criacao de conteudo.

Objetivo do site:
- apresentar posicionamento, servicos, projetos e conteudos;
- gerar leads por contato, WhatsApp e formularios;
- manter uma presenca visual premium, editorial e feminina sem perder clareza comercial.

## URLs importantes

Producao Vercel:
https://amandafelisbino.vercel.app

Repositorio GitHub:
https://github.com/tuliorangeldesigner/amandafelisbino

Projeto Vercel:
amandafelisbino

## Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- GSAP + ScrollTrigger para animacoes
- @studio-freight/react-lenis para smooth scroll
- lucide-react para icones
- next/font/google para tipografia

## Estrutura principal

- `app/`: rotas do Next.js.
- `components/home/`: secoes reutilizadas na home e em paginas internas.
- `components/layout/`: navbar e smooth scroll.
- `components/contact/`: pagina completa de contato.
- `components/ui/`: componentes utilitarios.
- `data/`: conteudo estruturado de projetos e blog.
- `public/images/`: imagens locais.

## Rotas principais

- `/`: home completa com manifesto, servicos, projetos resumidos, processo, skills, depoimentos, planos, blog resumido, FAQ, CTA e footer.
- `/work`: pagina exclusiva de projetos, com mais projetos e CTA de diagnostico.
- `/work/[slug]`: detalhe de projeto.
- `/blog`: pagina exclusiva de blog, com captura de email, trilhas de leitura e mais artigos.
- `/blog/[slug]`: detalhe de artigo.
- `/contact`: pagina completa de contato, briefing e CTA de WhatsApp.
- Outras rotas ainda existem: `/manifesto`, `/services`, `/process`, `/skills`, `/testimonials`, `/pricing`, `/faq`.

## Navegacao

Menu principal atual:
- Home
- Projetos
- Blog
- Contato

As paginas que ja aparecem como secoes da home foram removidas do menu principal para simplificar a navegacao.

## Comportamentos importantes

- O footer "Vamos conversar." fica no layout global e aparece em todas as paginas.
- O scroll volta ao topo em toda troca de rota, controlado em `components/layout/SmoothScroll.jsx`.
- O WhatsApp da pagina de contato usa:
  `https://wa.me/554898426731`

## Observacoes tecnicas

- `node_modules`, `.next` e `.vercel` nao devem ir para o Git.
- Existe uma pasta `__MACOSX/` ignorada no `.gitignore`.
- O projeto usa branch principal `master`.
- A Vercel esta conectada ao repositorio GitHub para deploy automatico apos `git push`.
