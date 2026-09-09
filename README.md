# 🚀 Projeto de Automação de Testes - CertiQA Academy

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress**, com o objetivo de validar os principais fluxos da plataforma **CertiQA Academy**, da Qazando.

A plataforma é voltada para profissionais que desejam se preparar para certificações em Qualidade de Software, como a **ISTQB CTFL**, oferecendo conteúdos, simulados e acompanhamento da evolução dos alunos. :contentReference[oaicite:0]{index=0}

---

## 🌐 Aplicação

**URL:**
https://certiqa.qazando.com.br/

---

## 🎯 Objetivo

Garantir a qualidade da aplicação automatizando os principais fluxos do usuário, como:

- Login
- Navegação pela plataforma
- Fluxos exploratórios
- Smoke Test
- Validação de funcionalidades críticas

O projeto foi desenvolvido seguindo boas práticas de automação para facilitar manutenção, escalabilidade e reutilização dos testes.

---

## 🛠 Tecnologias

- Cypress
- JavaScript
- Node.js
- npm

---

## 📁 Estrutura do Projeto

Conforme a estrutura atual do projeto:

```text
cypress/
│
├── e2e/
│   ├── explorer.cy.js
│   ├── Login.cy.js
│   └── smoke.cy.js
│
├── support/
│
node_modules/
.gitignore
cypress.config.js
package.json
package-lock.json
```

### Descrição dos testes

| Arquivo | Descrição |
|----------|-----------|
| **Login.cy.js** | Testes relacionados à autenticação dos usuários. |
| **explorer.cy.js** | Fluxos de navegação e exploração da aplicação. |
| **smoke.cy.js** | Testes rápidos para validar as principais funcionalidades da plataforma. |

---

## ⚙️ Instalação

Clone o projeto

```bash
git clone <url-do-repositorio>
```

Entre na pasta

```bash
cd nome-do-projeto
```

Instale as dependências

```bash
npm install
```

---

## ▶️ Executando os testes

### Abrir o Cypress

```bash
npx cypress open
```

### Executar em modo Headless

```bash
npx cypress run
```

---

## 📌 Estrutura dos testes

Os cenários foram organizados por funcionalidade, facilitando:

- manutenção;
- reutilização;
- leitura dos testes;
- evolução do projeto.

---

## 📈 Boas práticas adotadas

- Organização dos cenários por funcionalidade;
- Código limpo e legível;
- Separação dos testes por contexto;
- Fácil escalabilidade para novos cenários;
- Projeto preparado para integração contínua (CI).

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática em automação de testes utilizando Cypress na plataforma **CertiQA Academy - Qazando**.
