describe("Explorer", () => {
  beforeEach(() => {
    cy.visit("https://certiqa.qazando.com.br/");
    cy.get(".gap-4 > .border").click();
    cy.get('[name="email"]').type("teste1@gmail.com");
    cy.get('[name="password"]').type("12345678");
    cy.get(".inline-flex").click();
    cy.get(".grid > .font-semibold")
      .should("be.visible")
      .and("contain", "Login bem-sucedido");
  });

  it("Acessar Certificações", () => {
    cy.get('.hidden > [href="/certificacoes"]').click();
    cy.get('.text-3xl')
      .should('be.visible')
      .and('contain', 'Certificações Disponíveis');
  });

    it("Acessar Documentação", () => {
    cy.get('[href="/documentacao"]').click();
    cy.get('.text-4xl')
      .should('be.visible')
      .and('contain', 'Documentação de Negócio');
  });

  it.only("Acessar certificação", () => {
    cy.get('.hidden > [href="/certificacoes"]').click();
    cy.get('.text-3xl')
      .should('be.visible')
      .and('contain', 'Certificações Disponíveis');
    cy.get('.grid > :nth-child(1) > .flex.items-center > .inline-flex').click();
    cy.get(':nth-child(2) > .text-2xl')
      .should('be.visible')
      .and('contain', 'Fases de Estudo');
    cy.get(':nth-child(1) > .flex.pt-0 > .inline-flex').click();
    cy.get('.text-3xl')
        .should('be.visible')
        .and('contain', 'Fundamentos de Teste')
  });

});
