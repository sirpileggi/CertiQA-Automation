describe('Cadastro de usuário', () => {
	const nomePlaceholder = 'Digite seu nome completo'
	const emailPlaceholder = 'Digite seu e-mail'
	const senhaPlaceholder = 'Digite sua senha'
	const confirmarSenhaPlaceholder = 'Confirme sua senha'

	beforeEach(() => {
		cy.visit('/cadastro')
	})
/// cenario 1 apresentar nomes dos campos obrigatorios
	it('Exibe os campos do formulário de cadastro', () => {
		cy.contains('h1', 'Crie sua conta').should('be.visible')
		cy.get(`[placeholder="${nomePlaceholder}"]`).should('be.visible')
		cy.get(`[placeholder="${emailPlaceholder}"]`).should('be.visible')
		cy.get(`[placeholder="${senhaPlaceholder}"]`).should('be.visible')
		cy.get(`[placeholder="${confirmarSenhaPlaceholder}"]`).should('be.visible')
		cy.contains('Código do aluno (opcional)').should('be.visible')
	})
///cenario 2 cadastro com sucesso  
    it('Cadastrar um usuário com sucesso', () => {

		cy.get(`[placeholder="${nomePlaceholder}"]`).type('Usuário de Teste')
		cy.get(`[placeholder="${emailPlaceholder}"]`).type('teste123@example.com')
		cy.get(`[placeholder="${senhaPlaceholder}"]`).type('SenhaForte123')
		cy.get(`[placeholder="${confirmarSenhaPlaceholder}"]`).type('SenhaForte123')
        
		cy.contains('button', 'Cadastrar').click()

})
/// cenario 3 apresenta mensagens de erro ao tentar cadastrar sem preencher os campos obrigatorios
	it('Exibe mensagens ao tentar cadastrar sem preencher os campos obrigatórios', () => {
		cy.contains('button', 'Cadastrar').click()
        cy.contains('Nome é obrigatório').should('be.visible')
		cy.contains('E-mail é obrigatório').should('be.visible')
		cy.contains('Senha é obrigatória').should('be.visible')
	})
///cenario 4 impede o envio de um e-mail em formato inválido (sem .com)
	it('Impede o envio de um e-mail em formato inválido (sem .com)', () => {
		cy.get(`[placeholder="${nomePlaceholder}"]`).type('Usuário de Teste')
		cy.get(`[placeholder="${emailPlaceholder}"]`).type('email.invalido@gmail')
		cy.get(`[placeholder="${senhaPlaceholder}"]`).type('SenhaForte123')
		cy.get(`[placeholder="${confirmarSenhaPlaceholder}"]`).type('SenhaForte123')
		cy.contains('button', 'Cadastrar').click()
        cy.contains ('E-mail inválido').should('be.visible')
	})
///cenario 5 impede o envio de um e-mail em formato inválido (sem @)
it('Impede o envio de um e-mail em formato inválido (sem @)', () => {
		cy.get(`[placeholder="${nomePlaceholder}"]`).type('Usuário de Teste')
		cy.get(`[placeholder="${emailPlaceholder}"]`).type('email.invalidogmail.com')
		cy.get(`[placeholder="${senhaPlaceholder}"]`).type('SenhaForte123')
		cy.get(`[placeholder="${confirmarSenhaPlaceholder}"]`).type('SenhaForte123')
		cy.contains('button', 'Cadastrar').click()
        cy.contains ('E-mail inválido').should('be.visible')
	})
///cenario 6 senhas diferentes
	it('Exibe erro quando a confirmação da senha é diferente', () => {
		cy.get(`[placeholder="${nomePlaceholder}"]`).type('Usuário de Teste')
		cy.get(`[placeholder="${emailPlaceholder}"]`).type('teste@example.com')
		cy.get(`[placeholder="${senhaPlaceholder}"]`).type('SenhaForte123')
		cy.get(`[placeholder="${confirmarSenhaPl