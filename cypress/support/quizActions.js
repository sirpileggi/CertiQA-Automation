const clicarBotaoQuiz = (texto) => {
  cy.contains('button', texto, { timeout: 15000 })
    .should('be.visible')
    .and('be.enabled')
  cy.contains('button', texto, { timeout: 15000 }).click()
}

const responderQuestionario = (respostas) => {
  respostas.forEach(({ pergunta, resposta }, index) => {
    cy.contains(pergunta, { timeout: 15000 }).should('be.visible')
    cy.contains('label', resposta).click({ force: true })

    const eUltimaPergunta = index === respostas.length - 1

    if (eUltimaPergunta) {
      clicarBotaoQuiz(/Finalizar\s*\(\d+\/\d+\)|Finalizar/i)
    } else {
      clicarBotaoQuiz(/^Próxima$/i)
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

const abrirFaseDoQuiz4 = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/test-analysis"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/test-analysis')
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

const abrirFaseDoQuiz6 = () => {
  cy.visit('/certificacoes')
  cy.contains('a', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl/fase/test-management"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl/fase/test-management')
  cy.contains('button', /Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i).click()
}

const abrirFaseDoQuizCTFLAT1 = () => {
  cy.visit('/certificacoes')
  cy.contains('a[href="/certificacoes/ctfl-at"]', /^Iniciar Estudo$/i).click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl-at')
  cy.contains('Seu Progresso').should('be.visible')
  cy.get('a[href="/certificacoes/ctfl-at/fase/ctfl-at-phase-1"]').first().click()
  cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-1')
  clicarBotaoQuiz(/Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i)
}

const abrirFaseDoQuizCTFLAT2 = () => {
  cy.fixture('quiz_ctfl-at_fase_1').then((quiz) => {
    cy.abrirFaseDoQuizCTFLAT1()
    cy.responderQuestionario(quiz.respostas_100_porcento_corretas)

    cy.get('.text-center > p.text-gray-600')
      .should('be.visible')
      .invoke('text')
      .should('eq', '100% de acertos')

    clicarBotaoQuiz('Voltar para a Fase')
    cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-1')
  }).then(() => {
    cy.visit('/certificacoes')
    cy.contains('a[href="/certificacoes/ctfl-at"]', /^Iniciar Estudo$/i).click()
    cy.location('pathname').should('eq', '/certificacoes/ctfl-at')
    cy.contains('Seu Progresso').should('be.visible')
    cy.get('a[href="/certificacoes/ctfl-at/fase/ctfl-at-phase-2"]', { timeout: 15000 }).first().click()
    cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-2')
    clicarBotaoQuiz(/Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i)
  })
}

const abrirFaseDoQuizCTFLAT3 = () => {
  cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
    cy.visit('/certificacoes')
    cy.contains('a[href="/certificacoes/ctfl-at"]', /^Iniciar Estudo$/i).click()
    cy.location('pathname').should('eq', '/certificacoes/ctfl-at')
    cy.contains('Seu Progresso').should('be.visible')

    cy.get('a[href="/certificacoes/ctfl-at/fase/ctfl-at-phase-2"]', { timeout: 15000 }).first().click()
    cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-2')
    clicarBotaoQuiz(/Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i)
    cy.responderQuestionario(quiz.respostas_100_porcento_corretas)

    cy.get('.text-center > p.text-gray-600')
      .should('be.visible')
      .invoke('text')
      .should('eq', '100% de acertos')

    clicarBotaoQuiz(/Voltar para a Fase|Voltar para Fase/i)
  }).then(() => {
    cy.visit('/certificacoes/ctfl-at/fase/ctfl-at-phase-3')
    cy.location('pathname').should('eq', '/certificacoes/ctfl-at/fase/ctfl-at-phase-3')
    clicarBotaoQuiz(/Iniciar Quiz|Refazer Quiz|Continuar estudo|Revisar fase/i)
  })
}

Cypress.Commands.add('responderQuestionario', responderQuestionario)
Cypress.Commands.add('abrirFaseDoQuiz1', abrirFaseDoQuiz1)
Cypress.Commands.add('abrirFaseDoQuiz2', abrirFaseDoQuiz2)
Cypress.Commands.add('abrirFaseDoQuiz3', abrirFaseDoQuiz3)
Cypress.Commands.add('abrirFaseDoQuiz4', abrirFaseDoQuiz4)
Cypress.Commands.add('abrirFaseDoQuiz5', abrirFaseDoQuiz5)
Cypress.Commands.add('abrirFaseDoQuiz6', abrirFaseDoQuiz6)
Cypress.Commands.add('abrirFaseDoQuizCTFLAT1', abrirFaseDoQuizCTFLAT1)
Cypress.Commands.add('abrirFaseDoQuizCTFLAT2', abrirFaseDoQuizCTFLAT2)
Cypress.Commands.add('abrirFaseDoQuizCTFLAT3', abrirFaseDoQuizCTFLAT3)
