import LoginPage from "../support/pages/LoginPage/LoginPage"

const login = LoginPage;

const viewports = [
  [1920, 1080],
  [1600, 900],  
  'macbook-16',
  'macbook-15',
  'macbook-13',
  'macbook-11',
  'samsung-note9',
]

describe('Login', () => {
  beforeEach(() => {
    cy.access()
  })
  it('Deve logar com sucesso', () => {
    login.sucesso()
  })

  it.only('Deve encerrar a sessão com sucesso', () => {
    login.sucesso()
    login.logout()
  })

  it('Não deve logar com senha inválida', ()=> {
    login.passwordInvalid()
  })

  it('Não deve logar com email inválida', ()=> {
    login.emailInvalid()
  })

  it('tentar logar sem usar email e senha', ()=> {
    login.emptyUser()
  })
})

describe('Login Responsivo Page', () => {
  viewports.forEach((vp) => {
    const isCustom = Array.isArray(vp)
    const label = isCustom ? `${vp[0]}x${vp[1]}` : vp

    describe(`Viewport: ${label}`, () => {
      beforeEach(() => {
        cy.access()
        if (isCustom) {
          cy.viewport(vp[0], vp[1])
        } else {
          cy.viewport(vp)
        }
      })

      it('Deve logar com sucesso', () => {
        login.sucesso()
      })

      it('Deve encerrar sessão com sucesso', () => {
        login.sucesso()
        login.logout()
      })

      it('Não deve logar com senha inválida', () => {
        login.passwordInvalid()
      })

      it('Não deve logar com email inválido', () => {
        login.emailInvalid()
      })

      it('Deve mostrar erro ao tentar logar sem email e senha', () => {
        login.emptyUser()
      })
    })
  })
})
