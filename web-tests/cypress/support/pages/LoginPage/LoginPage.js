/// <reference types="cypress"/>
import data from '../../../fixtures/dataUser.json'

class login {
    go() {
        cy.acesso()
    }
    // Login Sucess
    sucesso() {
        cy.login(data.userValid.email, data.userValid.password)
        cy.validateDashboard()
    }
    // Logout
    logout() {
        cy.logout()
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