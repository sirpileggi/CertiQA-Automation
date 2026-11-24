/// <reference types="cypress" />

describe('Certificação CTFL-AT fase 2', () => {
  beforeEach(() => {
    cy.fixture('endereco_login').then((usuario) => {
      const chaveSessao = `ctfl-at-${usuario.email}`

      cy.session(chaveSessao, () => {
        cy.realizarLogin(usuario.email, usuario.password)
      })
    })
  })

  it('respostas 100% incorretas', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_100_porcento_incorretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '0% de acertos')
    })
  })

  it('respostas 30% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_30_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '30% de acertos')
    })
  })

  it('respostas 40% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_40_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '40% de acertos')
    })
  })

  it('respostas 50% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_50_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '50% de acertos')
    })
  })

  it('respostas 60% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_60_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '60% de acertos')
    })
  })

  it('respostas 100% corretas', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_100_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '100% de acertos')
    })
  })
})