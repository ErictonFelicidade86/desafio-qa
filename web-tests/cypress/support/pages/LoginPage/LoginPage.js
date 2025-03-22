/// <reference types="cypress"/>
import data from '../../../fixtures/dataUser.json'

class login {
    go() {
        // cy.visit('/')
        // cy.acesso()
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
        cy.loginWithCredentials(data.userValid.email, data.passwordInvalid.password)
        cy.validateInvalidCredentialsMessage()
    }
    // Invalid Email
    emailInvalid() {
        cy.loginWithCredentials(data.emailInvalid.email, data.userValid.password)
        cy.validateInvalidEmailMessage()
    }
    // Empty User
    emptyUser() {
        cy.contains('button', 'Entrar').should('be.visible').click()
        cy.validateEmptyFieldsMessage()
    }
} export default new login();