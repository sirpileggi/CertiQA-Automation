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

const abrirFaseDoQuiz = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/lifecycle"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/lifecycle')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz/i).click()
}

Cypress.Commands.add('responderQuestionario', responderQuestionario)
Cypress.Commands.add('abrirFaseDoQuiz', abrirFaseDoQuiz)
