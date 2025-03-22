import LoginPage from "../support/pages/LoginPage/LoginPage"

const login = LoginPage;

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    // login.go()
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