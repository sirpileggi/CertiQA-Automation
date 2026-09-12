///<reference types="cypress"/>//Comandos básicos de teste de login utilizando Cypress

//Funcionalidade
describe("Login", () => {
  //Cenário 1 - Login com sucesso
  //Acessar a página de login
  //Preencher o campo de email e senha
  //Clicar no botão de login
  //Verificar se o login foi bem-sucedido (ex: verificar se a página de dashboard é exibida)

  it.only("Login com sucesso", () => {
    cy.visit("/"); //Acessar a página de login
    cy.get('.gap-4 > .border').click(); //Clicar no botão "Login"
    cy.get('#email').type("digilmar@gmail.com"); //Preenche email
    cy.get('#password').type("gilmar123456"); // Preenche senha
    cy.get('.inline-flex').click(); //Clicar no botão "Entrar"
    cy.get('.grid > .font-semibold')
      .should('be.visible').and('contain', 'Login bem-sucedido'); //Verifica se o login foi bem-sucedido
  });

  it("Mensagem de email obrigatório", () => {
    cy.visit("https://certiqa.qazando.com.br/");
    cy.get('.gap-4 > .border').click();
    cy.get('[name="password"]').type("12345678"); // Preenche senha
    cy.get('.inline-flex').click(); //Clicar no botão "Entrar"  });
    cy.get('.text-red-500').should('be.visible').and('contain', 'E-mail é obrigatório'); //Verifica se a mensagem de email obrigatório é exibida
  });

  it("Mensagem de senha obrigatória", () => {
    cy.visit("https://certiqa.qazando.com.br/");
    cy.get('.gap-4 > .border').click();
    cy.get('[name="email"]').type("teste@gmail.com");
    cy.get('.inline-flex').click();
    cy.get('.text-red-500').should('be.visible').and('contain', 'Senha é obrigatória');
  });



});

