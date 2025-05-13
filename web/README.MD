# Clone GPT - Frontend

Este é o frontend do projeto **Clone GPT**, uma aplicação que simula um chatbot utilizando integração com APIs. Este projeto foi desenvolvido com **React.js** e estilizado com **CSS**.

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **CSS**: Para estilização da interface.
- **React Scripts**: Scripts para facilitar o desenvolvimento e build do projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js) ou **yarn**

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielabdam/chatgpt-clone.git
   cd chatgpt-clone/web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   Ou, se estiver usando `yarn`:
   ```bash
   yarn install
   ```

## Dependências

As seguintes dependências são utilizadas no projeto:

- **React**: Biblioteca principal para construção da interface.
- **Axios**: Para realizar requisições HTTP.
- **React Scripts**: Scripts para desenvolvimento e build.
- **Testing Libraries**: Para testes (opcional).

### Instalação de Dependências

Caso precise instalar manualmente, execute:
```bash
npm install axios react react-dom react-scripts
```

## Como Rodar o Projeto

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   Ou, se estiver usando `yarn`:
   ```bash
   yarn start
   ```

2. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

A estrutura principal do projeto é a seguinte:

```
src/
├── components/
│   ├── chat/
│   │   ├── Chat.js
│   │   ├── Chat.css
│   ├── ChatHistory/
│       ├── ChatHistory.js
│       ├── ChatHistory.css
├── styles/
│   ├── App.css
│   ├── main.css
│   ├── index.css
├── App.js
├── index.js
```

### Descrição dos Arquivos

- **`Chat.js`**: Componente principal do chat, responsável por exibir mensagens e interagir com o usuário.
- **`ChatHistory.js`**: Componente que exibe o histórico de chats.
- **`App.js`**: Componente raiz da aplicação.
- **`styles/`**: Diretório contendo os arquivos de estilização.

## Desenvolvedor

Esta parte do frontend foi desenvolvida por **Daniel Abdam**:

- [GitHub - Daniel Abdam](https://github.com/danielabdam)

---
### Conciderações Finais 
Este projeto foi desenvolvido com o objetivo de aprofundar conhecimentos em tecnologias inovadoras envolvendo inteligência artificial. Utilizei ferramentas como N8N para automações e Axios para a integração com a API da OpenAI, proporcionando uma experiência de chatbot interativo.

O projeto ainda está em fase de desenvolvimento e continuará sendo aprimorado ao longo do tempo. Novas funcionalidades, melhorias na interface e atualizações na documentação (README) estão previstas para as próximas versões.

Este é apenas o começo — em breve, apresentarei o Orion, uma evolução deste projeto. 

-Daniel Abdam

---

Se tiver dúvidas ou problemas, sinta-se à vontade para abrir uma issue no repositório.