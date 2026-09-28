/// <reference types="cypress" />

describe('Meu Painel', () => {
    beforeEach(() => {
        cy.realizarLogin('testeg4_01@gmail.com', 'testeg401')

    })

    it('acessar pagina de perfil', () => {
        cy.visit('/painel')
        cy.get('.text-3xl')
            .should('be.visible')
            .and('contain', 'Meu Painel')
    })

    it('acessar aba de certificações', () => {
        cy.contains('[role="tab"]', 'Minhas Certificações').click()
        cy.get('.rounded-lg > .flex > .text-2xl')
            .should('be.visible')
            .and('contain', 'Certificações')

    })

    it('acessar aba de perfil', () => {
        cy.contains('[role="tab"]', 'Meu Perfil').click()
        cy.get('.rounded-lg > .flex > .text-2xl')
            .should('be.visible')
            .and('contain', 'Informações do Perfil') 
    })

})