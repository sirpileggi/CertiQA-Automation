/// <reference types="cypress" />

describe('Certificação CTFL fase 1', () => {
    beforeEach(() => {
        cy.fixture('endereco_login').then((usuario) => {
            const chaveSessao = `ctfl-${usuario.email}`

            cy.session(chaveSessao, () => {
                cy.realizarLogin(usuario.email, usuario.password)
            })
        })
    })
    // Cenário 1: responder todas as questões corretamente deve gerar 10/10.
    it('respostas 100% corretas', () => {
        cy.fixture('quiz_ctfl_fase_1').then((quiz) => {
            cy.abrirFaseDoQuiz1()
            cy.responderQuestionario(quiz.respostas_100_corretas)

            cy.get('.text-center > p.text-gray-600')
                .should('be.visible')
                .invoke('text')
                .should('match', /^\d+% de acertos$/)

            cy.contains('p', 'Parabéns! Você passou!').should('be.visible')
        })
    })

    // Cenário 2: responder todas as questões incorretamente deve gerar 0/10.
    it('respostas 100% incorretas', () => {
        cy.fixture('quiz_ctfl_fase_1').then((quiz) => {
            cy.abrirFaseDoQuiz1()
            cy.responderQuestionario(quiz.respostas_100_incorretas)

            cy.get('.text-center > p.text-gray-600')
                .should('be.visible')
                .invoke('text')
                .should('match', /^\d+% de acertos$/)

            cy.contains('button', 'Tentar Novamente').click()
        })
    })

    // Cenário 3: acertar 3 de 10 questões deve gerar 30% de acertos.
    it('respostas 30% de acertos', () => {
        cy.fixture('quiz_ctfl_fase_1').then((quiz) => {
            cy.abrirFaseDoQuiz1()
            cy.responderQuestionario(quiz.respostas_30_porcento_corretas)

            cy.get('.text-center > p.text-gray-600')
                .should('be.visible')
                .invoke('text')
                .should('match', /^\d+% de acertos$/)

            cy.contains('button', 'Tentar Novamente').click()
        })
    })

    // Cenário 4: acertar 4 de 10 questões deve gerar 40% de acertos.
    it('respostas 40% de acertos', () => {
        cy.fixture('quiz_ctfl_fase_1').then((quiz) => {
            cy.abrirFaseDoQuiz1()
            cy.responderQuestionario(quiz.respostas_40_porcento_corretas)

            cy.get('.text-center > p.text-gray-600')
                .should('be.visible')
                .invoke('text')
                .should('match', /^\d+% de acertos$/)

            cy.contains('button', 'Tentar Novamente').click()
        })
    })

    // Cenário 5: acertar 5 de 10 questões deve gerar 50% de acertos.
    it('respostas 50% de acertos', () => {
        cy.fixture('quiz_ctfl_fase_1').then((quiz) => {
            cy.abrirFaseDoQuiz1()
            cy.responderQuestionario(quiz.respostas_50_porcento_corretas)

            cy.get('.text-center > p.text-gray-600')
                .should('be.visible')
                .invoke('text')
                .should('match', /^\d+% de acertos$/)

        })
    })
});