# Playwright Parodify

Projeto de automacao E2E para o Parodify, usando Playwright, TypeScript, Page Objects, ESLint, Prettier e GitHub Actions.

## Objetivo

Construir uma base profissional e incremental para automatizar os principais fluxos do Parodify. O primeiro incremento valida o setup local; os proximos devem conectar os testes aos fluxos reais da aplicacao.

## Tecnologias

- Playwright
- TypeScript
- ESLint
- Prettier
- GitHub Actions

## Estrutura

```text
tests/
  data/          Massas de dados dos testes
  e2e/           Especificacoes E2E
  fixtures/      Arquivos usados nos testes
  pages/         Page Objects
  support/       Helpers, mocks e funcoes auxiliares
```

## Cenarios Cobertos

### Home

- Acesso a pagina inicial do Parodify
- Busca de musica pelo nome
- Busca de musica inexistente exibindo lista vazia
- Validacao visual da pagina inicial
- Validacao visual do menu lateral
- Validacao visual da barra superior
- Validacao visual do player

## Como Executar

Instale as dependencias:

```bash
npm ci
```

Instale os browsers do Playwright:

```bash
npx playwright install
```

Execute todos os testes:

```bash
npm test
```

Execute somente testes funcionais:

```bash
npm run test:functional
```

Execute somente testes visuais:

```bash
npm run test:visual
```

Execute em modo headed:

```bash
npm run test:headed
```

Execute com a interface do Playwright:

```bash
npm run test:ui
```

Abra o relatorio HTML:

```bash
npm run report
```

## Qualidade de Codigo

Verificar formatacao:

```bash
npm run format:check
```

Executar ESLint:

```bash
npm run lint
```

Validar TypeScript:

```bash
npm run typecheck
```

Executar todas as validacoes locais principais usadas no CI:

```bash
npm run ci
```

## Configuracao de Ambiente

O `playwright.config.ts` usa `https://parodify.vercel.app/` como URL padrao. Para sobrescrever a URL em outro ambiente, use `BASE_URL`:

```bash
BASE_URL=https://url-do-ambiente.example npm test
```

## CI/CD

O pipeline esta em:

```text
.github/workflows/playwright.yml
```

Ele roda automaticamente em `push` e `pull_request` para `main`, executando:

```bash
npm ci
npx playwright install --with-deps chromium
npm run format:check
npm run lint
npm run typecheck
npm run test:functional
```

Os testes visuais ficam disponíveis localmente via `npm run test:visual`. Eles nao rodam no CI inicial para evitar falhas por diferencas de renderizacao de screenshot entre ambientes.

O relatorio HTML do Playwright e salvo como artifact do workflow.

## Proximos Passos

- Confirmar a URL real do Parodify e configurar `BASE_URL`.
- Criar o primeiro fluxo real automatizado.
- Adicionar Page Objects especificos da aplicacao.
- Separar massas de dados conforme os cenarios crescerem.
- Evoluir validacoes positivas, negativas e de navegacao.

## Repositorio

```text
https://github.com/josafagonzaga/Playwright_Parodify
```
