/// <reference types="cypress"/>

import CadastroUser from "../support/pages/CadastroPage/CadastroUser";
import LoginPage from "../support/pages/LoginPage/LoginPage";

const user = CadastroUser;
const login = LoginPage

const viewports = [
  [1920, 1080],
  [1600, 900],  
  'macbook-16',
]

describe('Cadastro', () => {
  it('Deve cadastrar um novo usuário', () => {
    login.go()
    user.accessSignUp()
    user.formUser()
  })

  it('Tentar cadastrar um usuário ja existente', () => {
    login.go()
    user.accessSignUp()
    user.existingUser()
  })

  it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
    login.go()
    user.accessSignUp()
    user.requiredFields()
  })

  it('Tentar cadastrar um usuário sem informar o nome', () => {
    login.go()
    user.accessSignUp()
    user.emptyName()
  })

  it('Tentar cadastrar um usuário sem informar o email', () => {
    login.go()
    user.accessSignUp()
    user.emptyEmail()
  })

  it('Tentar cadastrar um usuário sem informar a senha', () => {
    login.go()
    user.accessSignUp()
    user.emptyPassword()
  })

  it('Tentar cadastrar um usuário sem informar o confirmar senha', () => {
    login.go()
    user.accessSignUp()
    user.emptyConfirmPassword()
  })

  it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
    login.go()
    user.accessSignUp()
    user.nameInvalid()
  })

  it('Tentar cadastrar um usuário com um email inválido', () => {
    login.go()
    user.accessSignUp()
    user.emailInvalid()
  })

  it('Tentar cadastrar um usuário com senha inválida', () => {
    login.go()
    user.accessSignUp()
    user.passwordInvalid()
  })

  it('Tentar cadastrar um usuário com senha curta', () => {
    login.go()
    user.accessSignUp()
    user.shortPassword()
  })

  it('Tentar cadastrar um usuário com senha fora do padrão', () => {
    login.go()
    user.accessSignUp()
    user.nonStandardPassword()
  })

  it('Tentar cadastrar um usuário com senha sem letra', () => {
    login.go()
    user.accessSignUp()
    user.passwordWithoutLetters()
  })

  it('Tentar cadastrar um usuário com senha sem número', () => {
    login.go()
    user.accessSignUp()
    user.passwordWithoutNumbers()
  })

  it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
    login.go()
    user.accessSignUp()
    user.passwordDifferent()
  })

  it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
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

      // it('Deve cadastrar um novo usuário', () => {
      //   login.go()
      //   user.accessSignUp()
      //   user.formUser()
      // })
    
      it('Tentar cadastrar um usuário ja existente', () => {
        login.go()
        user.accessSignUp()
        user.existingUser()
      })
    
      it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
        login.go()
        user.accessSignUp()
        user.requiredFields()
      })
    
      it('Tentar cadastrar um usuário sem informar o nome', () => {
        login.go()
        user.accessSignUp()
        user.emptyName()
      })
    
      it('Tentar cadastrar um usuário sem informar o email', () => {
        login.go()
        user.accessSignUp()
        user.emptyEmail()
      })
    
      it('Tentar cadastrar um usuário sem informar a senha', () => {
        login.go()
        user.accessSignUp()
        user.emptyPassword()
      })
    
      it('Tentar cadastrar um usuário sem informar o confirmar senha', () => {
        login.go()
        user.accessSignUp()
        user.emptyConfirmPassword()
      })
    
      it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
        login.go()
        user.accessSignUp()
        user.nameInvalid()
      })
    
      it('Tentar cadastrar um usuário com um email inválido', () => {
        login.go()
        user.accessSignUp()
        user.emailInvalid()
      })
    
      it('Tentar cadastrar um usuário com senha inválida', () => {
        login.go()
        user.accessSignUp()
        user.passwordInvalid()
      })
    
      it('Tentar cadastrar um usuário com senha curta', () => {
        login.go()
        user.accessSignUp()
        user.shortPassword()
      })
    
      it('Tentar cadastrar um usuário com senha fora do padrão', () => {
        login.go()
        user.accessSignUp()
        user.nonStandardPassword()
      })
    
      it('Tentar cadastrar um usuário com senha sem letra', () => {
        login.go()
        user.accessSignUp()
        user.passwordWithoutLetters()
      })
    
      it('Tentar cadastrar um usuário com senha sem número', () => {
        login.go()
        user.accessSignUp()
        user.passwordWithoutNumbers()
      })
    
      it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
        login.go()
        user.accessSignUp()
        user.passwordDifferent()
      })
    
      it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
        login.go()
        user.accessSignUp()
        user.passwordConfirmDifferent()
      })
    })
  })
})
