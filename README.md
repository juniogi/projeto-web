# 🥖 Padaria Online

Frontend de uma loja virtual de padaria desenvolvido com **Angular** e **Bootstrap** como projeto da disciplina de **Programação Web (PWEB)** — FATEC-SP.

---

## 📋 Sobre o Projeto

O sistema simula o frontend de uma padaria online, permitindo ao usuário navegar por produtos, visualizar detalhes, buscar itens, adicionar ao carrinho e gerenciar sua conta. O backend será implementado na segunda fase do projeto (P2).

---

## 🖥️ Telas do Sistema

| Tela | Descrição |
|------|-----------|
| **Vitrine** | Página inicial com todos os produtos organizados em grid responsivo |
| **Detalhe** | Página individual do produto com foto, descrição e botão de compra |
| **Busca** | Resultados filtrados por nome, categoria ou descrição |
| **Cesta** | Carrinho de compras com itens, quantidades, valores e total |
| **Login** | Formulário de autenticação com email e senha |
| **Cadastro** | Formulário de criação de conta com nome, email, senha, CPF e telefone |
| **Esqueci Senha** | Recuperação de senha via email |

---

## 🛠️ Tecnologias Utilizadas

- **Angular** — Framework frontend
- **TypeScript** — Linguagem principal
- **Bootstrap** — Estilização e responsividade
- **CSS3** — Customizações visuais
- **HTML5** — Estrutura das páginas

---

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Cabeçalho com logo, busca e ícones
│   │   ├── menu/            # Menu de categorias
│   │   ├── vitrine/         # Página inicial com grid de produtos
│   │   ├── detalhe/         # Página de detalhes do produto
│   │   ├── busca/           # Página de resultados de busca
│   │   ├── cesta/           # Carrinho de compras
│   │   ├── login/           # Tela de login
│   │   ├── cadastro/        # Tela de cadastro
│   │   └── esqueci-senha/   # Tela de recuperação de senha
│   ├── services/
│   │   ├── product.ts       # Serviço de produtos (dados mockados)
│   │   └── cart.ts          # Serviço do carrinho de compras
│   └── models/
│       └── product.model.ts # Interfaces de Produto e Item do Carrinho
├── public/                  # Imagens dos produtos
└── styles.css               # Estilos globais
```

---

## 🚀 Como Executar

**Pré-requisitos:** Node.js e Angular CLI instalados.

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/padaria-online.git

# Entrar na pasta
cd padaria-online

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
ng serve
```

Acesse no navegador: `http://localhost:4200`

---

## 📦 Categorias de Produtos

- **Bolos** — Morango, Ninho, Limão, Ameixa com Doce de Leite, Milho, Fubá
- **Pães** — Australiano, de Leite, Sovado, de Batata, Sírio, Baguetes, Ciabatta, Integral
- **Doces** — Sonho, Carolina, Bomba, Brigadeiro, Beijinho, Quindim e mais
- **Salgados** — Coxinha, Kibe, Esfirras, Empadas, Folhados, Risole, Quiche
- **Tortas Salgadas** — Queijo, Frango, Presunto e Queijo, Calabresa, Palmito, Atum
- **Tortas Doces** — Chocolate, Holandesa, Limão, Maracujá, Maçã, Banana, Banoffee

---

## ✅ Funcionalidades

- [x] Vitrine com grid responsivo de produtos
- [x] Navegação por categorias via menu
- [x] Busca de produtos por nome ou categoria
- [x] Página de detalhes do produto
- [x] Carrinho de compras funcional (adicionar, remover, limpar)
- [x] Cálculo automático do total
- [x] Telas de Login, Cadastro e Recuperação de Senha
- [x] Design responsivo (desktop e mobile)
- [ ] Integração com backend (P2)
- [ ] Autenticação real de usuários (P2)
- [ ] Persistência de dados (P2)

---

## 👨‍💻 Autor

**Fernando** — Análise e Desenvolvimento de Sistemas — FATEC-SP

---

## 📝 Observações

Este projeto corresponde à **P1** da disciplina de Programação Web. O backend e a integração completa serão desenvolvidos na **P2**, utilizando este frontend como base.
