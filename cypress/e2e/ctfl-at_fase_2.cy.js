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

    it('Todas as questões corretas', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_100_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '100% de acertos')
    })
  })

  it('Todas as questões incorretas', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_100_porcento_incorretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '0% de acertos')
    })
  })

  it('Metade das questões corretas', () => {
    cy.fixture('quiz_ctfl-at_fase_2').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT2()
      cy.responderQuestionario(quiz.respostas_50_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '50% de acertos')
    })
  })


})