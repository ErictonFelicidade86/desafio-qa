/// <reference types="cypress"/>
// ***********************************************

Cypress.Commands.add('access', ()=> {
    cy.visit('http://localhost:3010')
})
// Login
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').should('exist').should('be.visible').type(email)
    cy.get('#password').should('exist').should('be.visible').type(password)
    cy.contains('button', 'Entrar').should('exist').should('be.visible').click()
})
// Validate Dashboard
Cypress.Commands.add('validateDashboard', (text) => {
    cy.contains('div', text)
      .should('exist')
      .and('have.text', text)
})
// Logout
Cypress.Commands.add('logout', (text) => {
    cy.contains('span', 'E').should('exist').should('be.visible').click()
    cy.contains('span', 'Sair').should('exist').should('be.visible').click()
    cy.contains('div', text).should('exist')

})
//Login With Credentials
Cypress.Commands.add('loginWithCredentials', (email, password) => {
    cy.get('#email').should('exist').should('be.visible').type(email)
    cy.get('#password').should('exist').should('be.visible').type(password)
    cy.contains('button', 'Entrar').should('exist').should('be.visible').click()
    cy.wait(1500)
})
// Validate Invalid Credentials Message
Cypress.Commands.add('validateInvalidCredentialsMessage', () => {
    cy.contains('div', 'Credenciais inválidas')
      .should('exist')
      .and('have.text', 'Credenciais inválidas')
    cy.contains('div', 'Tente novamente')
      .should('exist')
      .and('have.text', 'Tente novamente')
})
// Validate Invalid Email Message
Cypress.Commands.add('validateInvalidEmailMessage', () => {
    cy.contains('p', 'Email inválido')
      .should('exist')
      .and('have.text', 'Email inválido')
})
// Validate Empty Fields Message  
Cypress.Commands.add('validateEmptyFieldsMessage', () => {
    cy.contains('p', 'Email é obrigatório')
      .should('exist')
      .and('have.text', 'Email é obrigatório')
    cy.contains('p', 'Senha é obrigatória')
      .should('exist')
      .and('have.text', 'Senha é obrigatória')
})

// REGISTER USER

// Fill Signup Form
Cypress.Commands.add('fillSignupForm', ({ name, email, password, confirmPassword }) => {
  if (name) cy.get('#name').should('exist').should('be.visible').type(name)
  if (email) cy.get('#email').should('exist').should('be.visible').type(email)
  if (password) cy.get('#password').should('exist').should('be.visible').type(password)
  if (confirmPassword) cy.get('#confirmPassword').should('exist').should('be.visible').type(confirmPassword)
})
// Button Submit Signup
Cypress.Commands.add('submitSignup', () => {
  cy.contains('button', 'Cadastrar').should('exist').should('be.visible').click()
})
// Validate Signup Error
Cypress.Commands.add('validateSignupError', (selector, expectedText) => {
  cy.get(selector).should('exist').should('be.visible').and('have.text', expectedText)
})
// Validate Text Error
Cypress.Commands.add('validateTextError', (tag, expectedText) => {
  cy.contains(tag, expectedText).should('exist').should('be.visible').and('have.text', expectedText)
})
// validate Register Message
Cypress.Commands.add('validateRegisterMessage', () => {
  cy.contains('div', 'Faça login para continuar')
    .should('exist')
    .and('have.text', 'Faça login para continuar')
})