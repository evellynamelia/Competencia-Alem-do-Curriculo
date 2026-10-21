# Competência Além do Currículo — continuação do MVP

Este pacote preserva a landing page fornecida e adiciona telas navegáveis de demonstração.

## Executar no Windows / VS Code

1. Descompacte em uma pasta de projetos local.
2. Abra a pasta `turmasenac` no VS Code.
3. No terminal:

```powershell
node -v
npm.cmd install
npm.cmd run dev
```

4. Abra http://localhost:3000

## Páginas

- `/` — landing page original
- `/entrar` — escolha do perfil, sem autenticação real
- `/candidato` — dashboard do candidato
- `/avaliacoes` — catálogo filtrável
- `/prova` — prova objetiva de Excel (5 questões, cronômetro e detecção de aba oculta)
- `/entrevista` — entrevista guiada ilustrativa (sem câmera/microfone reais)
- `/desafio` — desafio de design com envio simulado
- `/resultados` — relatório ilustrativo (usa sessionStorage quando a prova é concluída)
- `/perfil` — perfil profissional demonstrativo
- `/rh` — consulta demonstrativa para RH

## Limites

Sem backend, autenticação, videochamadas, uploads reais, correção profissional ou monitoramento por câmera. As ocorrências de abas são detectadas somente durante a prova. Nenhuma tecnologia web comum consegue assegurar que o candidato não utilize outro dispositivo.

## Nota de manutenção

A versão do Next.js é a do projeto enviado (14.2.15), com alerta de segurança conhecido. Antes da publicação, atualize o Next.js de forma planejada para uma versão corrigida compatível e teste todas as rotas. Não execute `npm audit fix --force` sem revisar suas mudanças.
