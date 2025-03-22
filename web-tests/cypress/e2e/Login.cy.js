import LoginPage from "../support/pages/LoginPage/LoginPage"

const login = LoginPage;

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

describe('Login', () => {
  beforeEach(() => {
    login.go()
  })
  it('Deve logar com sucesso', () => {
    login.sucesso()
  })

  it('Deve encerrar a sessão com sucesso', () => {
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
        if (isCustom) {
          cy.viewport(vp[0], vp[1])
        } else {
          cy.viewport(vp)
        }
        login.go()
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
