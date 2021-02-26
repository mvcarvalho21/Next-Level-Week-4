# Next Level Week 4 - Trilha React

## Dia 22/02/2021 - Fundamentos do React

Na primeira webnair da NLW 4 com o Diego Fernandes, fui apresentado ao React de uma forma diferente na qual vinha estudando. As ideias pareceram mais leves, a didática ajuda bastante, mas o principal ponto é o foco da aplicação na qual está sendo realizada. 

* Comecei a utilizar Yarn, o que agiliza o projeto se comparado ao NPM;
* Fui apresentado também ao typescript;
* Aprendi a organizar melhor as aplicações do projeto, principalmente no que diz respeito ao CSS.
* Estou aprendendo a melhorar o Readme com as TAG's reais. Fica muito mais profissional.

### Ainda preciso aprender melhor os conceitos de rem, não ficaram muito claros.
### Preciso dar mais foco no aprendizado de typescript, pois isso vai ajudar muito nas minhas aplicações.

Ferramentas utilizadas:

* Figma - Layouts
* Whimsical - Fluxogramas

---

## Dia 23/02/2021 - Desvendando o Next.JS

No segundo dia da NLW 4 aprendi os conceitos do Next.JS, que é utilizado para substituir o create react-app do react, pois o react é totalmente feito a base de javascript. Se o navegador não tiver o javascript ativado, a aplicação não funciona. Isso dificulta os buscadores de procurar o site. Não é possivel otimizar o sistema para os buscadores e o next.js resolve esse problema.

*Com o Next.JS, o cliente faz uma requisição, o Next.JS busca essa requisição no back-end, que por sua vez devolve a requisão para o Next.Js. Esse irá devolver ao front-end, no caso o React, ao inves de um JSON um HTML e um CSS.*

* SPA - Single Page Application - React tradicional (com possíveis problemas ao desabilitar o JS)
* SSR - Server-side Rendering - Solução para o problema do react
* SSG - Static-side Generation - Solução para uma página estática que resolve o problema de várias requisições iguais

**Para instalar typescript no projeto:**
```javascript
yarn add typescript @types/react @types/react-dom @types/node -D
```

**Para iniciar o servidor em projetos Next.JS:**
```javascript
yarn dev
```

* Pasta _app.tsx - local onde ficam armazenadas as coisas que se repetem durante todo o projeto (ex: cabeçalho, rodapé, fontes...)
* Pasta _document.tsx - Pasta que deve ser criada para inserir informações que por padrão ficam na pasta _app.tsx, porém dessa forma o document carrega o arquivo uma unica vez para o usuário, fica tudo o que é estático (Essa pasta deve ser copiada de qualquer projeto, pois as informações são padrões).

Nota: durante o projeto, no componente Countdown, foi utilizada a sintaxe 
```javascript 
const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
```

Nessa sintaxe, o split serve para dividir a String em duas partes e o padStart significa que quando não houver 2 dígitos, ele coloca um zero no primeiro dígito.

### Estudar mais CSS - No Discovery da RocketSeat .
### Dar um foco maior em flex - porque sempre 1?

---

## Dia 24/02/2021 - Contexto e Componentes

Terceiro webnair da NLW 4 com o Diego Fernandes: 

* Noções de Timeout com Javascript:

```javascript
let countdownTimeout: NodeJS.Timeout;
```

*Flex: 1 = Ocupa a altura máxima da div*

* Reforcei os conceitos de Context API;
* Aprendi calculos utilizando a biblioteca Math (random, floor, pow, round);
* Criei um contexto para a aplicação
* Utilizei a interpolação com mais frequência
* Integrei um arquivo JSON a aplicação para utilização de dados

### Melhorar os conceitos de Context API e menos Redux
### Entender melhor os conceitos de Provider, Interface e Children

---

## Dia 25/02/2021 - Melhorando a usabilidade da aplicação

Quarto webnair da NLW 4 com o Diego Fernandes: 

* useEffect com array de dependências vazio: irá executar a função uma única vez durante a execução da aplicação

```javascript
useEffect(() => {}, [])
```
* Permissão para notificações:

```javascript
useEffect(() => {
    Notification.requestPermission();
  }, [])
```

* Aprendi conceitos de alert, customização e inclusão de sons;
* Novas informações sobre o useEffect
* Nova aplicação do Context API

### Estudar mais afundo CSS - Ainda tenho muitos conceitos a digerir

---

## Dia 26/02/2021 - Próximo Nível com React

Quinto webnair da NLW 4 com o Diego Fernandes: 

* Cookies: Serve para armazenar informações no navegador. Idela para Next.JS. Para incluir a biblioteca cookie:

```javascript
yarn add js-cookie
```
* Algumas bibliotecas JS não mostram as typagens em projetos typescript. Isso é indicado pelos "..." na importação. Nesses casos, deve-se adicionar pacotes para as dependencias utilizadas. No nosso exemplo, deve-se instalar:

```javascript
yarn add @types/js-cookie -D
```

* Comando para armazenar informações nos cookies:

```javascript
useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);
```

* Para as informações serem mantidas na página após atualização da mesma, deve-se inserir o comando abaixo na index da pasta pages.

```javascript
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
```

* Aprendi a utilizar os cookies do navegador para salvar informações
* ...rest pega todo o restante da interface que eu quero, sem precisar duplicar
* Nova aplicação do Context API
* Utilização de Modal
* Deploy da aplicação especifico para front-end

Ferramentas para Deploy:

* Netlify
* Vercel

*Instalar a Vercel CLI: npm i -g vercel*

### Novas ideias:
*Adaptar o app para inserir style componentes e treinar com os cursos da Alura, tentar transformar em um App Mobile, tentar inserir uma tela de Login(integrando com o back-end) - considerar alguem do flowtalents para interagir*

---