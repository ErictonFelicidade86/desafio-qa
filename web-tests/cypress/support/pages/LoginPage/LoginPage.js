/// <reference types="cypress"/>
import data from '../../../fixtures/dataUser.json'

class login {
    // Login Sucess
    sucesso() {
        cy.login(data.userValid.email, data.userValid.password)
        cy.validateDashboard('Bem-vindo de volta, Ericton!')
    }
    // Logout
    logout() {
        cy.logout('Entrar')
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