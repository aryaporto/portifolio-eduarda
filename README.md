# Portfólio Pessoal — Eduarda

Portfólio online desenvolvido para a atividade prática da disciplina **Fundamentos da Programação Web** (UNINTER), com o objetivo de apresentar formação, projetos e contato em uma página única.

🔗 **Site publicado:** []

## Sobre o projeto

Single Page Website com navegação por âncoras, dividido em 4 seções acessíveis por um menu fixo:

- **Sobre mim** — apresentação pessoal e áreas de interesse.
- **Formação** — trilha de estudos e certificações, em formato de linha do tempo.
- **Portfólio** — projetos de dados e automação.
- **Contato** — formulário com validação em JavaScript e simulação de envio.

## Funcionalidades

- Navegação por âncoras, sem recarregar a página.
- Menu responsivo (hambúrguer) para telas pequenas.
- Alternância de tema claro/escuro, com preferência salva no navegador.
- Validação de formulário (campos obrigatórios + formato de e-mail) com mensagens de erro inline.
- Modal de confirmação simulando o envio da mensagem de contato.

## Tecnologias

- HTML5
- CSS3 (sem Bootstrap, Tailwind ou qualquer framework)
- JavaScript puro (sem jQuery, React, Vue ou similares)

## Estrutura de arquivos

```
portfolio-eduarda/
├── index.html      # Estrutura e conteúdo das 4 seções
├── estilo.css      # Estilos, temas (claro/escuro) e responsividade
├── script.js       # Tema, menu responsivo e validação do formulário
└── README.md       # Este arquivo
```

## Como executar localmente

1. Baixe ou clone este repositório.
2. Abra a pasta no VS Code (`File > Open Folder`).
3. Instale a extensão **Live Server** (Ritwick Dey).
4. Clique com o botão direito em `index.html` → **Open with Live Server**.

Não é necessário nenhum servidor, build ou instalação de dependências — é só HTML, CSS e JS estático.
