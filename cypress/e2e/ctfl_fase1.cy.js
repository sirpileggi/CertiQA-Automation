describe('Certificação CTFL. Quiz 01 - Validação das respostas', () => {
    beforeEach(() => {
        fazerLogin();
        abrirQuiz();
    });

    function fazerLogin() {
        const email = Cypress.env('email');
        const senha = Cypress.env('password');

        if (!email || !senha) {
            throw new Error('Defina CYPRESS_email e CYPRESS_password antes de executar os testes.');
        }

        cy.visit('https://certiqa.qazando.com.br/login');
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type(senha, { log: false });
        cy.contains('button', 'Entrar').click();
        cy.url().should('include', '/painel');
    }

    function abrirQuiz() {
        cy.contains('a', 'Certificações').click();
        cy.contains('a', 'Iniciar Estudo').first().click();
        cy.contains('a', 'Continuar Estudando').click();
        cy.contains('button', 'Refazer Quiz').click();
        cy.contains('Questão 1 de 10').should('be.visible');
    }

    function responderQuiz(respostas) {
        respostas.forEach((resposta, indice) => {
            cy.contains('label', resposta).click();
            cy.contains('button', indice === respostas.length - 1 ? 'Finalizar' : 'Próxima').click();
        });
    }

    function validarResultado(pontuacao, percentual) {
        cy.contains(pontuacao).should('be.visible');
        cy.contains(percentual).should('be.visible');
    }

    // Cenário 1: responder todas as questões corretamente deve gerar 10/10.
    it('respostas 100% corretas', () => {
        cy.fixture('quiz_crfl_fase_1').then((quiz) => {
            const respostasCorretas = quiz.respostas_100_corretas.map(({ resposta }) => resposta);
            responderQuiz(respostasCorretas);
            validarResultado('10/10', '100% de acertos');
        });

        cy.get('body').should('contain', 'Correta').and('not.contain', 'Incorreta');
    });

    // Cenário 2: responder todas as questões incorretamente deve gerar 0/10.
    it('respostas 100% incorretas', () => {
        cy.fixture('quiz_crfl_fase_1').then((quiz) => {
            const respostasIncorretas = quiz.respostas_100_incorretas.map(({ resposta }) => resposta);
            const respostasCorretas = quiz.respostas_100_corretas.map(({ resposta }) => resposta);
            responderQuiz(respostasIncorretas);
            validarResultado('0/10', '0% de acertos');
            cy.get('body').invoke('text').then((resultado) => {
                expect(resultado.match(/Incorreta/g)).to.have.length(10);

                respostasCorretas.forEach((respostaCorreta) => {
                    expect(resultado).to.include(respostaCorreta);
                });
            });
        });
    });

    // Cenário 3: acertar 3 de 10 questões deve gerar 30% de acertos.
    it('respostas 30% de acertos', () => {
        cy.fixture('quiz_crfl_fase_1').then((quiz) => {
            responderQuiz(quiz.respostas_30_porcento_corretas.map(({ resposta }) => resposta));
            validarResultado('3/10', '30% de acertos');
        });
    });

    // Cenário 4: acertar 4 de 10 questões deve gerar 40% de acertos.
    it('respostas 40% de acertos', () => {
        cy.fixture('quiz_crfl_fase_1').then((quiz) => {
            responderQuiz(quiz.respostas_40_porcento_corretas.map(({ resposta }) => resposta));
            validarResultado('4/10', '40% de acertos');
        });
    });

    // Cenário 5: acertar 5 de 10 questões deve gerar 50% de acertos.
    it('respostas 50% de acertos', () => {
        cy.fixture('quiz_crfl_fase_1').then((quiz) => {
            responderQuiz(quiz.respostas_50_porcento_corretas.map(({ resposta }) => resposta));
            validarResultado('5/10', '50% de acertos');
        });
    });
});