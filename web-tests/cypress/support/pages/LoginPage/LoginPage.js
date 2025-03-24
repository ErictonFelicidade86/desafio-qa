/// <reference types="cypress"/>
import data from '../../../fixtures/dataUser.json'

class login {
    go() {
        cy.access()
    }
    // Login Sucess
    sucesso() {
        cy.login(data.userValid.email, data.userValid.password)
        cy.validateDashboard('div', 'Bem-vindo de volta, Ericton!', 'Aqui está uma visão geral do seu painel.')
    }
    // Logout
    logout() {
        cy.logout('span', 'div', 'E', 'Sair', 'Entrar')
    }
    // Invalid Password
    passwordInvalid() {
        cy.loginWithCredentials(data.userValid.email, data.passwordInvalid.password)
        cy.submitSignup('button[type="submit"]')
        cy.validateInvalidCredentialsMessage('div', 'Credenciais inválidas', 'Tente novamente')
    }
    // Invalid Email
    emailInvalid() {
        cy.loginWithCredentials(data.emailInvalid.email, data.userValid.password)
        cy.submitSignup('button[type="submit"]')
        cy.validateInvalidEmailMessage('p', 'Email inválido')
    }
    // Empty User
    emptyUser() {
        cy.submitSignup('button[type="submit"]')
        cy.validateEmptyFieldsMessage('p', 'Email é obrigatório', 'Senha é obrigatória')
    }

} export default new login()