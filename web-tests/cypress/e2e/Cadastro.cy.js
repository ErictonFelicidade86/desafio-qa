/// <reference types="cypress"/>

import LoginPage from "../support/pages/LoginPage/LoginPage";
import CadastroUser from "../support/pages/CadastroPage/CadastroUser";

const login = LoginPage
const user = CadastroUser
const viewports = [
  'macbook-16',
  [1920, 1080],
]

describe('Cadastro com sucesso', () => {
  beforeEach(() => {
    cy.visit('/')
    login.go()
    cy.contains('a', 'Cadastre-se').should('exist').should('be.visible').click({ force: true })
  })
  it('Deve cadastrar um novo usuário', () => {
    user.formUser()
  })
})

describe('Cadastro com dados inválidos', ()=> {
  beforeEach(() => {
    cy.visit('/')
    login.go()
    cy.contains('a', 'Cadastre-se').should('exist').should('be.visible').click({ force: true })
  })
  it('Tentar cadastrar um usuário ja existente', () => {
    user.existingUser()
  })

  it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
    user.requiredFields()
  })

  it('Tentar cadastrar um usuário sem informar o nome', () => {
    user.emptyName()
  })

  it('Tentar cadastrar um usuário sem informar o email', () => {
    user.emptyEmail()
  })

  it('Tentar cadastrar um usuário sem informar a senha', () => {
    user.emptyPassword()
  })

  it('Tentar cadastrar um usuário sem informar o confirmar senha', () => {
    user.emptyConfirmPassword()
  })

  it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
    user.nameInvalid()
  })

  it('Tentar cadastrar um usuário com um email inválido', () => {
    user.emailInvalid()
  })

  it('Tentar cadastrar um usuário com senha inválida', () => {
    user.passwordInvalid()
  })

  it('Tentar cadastrar um usuário com senha curta', () => {
    user.shortPassword()
  })

  it('Tentar cadastrar um usuário com senha fora do padrão', () => {
    user.nonStandardPassword()
  })

  it('Tentar cadastrar um usuário com senha sem letra', () => {
    user.passwordWithoutLetters()
  })

  it('Tentar cadastrar um usuário com senha sem número', () => {
    user.passwordWithoutNumbers()
  })

  it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
    user.passwordDifferent()
  })

  it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
    user.passwordConfirmDifferent()
  })
})

describe('Cadastro Responsivo Page', () => {
  viewports.forEach((vp) => {
    const isCustom = Array.isArray(vp)
    const label = isCustom ? `${vp[0]}x${vp[1]}` : vp

    describe(`Viewport: ${label}`, () => {
      beforeEach(() => {
        if (isCustom) {
          cy.viewport(vp[0], vp[1])
        } else {
          cy.viewport(vp)
        }
        cy.visit('/')
        login.go()
        cy.contains('a', 'Cadastre-se').should('exist').should('be.visible').click({ force: true })

      })
    
      it('Tentar cadastrar um usuário ja existente', () => {
        user.existingUser()
      })
    
      it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
        user.requiredFields()
      })
    
      it('Tentar cadastrar um usuário sem informar o nome', () => {
        user.emptyName()
      })
    
      it('Tentar cadastrar um usuário sem informar o email', () => {
        user.emptyEmail()
      })
    
      it('Tentar cadastrar um usuário sem informar a senha', () => {
        user.emptyPassword()
      })

      it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
        user.nameInvalid()
      })
    
      it('Tentar cadastrar um usuário com um email inválido', () => {
        user.emailInvalid()
      })
    
      it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
        user.passwordDifferent()
      })
    
      it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
        user.passwordConfirmDifferent()
      })
    })
  })
})
