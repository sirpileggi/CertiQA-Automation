/// <reference types="cypress" />

describe('Meu Painel', () => {

    const nomeAtual = 'Teste G4 01'
    const emailAtual = 'testeg4_01@gmail.com'
    const senhaAtual = 'testeg401'

    beforeEach(() => {

        cy.realizarLogin(emailAtual, senhaAtual)
        cy.visit('/painel')

    })

    it('acessar pagina de perfil', () => {
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

    it('Informações do perfil', () => {
        cy.contains('[role="tab"]', 'Meu Perfil').click()
        cy.get('.space-y-4 > :nth-child(1) > .text-muted-foreground')
            .should('be.visible')
            .and('contain', nomeAtual)
        cy.get('.space-y-4 > :nth-child(2) > .text-muted-foreground')
            .should('be.visible')
            .and('contain', emailAtual)
    })

})