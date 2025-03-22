import LoginPage from "../support/pages/LoginPage/LoginPage"

const login = LoginPage;

describe('Login', () => {
  it('Deve logar com sucesso', () => {
    login.go()
    login.sucesso()
  })

  it('Deve encerrar a sessão com sucesso', () => {
    login.go()
    login.sucesso()
    login.logout()
  })

  it('Não deve logar com senha inválida', ()=> {
    login.go()
    login.passwordInvalid()
  })

  it('Não deve logar com email inválida', ()=> {
    login.go()
    login.emailInvalid()
  })

  it('tentar logar sem usar email e senha', ()=> {
    login.go()
    login.emptyUser()
  })
})