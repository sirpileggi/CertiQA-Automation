const responderQuestionario = (respostas) => {
  respostas.forEach(({ pergunta, resposta }, index) => {
    cy.contains(pergunta, { timeout: 15000 }).should('be.visible')
    cy.contains('label', resposta).click({ force: true })

    const eUltimaPergunta = index === respostas.length - 1

    if (eUltimaPergunta) {
      cy.contains('button', /Finalizar\s*\(\d+\/\d+\)|Finalizar/i, { timeout: 15000 })
        .should('be.visible')
        .click()
    } else {
      cy.contains('button', /^Próxima$/i, { timeout: 15000 })
        .should('be.visible')
        .click()
    }
  })
}

const abrirFaseDoQuiz1 = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/fundamentals"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/fundamentals')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz/i).click()
}

const abrirFaseDoQuiz2 = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/lifecycle"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/lifecycle')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz/i).click()
}

const abrirFaseDoQuiz3 = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/static-testing"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/static-testing')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz/i).click()
}

const abrirFaseDoQuiz5 = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/test-implementation"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/test-implementation')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i).click()
}

const abrirFaseDoQuizCTFLAT1 = () => {
  cy.visit('/certificacoes')
  cy.contains('a[href="/certificacoes/ctfl-at"]', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl-at')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl-at/fase/ctfl-at-phase-1"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-1')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i).click()
}
const abrirFaseDoQuizCTFLAT3 = () => {
  cy.visit('/certificacoes')
  cy.contains('a[href="/certificacoes/ctfl-at"]', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl-at')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl-at/fase/ctfl-at-phase-3"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-3')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i).click()
}

Cypress.Commands.add('responderQuestionario', responderQuestionario)
Cypress.Commands.add('abrirFaseDoQuiz1', abrirFaseDoQuiz1)
Cypress.Commands.add('abrirFaseDoQuiz2', abrirFaseDoQuiz2)
Cypress.Commands.add('abrirFaseDoQuiz3', abrirFaseDoQuiz3)
Cypress.Commands.add('abrirFaseDoQuiz5', abrirFaseDoQuiz5)
Cypress.Commands.add('abrirFaseDoQuizCTFLAT1', abrirFaseDoQuizCTFLAT1)
Cypress.Commands.add('abrirFaseDoQuizCTFLAT3', abrirFaseDoQuizCTFLAT3)
