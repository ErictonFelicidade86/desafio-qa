/// <reference types="cypress"/>
import data from '../../../fixtures/dataUser.json'

class login {
    go() {
        cy.acesso()
    }
    // Login Sucess
    sucesso() {
        cy.get('#email').should('be.visible').type(data.userValid.email)
        cy.get('#password').should('be.visible').type(data.userValid.password)
        cy.contains('button', 'Entrar').should('be.visible').click()
        cy.contains('div', 'Bem-vindo de volta, Ericton!').should('be.visible').and('have.text', 'Bem-vindo de volta, Ericton!')
        cy.contains('div', 'Aqui está uma visão geral do seu painel.').should('be.visible').and('have.text', 'Aqui está uma visão geral do seu painel.')
    }
    // Logout
    logout() {
        cy.contains('span', 'E').should('be.visible').and('have.text', 'E').click()
        cy.contains('span', 'Sair').should('be.visible').and('have.text', 'Sair').click()
        cy.contains('div', 'Entrar').should('be.visible').and('have.text', 'Entrar')
    }
    // Invalid Password
    passwordInvalid() {
        cy.get('#email').should('be.visible').type(data.userValid.email)
        cy.get('#password').should('be.visible').type(data.passwordInvalid.password)
        cy.contains('button', 'Entrar').should('be.visible').click()
        cy.contains('div', 'Credenciais inválidas').should('be.visible').and('have.text', 'Credenciais inválidas')
        cy.contains('div', 'Tente novamente').should('be.visible').and('have.text', 'Tente novamente')

    }
    // Invalid Email
    emailInvalid() {
        cy.get('#email').should('be.visible').type(data.emailInvalid.email)
        cy.get('#password').should('be.visible').type(data.userValid.password)
        cy.contains('button', 'Entrar').should('be.visible').click()
        cy.contains('p', 'Email inválido').should('be.visible').and('have.text', 'Email inválido')
    }
    // Empty User
    emptyUser() {
        cy.contains('button', 'Entrar').should('be.visible').click()
        cy.contains('p', 'Email é obrigatório').should('be.visible').and('have.text', 'Email é obrigatório')
        cy.contains('p', 'Senha é obrigatória').should('be.visible').and('have.text', 'Senha é obrigatória')

    }
} export default new login();