import LoginPage from "../support/pages/LoginPage/LoginPage"

const login = LoginPage;

describe('Login', () => {
  beforeEach(() => {
    login.go()
  })
  it.only('Deve logar com sucesso', () => {
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