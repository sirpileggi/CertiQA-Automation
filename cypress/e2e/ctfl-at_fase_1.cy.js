/// <reference types="cypress" />

describe('Certificação CTFL-AT fase 1', () => {
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
    cy.fixture('quiz_ctfl-at_fase_1').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT1()
      cy.responderQuestionario(quiz.respostas_100_incorretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '0% de acertos')
    })
  })

// Cenário 2: acertar 3 de 10 questões deve gerar 30% de acertos.
  it('respostas 30% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_1').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT1()
      cy.responderQuestionario(quiz.respostas_30_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '30% de acertos')
    })
  })
// Cenário 3: Acertar 4 de 10 questões deve gerar 40% de acertos.
  it('respostas 40% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_1').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT1()
      cy.responderQuestionario(quiz.respostas_40_porcento_corretas)
      
      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '40% de acertos')
    })
  })   
  // Cenário 4: Acertar 5 de 10 questões deve gerar 50% de acertos.
  it('respostas 50% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_1').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT1()
      cy.responderQuestionario(quiz.respostas_50_porcento_corretas)
      
      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '50% de acertos')
    })
  }) 
  // Cenário 5: Acertar todas as questões, deve gerar 100% de acertos.
  it('respostas 100% de acertos', () => {
    cy.fixture('quiz_ctfl-at_fase_1').then((quiz) => {
      cy.abrirFaseDoQuizCTFLAT1()
      cy.responderQuestionario(quiz.respostas_100_porcento_corretas)
      
      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('eq', '100% de acertos')
    })
  }) 
})
