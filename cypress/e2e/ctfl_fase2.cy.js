/// <reference types="cypress" />

describe('Certificação CTFL fase 2', () => {
  beforeEach(() => {
    cy.fixture('endereco_login').then((usuario) => {
      const chaveSessao = `ctfl-${usuario.email}`

      cy.session(chaveSessao, () => {
        cy.realizarLogin(usuario.email, usuario.password)
      })
    })
  })

  it('respostas 100% incorretas', () => {
    cy.fixture('quiz_ctfl_fase_2').then((quiz) => {
      cy.abrirFaseDoQuiz()
      cy.responderQuestionario(quiz.respostas_100_incorretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('match', /^\d+% de acertos$/)

      cy.contains('button', 'Tentar Novamente').click()
    })
  })

  it('respostas 50% corretas', () => {
    cy.fixture('quiz_ctfl_fase_2').then((quiz) => {
      cy.abrirFaseDoQuiz()
      cy.responderQuestionario(quiz.respostas_50_porcento_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('match', /^\d+% de acertos$/)
    })
  })

  it('respostas 100% corretas', () => {
    cy.fixture('quiz_ctfl_fase_2').then((quiz) => {
      cy.abrirFaseDoQuiz()
      cy.responderQuestionario(quiz.respostas_100_corretas)

      cy.get('.text-center > p.text-gray-600')
        .should('be.visible')
        .invoke('text')
        .should('match', /^\d+% de acertos$/)

      cy.contains('p', 'Parabéns! Você passou!').should('be.visible')
    })
  })
})
