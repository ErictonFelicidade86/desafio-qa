/// <reference types="cypress"/>

import LoginPage from "../support/pages/LoginPage/LoginPage";
import CadastroUser from "../support/pages/CadastroPage/CadastroUser";

const login = LoginPage;
const user = CadastroUser;

describe('Cadastro', () => {
    it('Deve cadastrar um novo usuário', () => {
      login.go();
      user.acessoCadastro()
      user.formUser()
    })

    it('Tentar cadastrar um usuário ja existente', () => {
      login.go();
      user.acessoCadastro()
      user.existingUser()
    })

    it('Tentar cadastrar um usuário sem preencher campos obrigatórios', () => {
      login.go();
      user.acessoCadastro()
      user.requiredFields()
    })

    it('Tentar cadastrar um usuário sem informar o nome', () => {
      login.go();
      user.acessoCadastro()
      user.emptyName()
    })

    it('Tentar cadastrar um usuário sem informar o email', () => {
      login.go();
      user.acessoCadastro()
      user.emptyEmail()
    })

    it('Tentar cadastrar um usuário sem informar a senha', () => {
      login.go();
      user.acessoCadastro()
      user.emptyPassword()
    })

    it('Tentar cadastrar um usuário sem informar o confirmar senha', () => {
      login.go();
      user.acessoCadastro()
      user.emptyConfirmPassword()
    })

    it('Tentar cadastrar um usuário com nome passe de 50 caracteres', () => {
      login.go();
      user.acessoCadastro()
      user.nameInvalid()
    })

    it('Tentar cadastrar um usuário com um email inválido', () => {
      login.go();
      user.acessoCadastro()
      user.emailInvalid()
    })

    it('Tentar cadastrar um usuário com senha inválida', () => {
      login.go();
      user.acessoCadastro()
      user.passwordInvalid()
    })

    it('Tentar cadastrar um usuário com senha curta', () => {
      login.go();
      user.acessoCadastro()
      user.shortPassword()
    })

    it('Tentar cadastrar um usuário com senha fora do padrão', () => {
      login.go();
      user.acessoCadastro()
      user.nonStandardPassword()
    })

    it('Tentar cadastrar um usuário com senha sem letra', () => {
      login.go();
      user.acessoCadastro()
      user.passwordWithoutLetters()
    })

    it('Tentar cadastrar um usuário com senha sem número', () => {
      login.go();
      user.acessoCadastro()
      user.passwordWithoutNumbers()
    })

    it('Tentar cadastrar um usuário com uma senha diferente de confirmar senha', () => {
      login.go();
      user.acessoCadastro()
      user.passwordDifferent()
    })

    it('Tentar cadastrar um usuário com confirmar senha diferente de senha', () => {
      login.go();
      user.acessoCadastro()
      user.passwordConfirmDifferent()
    })
  })