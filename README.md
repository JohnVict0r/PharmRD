<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/react-native-template-rocketseat-basic.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-template-rocketseat-basic)
[![npm](https://img.shields.io/npm/dt/react-native-template-rocketseat-basic.svg)](https://www.npmjs.com/package/react-native-template-rocketseat-basic)
[![GitHub issues](https://img.shields.io/github/issues-raw/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/rocketseat/react-native-template-rocketseat-basic.svg)](https://github.com/Rocketseat/react-native-template-rocketseat-basic/commits/master)
[![NPM](https://img.shields.io/npm/l/react-native-template-rocketseat-basic.svg)](https://choosealicense.com/licenses/mit)

<!-- PROJECT LOGO -->
<!-- <br />
<p align="center">
  <a href="https://rocketseat.com.br">
    <img src="https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo_roxa.png" alt="Logo">
  </a>

  <h3 align="center">Template Rocketseat Basic</h3>
</p> -->

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Edição](#edi%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um aplicativo Mobile para proporcionar uma nova experiência para os pacientes do brasil quando precisarem comprar seus medicamentos listados no receituário feito pelo seu médico.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

<!-- GETTING STARTED -->

## Começando

Para conseguir executar o projeto, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
PharmRD
├── src/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── images/
│   │   ├── rocketseat_logo_roxa.png
│   │   └── rocketseat_logo.png
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.js
├── LICENSE
├── package.json
└── README.md
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Edição

Nesta seção haverão instruções caso você queira editar o projeto, explicando para que os diretórios são utilizadas e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblitoeca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

<!-- Colaboradores -->

### Colaboradores

<hr>
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/johnvict0r">
        <img src="https://avatars0.githubusercontent.com/u/30505330?s=400&v=4" width="100px;" alt="John Victor"/>
        <br />
        <sub><b>John Victor</b></sub>
      </a><br />
      <a href="https://github.com/JohnVict0r/PharmRD/commits?author=johnvict0r" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/marialupiress">
        <img src="https://avatars0.githubusercontent.com/u/50592833?s=400&v=4" width="100px;" alt="Maria Luiza"/>
        <br />
        <sub><b>Maria Luiza</b></sub>
      </a><br />
      <a href="https://github.com/JohnVict0r/PharmRD/commits?author=marialupiress" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/eulaliaribeiro">
        <img src="https://avatars0.githubusercontent.com/u/54278522?s=400&v=4" width="100px;" alt="Eulália Ribeiro"/>
        <br />
        <sub><b>Eulália Ribeiro</b></sub>
      </a><br />
      <a href="https://github.com/JohnVict0r/PharmRD/commits?author=eulaliaribeiro" title="Code">💻</a>
    </td>
  </tr>
</table>

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
