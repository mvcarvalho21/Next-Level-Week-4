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

*Para instalar typescript no projeto: yarn add typescript @types/react @types/react-dom @types/node -D*
*Para iniciar o servidor em projetos Next.JS - yarn dev*

* Pasta _app.tsx - local onde ficam armazenadas as coisas que se repetem durante todo o projeto (ex: cabeçalho, rodapé, fontes...)
* Pasta _document.tsx - Pasta que deve ser criada para inserir informações que por padrão ficam na pasta _app.tsx, porém dessa forma o document carrega o arquivo uma unica vez para o usuário, fica tudo o que é estático (Essa pasta deve ser copiada de qualquer projeto, pois as informações são padrões).

Nota: durante o projeto, no componente Countdown, foi utilizada a sintaxe *const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');*
Nessa sintaxe, o split serve para dividir a String em duas partes e o padStart significa que quando não houver 2 dígitos, ele coloca um zero no primeiro dígito.

### Estudar mais CSS - No Discovery da RocketSeat .
### Dar um foco maior em flex (porque sempre 1?).
