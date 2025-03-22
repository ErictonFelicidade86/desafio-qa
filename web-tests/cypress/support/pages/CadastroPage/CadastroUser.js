/// <reference types="cypress"/>
import data from '../../../fixtures/dataUser.json'

class User {
    // Page Register
    acessoCadastro() {
        cy.contains('a', 'Cadastre-se').should('be.visible').click()
        cy.contains('div', 'Cadastre-se').should('be.visible').and('have.text', 'Cadastre-se')
    }

    // Creating User Forms
    formUser() {
        const urlBase = Cypress.config("baseUrlName")
        cy.request(urlBase).then(res => {
            const email = res.body.data[0].email
            const name = res.body.data[0].firstname

            // cy.get('#name').should('be.visible').type(name)
            // cy.get('#email').should('be.visible').type(email)
            cy.get('#name').should('be.visible').type(data.userValid.name)
            cy.get('#email').should('be.visible').type(data.userValid.email)
            cy.get('#password').should('be.visible').type(data.userValid.password)
            cy.get('#confirmPassword').should('be.visible').type(data.userValid.confirmPassword)
            cy.contains('button', 'Cadastrar').should('be.visible').click()
            cy.contains('div', 'Faça login para continuar').should('be.visible').and('have.text', 'Faça login para continuar')
        })
    }

    // Existing User
    existingUser() {
        cy.fillSignupForm(data.userValid)
        cy.submitSignup()
        cy.validateTextError('div', 'Usuário já cadastrado')
    }

    // Required Fields
    requiredFields() {
        cy.submitSignup()
        cy.validateTextError('p', 'Nome é obrigatório')
        cy.validateTextError('p', 'Email é obrigatório')
        cy.validateTextError('p', 'A senha deve ter no mínimo 8 caracteres')
        cy.validateSignupError('#«Rhhtml7»-form-item-message', 'A senha deve ter no mínimo 8 caracteres')
    }

    // Empty Name
    emptyName() {
        const { email, password, confirmPassword } = data.userValid
        cy.fillSignupForm({ email, password, confirmPassword })
        cy.submitSignup()
        cy.validateTextError('p', 'Nome é obrigatório')
    }

    // Empty Email
    emptyEmail() {
        const { name, password, confirmPassword } = data.userValid
        cy.fillSignupForm({ name, password, confirmPassword })
        cy.submitSignup()
        cy.validateTextError('p', 'Email é obrigatório')
    }

    // Empty Password
    emptyPassword() {
        const { name, email, confirmPassword } = data.userValid
        cy.fillSignupForm({ name, email, confirmPassword })
        cy.submitSignup()
        cy.validateTextError('p', 'A senha deve ter no mínimo 8 caracteres')
        cy.validateSignupError('#«Rhhtml7»-form-item-message', 'As senhas não coincidem')
    }

    // Empty Confirm Password
    emptyConfirmPassword() {
        const { name, email, password } = data.userValid
        cy.fillSignupForm({ name, email, password })
        cy.submitSignup()
        cy.validateSignupError('#«Rhhtml7»-form-item-message', 'A senha deve ter no mínimo 8 caracteres')
    }

    // Invalid Name
    nameInvalid() {
        cy.fillSignupForm(data.nameInvalid)
        cy.submitSignup()
        cy.validateTextError('p', 'Nome pode ter no máximo 50 caracteres')
    }

    // Invalid Email 
    emailInvalid() {
        cy.fillSignupForm(data.emailInvalid)
        cy.submitSignup()
        cy.validateTextError('p', 'Email inválido')
    }
    // Invalid Password 
    passwordInvalid() {
        cy.fillSignupForm(data.passwordInvalid)
        cy.submitSignup()
        cy.validateTextError('p', 'A senha deve conter pelo menos uma letra e um número')
    }
    // Short Password
    shortPassword() {
        cy.fillSignupForm(data.shortPassword)
        cy.submitSignup()
        cy.validateTextError('p', 'A senha deve ter no mínimo 8 caracteres')
        cy.validateSignupError('#«Rhhtml7»-form-item-message', 'A senha deve ter no mínimo 8 caracteres')
    }
    // Non Standard Password
    nonStandardPassword() {
        cy.fillSignupForm(data.nonStandardPassword)
        cy.submitSignup()
        cy.validateTextError('p', 'A senha deve conter pelo menos uma letra e um número')

    }
    // Password Without Letters
    passwordWithoutLetters() {
        cy.fillSignupForm(data.passwordWithoutLetters)
        cy.submitSignup()
        cy.validateTextError('p', 'A senha deve conter pelo menos uma letra e um número')
    }
    // Password Without Numbers
    passwordWithoutNumbers() {
        cy.fillSignupForm(data.passwordWithoutNumbers)
        cy.submitSignup()
        cy.validateTextError('p', 'A senha deve conter pelo menos uma letra e um número')
    }
    // Password Different
    passwordDifferent() {
        cy.fillSignupForm(data.passwordDifferent)
        cy.submitSignup()
        cy.validateSignupError('#«Rhhtml7»-form-item-message', 'As senhas não coincidem')
    }
    // Password Confirm Different
    passwordConfirmDifferent() {
        cy.fillSignupForm(data.passwordConfirmDifferent)
        cy.submitSignup()
        cy.validateSignupError('#«Rhhtml7»-form-item-message', 'As senhas não coincidem')
    }

} export default new User()