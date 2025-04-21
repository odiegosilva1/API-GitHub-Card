# GitHub User Card - Consumindo API do GitHub

![GitHub license](https://img.shields.io/github/license/odiegosilva1/API-GitHub-Card?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/odiegosilva1/API-GitHub-Card?style=flat-square)

Um projeto simples que consome a API do GitHub para exibir informações do seu perfil em um card estilizado.

## 📋 Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Conexão com a internet

## 🚀 Como usar

1. Clone este repositório:
```bash
git clone https://github.com/odiegosilva1/API-GitHub-Card.git
```

2. Abra o arquivo `index.html` no seu navegador.

3. O card com suas informações do GitHub será exibido automaticamente.

## 🛠️ Estrutura do Projeto

```
📁 github-user-card/
├── 📁 css/
│   └── style.css         # Estilos do card e da página
├── 📁 js/
│   └── scripts.js        # Lógica para consumir a API e exibir os dados
├── index.html            # Página principal
└── README.md             # Este arquivo
```

## 🔧 Personalização

Para exibir informações de outro usuário, edite o arquivo `scripts.js` e altere o nome de usuário na URL da API:

```javascript
// Altere 'seu-usuario' para o username desejado
fetch('https://api.github.com/users/odiegosilva1')
```

## 🌐 API Utilizada

- [GitHub API - Users](https://docs.github.com/en/rest/reference/users)

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Desenvolvido com ❤️ por [Diego Silva](https://github.com/odiegosilva1)
