# Associação Cristã Céus Abertos — site institucional

Projeto Next.js 16 (App Router) + Tailwind v4 + Framer Motion.

## Rodar localmente
```
npm install
npm run dev
```

## Estrutura
- `src/app` — uma pasta por página (rota)
- `src/components` — componentes reutilizáveis (Navbar, Footer, Section, StickyPhoto etc.)
- `src/content/institucional.ts` — todo o conteúdo institucional (missão, visão, valores, áreas de atuação etc.), usado em várias páginas

## Formulários (Voluntariado e Atendimento)
Usam o serviço gratuito FormSubmit (formsubmit.co) — sem backend, sem
conta, sem chave de API. Os envios vão para sabrinnegarciar@gmail.com.
Na primeira submissão, chega um e-mail de confirmação que precisa ser
clicado pra ativar o recebimento.

## Logo
Ainda não temos a logo oficial da Associação Céus Abertos. Por
enquanto o Navbar usa um selo simples (SVG inline, em
`src/components/Navbar.tsx`) — é só trocar por um `<Image>` apontando
pra logo oficial quando ela estiver pronta.
