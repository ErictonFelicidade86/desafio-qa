# Desafio Técnico – QA Pleno

## 📌 Descrição

Este desafio tem como objetivo avaliar sua capacidade de criar, manter e executar testes automatizados utilizando **Cypress**. Além disso, queremos entender como você analisa cenários de testes e aplica boas práticas de automação.

Você deverá testar uma aplicação web simples, cobrindo diferentes cenários de teste, incluindo testes funcionais, de regressão e de interface.

---

## ✅ Requisitos

- Utilizar **Cypress** para a automação de testes.
- Seguir boas práticas de automação, como **Page Object Model (POM)**.
- Criar um **pipeline de CI/CD** simples para rodar os testes automaticamente a cada pull request para a branch **develop**.
- Crie uma nova branch para sua implementação.
- Documentar o processo e os testes criados em um **README.md**.

---

## 🖥️ Cenário a ser testado

O projeto fornecido contém um sistema de **cadastro de usuários**. Você deverá implementar testes para validar suas funcionalidades principais.

### 🔍 Funcionalidades a serem testadas

#### 1️⃣ Cadastro de novo usuário

- Validar que um usuário pode ser cadastrado com sucesso preenchendo todos os campos corretamente.
- Garantir que a senha segue os critérios exigidos.
- Testar mensagens de erro ao tentar cadastrar um usuário com **e-mail já existente**.

#### 2️⃣ Login no sistema

- Validar **login bem-sucedido** com credenciais corretas.
- Testar erro ao tentar logar com **senha incorreta**.

#### 3️⃣ Validação de interface

- Garantir que os **campos obrigatórios** estão visíveis e marcados corretamente.
- Testar a **responsividade da tela** em diferentes tamanhos de viewport.

#### 4️⃣ Testes negativos

- Tentar cadastrar um usuário **sem preencher campos obrigatórios** e validar as mensagens de erro:
  - "Nome é obrigatório" se o campo de nome estiver vazio.
  - "Email é obrigatório" se o campo de email estiver vazio.
  - "Email inválido" se o formato do email for inválido.
  - "Senha é obrigatória" se o campo de senha estiver vazio.
  - "A senha deve ter no mínimo 8 caracteres" se a senha for curta.
  - "A senha deve conter pelo menos uma letra e um número" se a senha não atender aos critérios.
  - "Confirmação da senha é obrigatória" se o campo de confirmação estiver vazio.
  - "As senhas não coincidem" se as senhas forem diferentes.

#### 5️⃣ Testes de validação de rotas

- Garantir que um usuário **não autenticado** não pode acessar a página inicial `/` e seja redirecionado para a página de login.
- Garantir que um usuário **autenticado** ao tentar acessar `/login` ou `/signup` seja redirecionado para a página inicial `/`.

---

## 🎯 O que será avaliado?

✔️ Organização e estrutura do código.
✔️ Qualidade dos testes automatizados.
✔️ Uso de boas práticas de Cypress (**Page Object Model, boas estratégias de seleção de elementos, etc.**).
✔️ Clareza na documentação do projeto.
✔️ Implementação de um **pipeline de CI/CD** (GitHub Actions).
✔️ Uso adequado do controle de versão (**commits bem estruturados e mensagens claras**).

---

## 🚀 Entrega

1. **Clone o repositório fornecido** e crie uma **nova branch** para sua implementação.
2. Implemente os testes conforme os requisitos acima.
3. Inclua um arquivo **`README.md`** com instruções para rodar o projeto.
4. Submeta um **pull request (PR)** para revisão.

---

## ⭐ Diferenciais (Não Obrigatório)

🌟 Testes rodando **em paralelo**.
🌟 Relatórios automatizados com **screenshots e vídeos das execuções**.
🌟 Integração com ferramentas de report como **TestRail** ou **Allure**.

---

💡 **Dúvidas?** Fique à vontade para entrar em contato.

Boa sorte! 🚀

## Executando o projeto

1. **Clone o repositório**

```bash
   git clone https://github.com/Jefferson00/desafio-qa.git
   cd desafio-qa
```

2. Instale as dependências

```bash
    npm install
    # ou
    yarn install
```

3. Crie um arquivo **.env** seguindo o padrão do **.env.example**
4. Execute as migrations do Prisma

```bash
    npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento

```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
```

O projeto estará disponível em [http://localhost:3010](http://localhost:3010).
