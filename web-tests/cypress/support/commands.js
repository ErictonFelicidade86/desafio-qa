/// <reference types="cypress"/>
// ***********************************************

Cypress.Commands.add('acesso', ()=> {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3010')
})
// Login
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').should('be.visible').type(email)
    cy.get('#password').should('be.visible').type(password)
    cy.contains('button', 'Entrar').should('be.visible').click()
})
// Validate Dashboard
Cypress.Commands.add('validateDashboard', () => {
    cy.contains('div', 'Bem-vindo de volta, Ericton!')
      .should('be.visible')
      .and('have.text', 'Bem-vindo de volta, Ericton!')
    cy.contains('div', 'Aqui está uma visão geral do seu painel.')
      .should('be.visible')
      .and('have.text', 'Aqui está uma visão geral do seu painel.')
})
// Logout
Cypress.Commands.add('logout', () => {
    cy.contains('span', 'E').should('be.visible').click()
    cy.contains('span', 'Sair').should('be.visible').click()
    cy.contains('div', 'Entrar').should('be.visible')
})
//Login With Credentials
Cypress.Commands.add('loginWithCredentials', (email, password) => {
    cy.get('#email').should('be.visible').type(email)
    cy.get('#password').should('be.visible').type(password)
    cy.contains('button', 'Entrar').should('be.visible').click()
})
// Validate Invalid Credentials Message
Cypress.Commands.add('validateInvalidCredentialsMessage', () => {
    cy.contains('div', 'Credenciais inválidas')
      .should('be.visible')
      .and('have.text', 'Credenciais inválidas')
    cy.contains('div', 'Tente novamente')
      .should('be.visible')
      .and('have.text', 'Tente novamente')
})
// Validate Invalid Email Message
Cypress.Commands.add('validateInvalidEmailMessage', () => {
    cy.contains('p', 'Email inválido')
      .should('be.visible')
      .and('have.text', 'Email inválido')
})
// Validate Empty Fields Message  
Cypress.Commands.add('validateEmptyFieldsMessage', () => {
    cy.contains('p', 'Email é obrigatório')
      .should('be.visible')
      .and('have.text', 'Email é obrigatório')
    cy.contains('p', 'Senha é obrigatória')
      .should('be.visible')
      .and('have.text', 'Senha é obrigatória')
})

// REGISTER USER

// Fill Signup Form
Cypress.Commands.add('fillSignupForm', ({ name, email, password, confirmPassword }) => {
  if (name) cy.get('#name').should('be.visible').type(name)
  if (email) cy.get('#email').should('be.visible').type(email)
  if (password) cy.get('#password').should('be.visible').type(password)
  if (confirmPassword) cy.get('#confirmPassword').should('be.visible').type(confirmPassword)
})
// Button Submit Signup
Cypress.Commands.add('submitSignup', () => {
  cy.contains('button', 'Cadastrar').should('be.visible').click()
})
// Validate Signup Error
Cypress.Commands.add('validateSignupError', (selector, expectedText) => {
  cy.get(selector).should('be.visible').and('have.text', expectedText)
})
// Validate Text Error
Cypress.Commands.add('validateTextError', (tag, expectedText) => {
  cy.contains(tag, expectedText).should('be.visible').and('have.text', expectedText)
})
