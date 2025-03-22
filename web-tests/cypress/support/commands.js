/// <reference types="cypress"/>
// ***********************************************


Cypress.Commands.add('acesso', ()=> {
    cy.viewport(1600, 800)
    cy.visit('http://localhost:3010/login')
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
  