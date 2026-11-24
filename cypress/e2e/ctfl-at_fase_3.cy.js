/// <reference types="cypress" />

describe('Certificação CTFL-AT fase 3', () => {
  beforeEach(() => {
    cy.fixture('endereco_login').then((usuario) => {
      const chaveSessao = `ctfl-at-${usuario.email}`

      cy.session(chaveSessao, () => {
        cy.realizarLogin(usuario.email, usuario.password)
      })  
    })
  })

  // Cenário 1: responder todas as questões incorretamente deve gerar 0/10.
  it('respostas 100% incorretas', () => {
    cy.fixture('quiz_ctfl-at_fase_3').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT3()
      cy.responderQuestionario(quiz.respostas_100_porcento_incorretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '0% de acertos')
    })
  })

  // Cenário 2: responder todas as questões deve gerar 60% de acertos.
  it('respostas 60% corretas', () => {
    cy.fixture('quiz_ctfl-at_fase_3').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT3()
      cy.responderQuestionario(quiz.respostas_60_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '60% de acertos')
    }) 
  })
  
  // Cenário 3: responder todas as questões corretamente deve gerar 100% de acertos.
  it('respostas 100% corretas', () => {
    cy.fixture('quiz_ctfl-at_fase_3').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT3()
      cy.responderQuestionario(quiz.respostas_100_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '100% de acertos')
    })
  })
})