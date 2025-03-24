/// <reference types="cypress"/>

import LoginPage from "../support/pages/LoginPage/LoginPage";
import CadastroUser from "../support/pages/CadastroPage/CadastroUser";

const login = LoginPage;
const user = CadastroUser;

const viewports = [
  'macbook-16',
  'macbook-15',
  'macbook-13',
  'macbook-11',
  'iphone-x',
  'iphone-xr',
  'iphone-6',
  'iphone-8',
  'ipad-2',
  'ipad-mini',
  'samsung-s10',
  'samsung-note9',
  [1920, 1080],
  [1600, 900],  
]

describe('Cadastro', () => {
  it('Deve cadastrar um novo usuário', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.formUser()
  })

  it('Tentar cadastrar um usuário ja existente', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.existingUser()
  })

  it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.requiredFields()
  })

  it('Tentar cadastrar um usuário sem informar o nome', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.emptyName()
  })

  it('Tentar cadastrar um usuário sem informar o email', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.emptyEmail()
  })

  it('Tentar cadastrar um usuário sem informar a senha', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.emptyPassword()
  })

  it('Tentar cadastrar um usuário sem informar o confirmar senha', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.emptyConfirmPassword()
  })

  it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.nameInvalid()
  })

  it('Tentar cadastrar um usuário com um email inválido', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.emailInvalid()
  })

  it('Tentar cadastrar um usuário com senha inválida', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.passwordInvalid()
  })

  it('Tentar cadastrar um usuário com senha curta', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.shortPassword()
  })

  it('Tentar cadastrar um usuário com senha fora do padrão', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.nonStandardPassword()
  })

  it('Tentar cadastrar um usuário com senha sem letra', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.passwordWithoutLetters()
  })

  it('Tentar cadastrar um usuário com senha sem número', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.passwordWithoutNumbers()
  })

  it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
    user.passwordDifferent()
  })

  it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
    cy.visit('/')
    login.go()
    user.accessSignUp()
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
      })
    
      it('Tentar cadastrar um usuário ja existente', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.existingUser()
      })
    
      it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.requiredFields()
      })
    
      it('Tentar cadastrar um usuário sem informar o nome', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.emptyName()
      })
    
      it('Tentar cadastrar um usuário sem informar o email', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.emptyEmail()
      })
    
      it('Tentar cadastrar um usuário sem informar a senha', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.emptyPassword()
      })
    
      it('Tentar cadastrar um usuário sem informar o confirmar senha', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.emptyConfirmPassword()
      })
    
      it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.nameInvalid()
      })
    
      it('Tentar cadastrar um usuário com um email inválido', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.emailInvalid()
      })
    
      it('Tentar cadastrar um usuário com senha inválida', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.passwordInvalid()
      })
    
      it('Tentar cadastrar um usuário com senha curta', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.shortPassword()
      })
    
      it('Tentar cadastrar um usuário com senha fora do padrão', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.nonStandardPassword()
      })
    
      it('Tentar cadastrar um usuário com senha sem letra', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.passwordWithoutLetters()
      })
    
      it('Tentar cadastrar um usuário com senha sem número', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.passwordWithoutNumbers()
      })
    
      it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.passwordDifferent()
      })
    
      it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
        cy.visit('/')
        login.go()
        user.accessSignUp()
        user.passwordConfirmDifferent()
      })
    })
  })
})
