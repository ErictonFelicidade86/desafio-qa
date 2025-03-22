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
        const urlBase = Cypress.config("baseUrl")
        cy.request(urlBase).then(res => {
            const email = res.body.data[0].email
            const name = res.body.data[0].firstname

            cy.get('#name').should('be.visible').type(name)
            cy.get('#email').should('be.visible').type(email)
            // cy.get('#name').should('be.visible').type(data.userValid.name)
            // cy.get('#email').should('be.visible').type(data.userValid.email)
            cy.get('#password').should('be.visible').type(data.userValid.password)
            cy.get('#confirmPassword').should('be.visible').type(data.userValid.confirmPassword)
            cy.contains('button', 'Cadastrar').should('be.visible').click()
            cy.contains('div', 'Faça login para continuar').should('be.visible').and('have.text', 'Faça login para continuar')
        })
    }

    // Existing User
    existingUser() {
        cy.get('#name').should('be.visible').type(data.userValid.name)
        cy.get('#email').should('be.visible').type(data.userValid.email)
        cy.get('#password').should('be.visible').type(data.userValid.password)
        cy.get('#confirmPassword').should('be.visible').type(data.userValid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('div', 'Usuário já cadastrado').should('be.visible').and('have.text', 'Usuário já cadastrado')
    }

    // Required Fields
    requiredFields() {
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'Nome é obrigatório').should('be.visible').and('have.text', 'Nome é obrigatório')
        cy.contains('p', 'Email é obrigatório').should('be.visible').and('have.text', 'Email é obrigatório')
        cy.contains('p', 'A senha deve ter no mínimo 8 caracteres').should('be.visible').and('have.text', 'A senha deve ter no mínimo 8 caracteres')
        cy.get('#«Rhhtml7»-form-item-message').should('be.visible').and('have.text', 'A senha deve ter no mínimo 8 caracteres')
    }

    // Empty Name
    emptyName() {
        cy.get('#email').should('be.visible').type(data.userValid.email)
        cy.get('#password').should('be.visible').type(data.userValid.password)
        cy.get('#confirmPassword').should('be.visible').type(data.userValid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'Nome é obrigatório').should('be.visible').and('have.text', 'Nome é obrigatório')
    }

    // Empty Email
    emptyEmail() {
        cy.get('#name').should('be.visible').type(data.userValid.name)
        cy.get('#password').should('be.visible').type(data.userValid.password)
        cy.get('#confirmPassword').should('be.visible').type(data.userValid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'Email é obrigatório').should('be.visible').and('have.text', 'Email é obrigatório')
    }

    // Empty Password
    emptyPassword() {
        cy.get('#name').should('be.visible').type(data.userValid.name)
        cy.get('#email').should('be.visible').type(data.userValid.email)
        cy.get('#confirmPassword').should('be.visible').type(data.userValid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'A senha deve ter no mínimo 8 caracteres').should('be.visible').and('have.text', 'A senha deve ter no mínimo 8 caracteres')
        cy.get('#«Rhhtml7»-form-item-message').should('be.visible').should('be.visible').and('have.text', 'As senhas não coincidem')
    }

    // Empty Confirm Password
    emptyConfirmPassword() {
        cy.get('#name').should('be.visible').type(data.userValid.name)
        cy.get('#email').should('be.visible').type(data.userValid.email)
        cy.get('#password').should('be.visible').type(data.userValid.password)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.get('#«Rhhtml7»-form-item-message').should('be.visible').should('be.visible').and('have.text', 'A senha deve ter no mínimo 8 caracteres')
    }

    // Invalid Name
    nameInvalid() {
        cy.get('#name').should('be.visible').type(data.nameInvalid.name)
        cy.get('#email').should('be.visible').type(data.nameInvalid.email)
        cy.get('#password').should('be.visible').type(data.nameInvalid.password)
        cy.get('#confirmPassword').should('be.visible').type(data.nameInvalid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'Nome pode ter no máximo 50 caracteres').should('be.visible').and('have.text', 'Nome pode ter no máximo 50 caracteres')
    }

    // Invalid Email 
    emailInvalid() {
        cy.get('#name').should('be.visible').type(data.emailInvalid.name)
        cy.get('#email').should('be.visible').type(data.emailInvalid.email)
        cy.get('#password').should('be.visible').type(data.emailInvalid.password)
        cy.get('#confirmPassword').should('be.visible').type(data.emailInvalid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'Email inválido').should('be.visible').and('have.text', 'Email inválido')
    }
    // Invalid Password 
    passwordInvalid() {
        cy.get('#name').should('be.visible').type(data.passwordInvalid.name)
        cy.get('#email').should('be.visible').type(data.passwordInvalid.email)
        cy.get('#password').should('be.visible').type(data.passwordInvalid.password)
        cy.get('#confirmPassword').should('be.visible').type(data.passwordInvalid.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'A senha deve conter pelo menos uma letra e um número').should('be.visible').and('have.text', 'A senha deve conter pelo menos uma letra e um número')
    }
    // Short Password
    shortPassword() {
        cy.get('#name').should('be.visible').type(data.shortPassword.name)
        cy.get('#email').should('be.visible').type(data.shortPassword.email)
        cy.get('#password').should('be.visible').type(data.shortPassword.password)
        cy.get('#confirmPassword').should('be.visible').type(data.shortPassword.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'A senha deve ter no mínimo 8 caracteres').should('be.visible').and('have.text', 'A senha deve ter no mínimo 8 caracteres')
        cy.get('#«Rhhtml7»-form-item-message').should('be.visible').and('have.text', 'A senha deve ter no mínimo 8 caracteres')
    }
    // Non Standard Password
    nonStandardPassword() {
        cy.get('#name').should('be.visible').type(data.nonStandardPassword.name)
        cy.get('#email').should('be.visible').type(data.nonStandardPassword.email)
        cy.get('#password').should('be.visible').type(data.nonStandardPassword.password)
        cy.get('#confirmPassword').should('be.visible').type(data.nonStandardPassword.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'A senha deve conter pelo menos uma letra e um número').should('be.visible').and('have.text', 'A senha deve conter pelo menos uma letra e um número')

    }
    // Password Without Letters
    passwordWithoutLetters() {
        cy.get('#name').should('be.visible').type(data.passwordWithoutLetters.name)
        cy.get('#email').should('be.visible').type(data.passwordWithoutLetters.email)
        cy.get('#password').should('be.visible').type(data.passwordWithoutLetters.password)
        cy.get('#confirmPassword').should('be.visible').type(data.passwordWithoutLetters.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'A senha deve conter pelo menos uma letra e um número').should('be.visible').and('have.text', 'A senha deve conter pelo menos uma letra e um número')
    }
    // Password Without Numbers
    passwordWithoutNumbers() {
        cy.get('#name').should('be.visible').type(data.passwordWithoutNumbers.name)
        cy.get('#email').should('be.visible').type(data.passwordWithoutNumbers.email)
        cy.get('#password').should('be.visible').type(data.passwordWithoutNumbers.password)
        cy.get('#confirmPassword').should('be.visible').type(data.passwordWithoutNumbers.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.contains('p', 'A senha deve conter pelo menos uma letra e um número').should('be.visible').and('have.text', 'A senha deve conter pelo menos uma letra e um número')
    }
    // Password Different
    passwordDifferent() {
        cy.get('#name').should('be.visible').type(data.passwordDifferent.name)
        cy.get('#email').should('be.visible').type(data.passwordDifferent.email)
        cy.get('#password').should('be.visible').type(data.passwordDifferent.password)
        cy.get('#confirmPassword').should('be.visible').type(data.passwordDifferent.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.get('#«Rhhtml7»-form-item-message').should('be.visible').should('be.visible').and('have.text', 'As senhas não coincidem')
    }
    // Password Confirm Different
    passwordConfirmDifferent() {
        cy.get('#name').should('be.visible').type(data.passwordConfirmDifferent.name)
        cy.get('#email').should('be.visible').type(data.passwordConfirmDifferent.email)
        cy.get('#password').should('be.visible').type(data.passwordConfirmDifferent.password)
        cy.get('#confirmPassword').should('be.visible').type(data.passwordConfirmDifferent.confirmPassword)
        cy.contains('button', 'Cadastrar').should('be.visible').click()
        cy.get('#«Rhhtml7»-form-item-message').should('be.visible').should('be.visible').and('have.text', 'As senhas não coincidem')
    }

} export default new User()