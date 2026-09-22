describe("smoke", () => {
  beforeEach(() => {
    cy.visit("https://certiqa.qazando.com.br/");
    cy.get(".gap-4 > .border").click();
    cy.get('[name="email"]').type("teste@gmail.com");
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

  it("Acessar certificação", () => {
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

  it("Acessar Documentação", () => {
    cy.get('[href="/documentacao"]').click();
    cy.get('.text-4xl').should('be.visible').and('contain', 'Documentação de Negócio');
  });

  it("Acessar Meu Painel", () => {
    cy.get('.hidden > [href="/painel"]').click();
    cy.get('.mb-8 > .text-muted-foreground').should('be.visible').and('contain', 'Gerencie suas certificações e progresso');
    cy.get('[role="tab"]').contains('Minhas Certificações').click();
    cy.get('.rounded-lg > .flex > .text-sm').should('be.visible').and('contain', 'Certificações em andamento e completadas');
    cy.get('[role="tab"]').contains('Meu Perfil').click();
    cy.get('.rounded-lg > .flex > .text-sm').should('be.visible').and('contain', 'Gerencie suas informações pessoais');
  });

  it.only("Links Rápidos", () => {
    cy.get('.space-y-2 > :nth-child(2) > .text-gray-300').click();
    cy.get('.text-3xl').should('be.visible').and('contain', 'Certificações Disponíveis');
    cy.get(':nth-child(3) > .text-gray-300').click();
    cy.get('.mb-8 > .text-muted-foreground').should('be.visible').and('contain', 'Gerencie suas certificações e progresso');
    cy.get(':nth-child(4) > .text-gray-300').click();
    cy.get('.text-4xl').should('be.visible').and('contain', 'Sobre a CertiQA');
    cy.get('.space-y-2 > :nth-child(1) > .text-gray-300').click();
   cy.get('.lg\\:w-1\\/2 > .text-4xl').should('be.visible').and('contain', 'Prepare-se para as certificações ISTQB com o CertiQA da Qazando');// o nome do elemento de texto utilizado para verificação da página acabou por conter elementos de classe Tailwind que possuí caracteres reservados então foi necessário utilizar a contra barra dupla para permitir a identificação correta
  });


});
