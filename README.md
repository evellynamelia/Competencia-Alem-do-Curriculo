# Competência Além do Currículo (MVP visual)

## Como rodar
```bash
npm install
npm run dev   # http://localhost:3000
```
Pronto para a Vercel: basta importar o repositório (sem variáveis de ambiente).

## Estrutura
- `tailwind.config.ts`  tokens do design system (cores e fontes)
- `app/`  rotas (App Router): `/` landing, `/entrar` placeholder
- `components/landing/`  seções da landing page
- `components/ui/`  peças reutilizáveis (`Reveal`, `ButtonLink`)
- `lib/data.ts`  textos e dados simulados centralizados

## Etapas
- [x] 1. Arquitetura e design system
- [x] 2. Landing page
- [ ] 3. Autenticação demonstrativa
- [ ] 4. Dashboard do candidato
- [ ] 5. Catálogo e preparação da avaliação
- [ ] 6. Prova, entrevista simulada e desafio prático
- [ ] 7. Resultado ("Registro de Competência Demonstrada") e perfil
- [ ] 8. Dashboard do RH
- [ ] 9. Revisão de responsividade e consistência

Todo conteúdo é fictício e identificado como protótipo.
