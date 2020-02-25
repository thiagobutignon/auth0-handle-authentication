## React Hooks componentes funcionais

**Callback.js:** Será utilizado como componente que irá redirecionar o usuário após o Auth0 autenticar o usuário

**Header.js:** Contém os links para os componentes de login a e logout baseado no estado de autenticação do usuário

**Home.js:** Simplesmente mostra o texto da Home do aplicativo

**Hook1.js:** Contém três maneiras de atualizar o estado do React Hooks. `useState`, `useReducer` e `useContext`. Utilizar essas três formas de atualizar o estado auxilia na compreensão das diferenças de cada um dos estados.

**HooksForm1.js:** Possue um formulário que irá atualizar o estado de três maneiras: `useState`, `useReducer`, `useContext`

**PrivateComponent.js:** Componente somente acessível para usuários logados.

**Profile.js:** Um dashboard de usuário que irá mostrar os seus dados.

## Arquivos de Reducers e Actions

**ActionTypes.js:** Irá segurar todas as string action types e suas variavéis. Isso facilita a modificação dos arquivos para todos os tipos de ações ao invés de você ter que buscar cada tipo de ação que você utilizou no seu código

**Actions.js:** Irá carregar as ações atuais que serão utilizadas no reducer para atualizar os estados.

**AuthReducer.js:** Irá segurar todas as ações de leitura e atualização das propriedades dos estados relacionados a autenticação do usuário

**FormReducer.js:** Irá segurar o reducer para ler e atualizar o estado das propriedades relacionadas ao formulário

**PlainReducer.js:** Irá servir como boilerplate do reducer.

## Arquivos Utility

Esses arquivos nos ajudam a configurar o nosso app.

**Context.js:** Responsável por segurar o objeto de Context e será importado para cada um dos nossos componentes que utilizarem o `useContext()` hook

**Auth.js:** Esse será o único arquivo de classe no aplicativo. Nota: esse não é um React Class Component, mas sim um vanilla javascript class. Eu tentei configurar ele como arrow function mas não funcionou. Esse arquivo é melhor que seja configurado como classe. Ele irá segurar todas as nossas autenticações associatas a funções e variáveis.

**History.js:** Esse será responsável por manter um histórico dos objetos que utilizarmos para navegação

**AuthCheck.js:** Responsável por cuidar da atualização do estado de autenticação do usuário e trazer os dados de perfil e salvar para um estado global.

## Arquivos Main

**ContextStateConfig.js:** Ajuda a facilitar o debug, principalmente quando temos muitos componentes.

**routes.js:** Contém todas as rotas lógicas da aplicação, temos autenticação silenciosa também

**App.js:** Nosso componente raiz, nos iremos simplesmente importar o componente`ContextStateConfig.js` aqui.

**index.js:** Simplesmente renderiza o nosso componente raiz `App.js`
