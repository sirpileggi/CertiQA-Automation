const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'https://certiqa.qazando.com.br/',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: false
  },
  // Linha 12 define a largura da tela e linha 13 define a altura da tela, para que o Cypress execute os testes com essas dimensões de tela (1280 × 1020 pixels).
  viewportWidth: 1280,
  viewportHeight: 1020,
});