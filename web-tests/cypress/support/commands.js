/// <reference types="cypress"/>
// ***********************************************

Cypress.Commands.add('access', ()=> {
    cy.visit('/')
})
// Login
Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').should('be.visible').type(email)
    cy.get('#password').should('be.visible').type(password)
    cy.contains('button', 'Entrar').should('be.visible').click()
})
// Validate Dashboard
Cypress.Commands.add('validateDashboard', (selector, expectedText, expectedText2) => {
    cy.contains(selector, expectedText)
      .should('be.visible')
      .and('have.text', expectedText)
    cy.contains(selector, expectedText2)
      .should('be.visible')
      .and('have.text', expectedText2)
})
// Logout
Cypress.Commands.add('logout', (selector, tag, expectedText, expectedText2, text) => {
    cy.contains(selector, expectedText).should('be.visible').click()
    cy.contains(selector, expectedText2).should('be.visible').click()
    cy.contains(tag, text).should('be.visible')
})
//Login With Credentials
Cypress.Commands.add('loginWithCredentials', (email, password) => {
    cy.get('#email').should('be.visible').type(email)
    cy.get('#password').should('be.visible').type(password)
})
// Validate Invalid Credentials Message
Cypress.Commands.add('validateInvalidCredentialsMessage', (selector, expectedText, expectedText2) => {
    cy.contains(selector, expectedText)
      .should('be.visible')
      .and('have.text', expectedText)
    cy.contains(selector, expectedText2)
      .should('be.visible')
      .and('have.text', expectedText2)
})
// Validate Invalid Email Message
Cypress.Commands.add('validateInvalidEmailMessage', (selector, expectedText) => {
    cy.contains(selector, expectedText)
      .should('be.visible')
      .and('have.text', expectedText)
})
// Validate Empty Fields Message  
Cypress.Commands.add('validateEmptyFieldsMessage', (selector, expectedText, expectedText2) => {
    cy.contains(selector, expectedText)
      .should('be.visible')
      .and('have.text', expectedText)
    cy.contains(selector, expectedText2)
      .should('be.visible')
      .and('have.text', expectedText2)
})

// REGISTER USER

// Link Create Account
Cypress.Commands.add('createAccount', (selector, expectedText) => {
  cy.contains(selector, expectedText).should('exist').should('be.visible').click()
})

// Fill Signup Form
Cypress.Commands.add('fillSignupForm', ({ name, email, password, confirmPassword }) => {
  if (name) cy.get('#name').should('exist').should('be.visible').type(name)
  if (email) cy.get('#email').should('exist').should('be.visible').type(email)
  if (password) cy.get('#password').should('exist').should('be.visible').type(password)
  if (confirmPassword) cy.get('#confirmPassword').should('exist').should('be.visible').type(confirmPassword)
})
// Button Submit Signup
Cypress.Commands.add('submitSignup', (submit) => {
  cy.get(submit).should('exist').should('be.visible').click()
})
// Validate Signup Error
Cypress.Commands.add('validateSignupError', (selector, expectedText) => {
  cy.get(selector).should('exist').should('be.visible').and('have.text', expectedText)
})
// Validate Text Error
Cypress.Commands.add('validateTextError', (tag, expectedText) => {
  cy.contains(tag, expectedText).should('exist').should('be.visible').and('have.text', expectedText)
})

// Validate Message Login Contiue 
Cypress.Commands.add('validateMessageLoginContinue', (selector, expectedText) => {
  cy.contains(selector, expectedText).should('exist').should('be.visible').and('have.text', expectedText)
})
