# Design System

## Direcao visual

Estetica premium, editorial e clara, voltada para uma marca pessoal de social media e design.

Principios:
- branco, preto e cinzas como base;
- lilas como cor estrategica de enfase e conversao;
- tipografia serifada para personalidade/editorial;
- sans-serif para leitura e interface;
- cards com raio moderado, bordas sutis e sombras leves;
- CTAs claros, com bom contraste e hierarquia.

## Tokens principais

Definidos em `tailwind.config.js`.

### Cores

- `lilac.DEFAULT`: `#C3A6CA`
- `lilac.soft`: `#F5EEF7`
- `lilac.deep`: `#8A5C94`
- Preto: usado para contraste, secoes fortes e CTAs secundarios.
- Branco: base dominante.
- Cinzas: textos auxiliares, bordas e fundos neutros.

Uso recomendado do lilas:
- links de acao;
- detalhes de navegacao ativa;
- badges/categorias;
- CTAs de conversao;
- cards de destaque;
- bordas de blocos estrategicos;
- palavras em destaque dentro de headlines.

Evitar:
- deixar paginas novas muito cinza/preto sem lilas;
- usar lilas em tudo, para nao perder a funcao estrategica;
- criar uma paleta paralela.

### Tipografia

Fontes em `app/layout.jsx`:

- `Inter`: sans, textos e interface.
- `Cormorant Garamond`: serif, headlines e tom editorial.
- `Great Vibes`: script, uso pontual se necessario.

Classes:
- `font-sans`: Inter.
- `font-serif`: Cormorant Garamond.
- `font-serif-display`: Cormorant Garamond via CSS global.
- `font-script`: Great Vibes via CSS global.

Regras:
- headlines grandes usam serif com `font-light`;
- palavras de enfase podem usar `italic text-lilac-deep`;
- textos corridos devem ser cinza escuro e com boa line-height;
- nao usar fonte pequena em blocos de conversao importantes.

### Layout

Componente de container:
`components/ui/Container.jsx`

Padrao:
- max width: `1400px`
- padding horizontal: `px-6 md:px-12`

Seções:
- grandes respiros verticais: `py-24`, `md:py-32`, `md:py-40`;
- grid principal frequentemente usa `lg:grid-cols-12`;
- cards usam `rounded-2xl` ou `rounded-3xl` quando forem blocos maiores de destaque.

### Componentes-chave

- Navbar: `components/layout/Navbar.jsx`
- Smooth scroll: `components/layout/SmoothScroll.jsx`
- Footer global: `components/home/Footer.jsx`
- CTA da home: `components/home/CTA.jsx`
- Blog grid: `components/home/Blog.jsx`
- Projetos: `components/home/WorkList.jsx`
- Contato completo: `components/contact/ContactPage.jsx`

## Motion

GSAP e ScrollTrigger sao usados em varias secoes.

Regras:
- motion deve apoiar leitura e entrada de conteudo;
- evitar excesso de animacao em CTAs;
- ao alterar altura/layout de paginas com ScrollTrigger, manter `ScrollTrigger.refresh()` quando necessario.

O smooth scroll com Lenis esta centralizado em:
`components/layout/SmoothScroll.jsx`

## Imagens

Preferir imagens locais `.webp` em `public/images/` quando possivel.

Evitar:
- usar `.png` pesado sem necessidade;
- depender de muitas imagens remotas no grid principal;
- usar imagens externas para conteudo acima da dobra se existir alternativa local.

Atualmente o blog usa imagens locais `.webp` para melhorar carregamento.

## Acessibilidade e UX

- CTAs devem ter texto claro.
- Icones devem vir de `lucide-react`.
- Links de menu devem abrir paginas no topo.
- O WhatsApp deve ser facil de encontrar na pagina de contato.
- Nao criar cards dentro de cards sem necessidade.
