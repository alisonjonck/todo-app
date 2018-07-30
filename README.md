# Softexpert Case Study

## Extenda uma aplicação de TodoList simples

Olá, esta é uma pequena aplicação de todo list, que você deverá extender e melhorar.
Na SoftExpert nós tentamos cuidar bastante das nossas escolhas e sempre pensamos no valor que 
o usuário irá receber.

Durante este case study você será perguntado à fazer algmas melhorias em toda a aplicação.

## Requerimentos

Por favor, tenha certeza que você tem instalado no seu ambiente o Node.js. 
Esta aplicação foi feita utilizando webpack, e sem estas duas ferramentas não há como prosseguir:

- Node.js (recommended: 4.x)
- npm (recommended: 2.x or 3.x)

## Setup

Uma vez que você garantiu a instalação das ferramentas acima, por favor instale os 
módulos requeridos da aplicação, usando o comando:


```sh
npm install
```

Para criar o build da aplicação, use este comando:

```sh
npm run build
```

e para continuar recriando o build enquanto trabalha, use:

```sh
npm start
```

Assim que você tiver o bundle construído, você pode abrir o `index.html`  no seu browser e 
verificar se a aplicação está funcionando corretamente.

## Como habilitar um teste?

Como esta aplicação é para ser supostamente um case study e não uma aplicação real,
você pode habilitar testes específicos, adicionado "#testName" na URL.

Por exemplo, para habilitar o teste "renderBottom", você abrirá o arquivo `index.html` 
e adicionará no final a hash "#renderBottom".

Example URL:
```
file:///C:/Users/user/Desktop/TodoList/index.html#renderBottom
```
Note que agora o campo input está renderizado abaixo da lista.

## Sobre as tarefas

Abaixo você irá encontrar uma lista de tarefas que precisam ser resolvidas para este case study.

Se você recebeu instruções para fazer apenas alguma das tarefas, por favor faça isso.
Mas se estiver interessado em fazer mais ou alguma que lhe interessou, por favor sinta-se
à vontade para fazê-la, e isso é interessante para nós também. Mas não se sinta obrigado a fazer
as tarefas que não foram solicitadas à você. De imediato pedimos apenas que você resolva as que
requisitamos previamos à você (se requisitamos).

Geralmente você pode escolher livremente quais tarefas você vai fazer. Isso é possível quando não
enviamos junto ao testes quais você deve fazer. Se isso acontecer, sinta-se livre para escolher.
Caso seja esta sua situação não se preocupe em fazer todas, mas sim as que você acha que pode fazer.

Algumas tarefas requerem um nível de conhecimento à mais, mas geralmente não requerem que todos
saibam resolvê-las, então não se preocupe caso você não faça alguma das tarefas.

Nós escolhemos as tarefas cuidadosamente e achamos que será divertido resolvê-las.

Para deixar as coisas um pouco mais faceis para nós, você poderia commitar o estado
da sua aplicação no GIT usando o ID de cada tarefa sanada, e nos enviar o repositório no
Github para nós revisarmos. Caso contrário, por favor nos envie a lista de tarefas que você
finalizou para que possamos revisar.

Se você iniciar uma tarefa, mas achar que não irá conseguir finalizá-la, é uma boa ideia
manter as alterações que fez, e explicar o motivo de não terminá-la ou o que atrapalhou você.

## As tarefas

### WEB-101: Suportar a tecla ENTER no input para adicionar um TODO item

Nós gostaríamos de poder adicionar um todo item, usando a tecla `enter`.

### WEB-102: Adicionar um todo item causa perca de foco no text field

Como nós habilitamos a tecla `enter` para adicionar um todo item, nossos usuários
notaram que ao adicionar, o text field perde o foco e eles precisam clicar manualmente no input
para voltar o foco para ele.

Por favor, garanta que ao adicionar um todo item, o foco irá voltar (ou manter-se) ao text field.

### WEB-103: Adicione um filtro de status como TESTE

Como um usuário, eu quero ter uma opção para esconder itens que não me interessam
baseado nos seus status.

Essa feature deve ser implementada como um teste, similar ao "renderBottom", 
e deve se chamar "filter".

Por favor, implemente o filtro abaixo da lista como radio buttons, contendo estas três opções:

- Mostrar todos (habilitado por padrão)
- Somente abertos
- Somente fechados

Estes radio buttons devem ser mutuamente exclusivos, apenas um deles pode ser selecionado.

Ex.: se "Somente abertos" estiver selecionados, apenas os todo items que tiverem o `done` 
setado como `false` devem ser mostrados. 

### WEB-104: Adicione um TESTE para mudar a posição do filtro

Descobrimos que para usuários que tem o teste "renderBottom" habilitado, ficou difícil
utilizar o filtro. Nossos especialistas UX entendem que quando os dois testes estão
habilitados `#renderBottom#filter`, a parte de baixo da interface fica sobrecarregada.

Nós gostaríamos de testar a posição do filtro no topo da interface, quando o input
está posicionado na posição de baixo na aplicação ("renderBottom").

Este teste, pode se chamar "filterTop" e só pode ser ativado quando os testes "filter" e "renderBottom"
estão ativos também. A hash da URL deve estar mais ou menos assim "index.html#filter#renderBottom#filterTop".

### WEB-110: Melhore a aparência visual da aplicação

Nosso departamento de design acredita que o design atual não é o melhor e pode ser melhorado. 

Por favor, melhore esta experiência para o usuário. Sinta-se livre para usar seu próprio design,
ou para implementar um já existente. Se você não consegue decidir em qual utilizar, nossa proposta
seria utilizar [este aqui](https://dribbble.com/shots/2084038-Just-Do).

Sinta-se livre também para adicionar um pré-processador CSS como Sass, PostCSS ou 
Less ao build do webpack para tornar sua vida um pouco mais fácil.
Usar CSS puro, também não é um problema. Faça como achar melhor.

### WEB-120: Salve a lista de todo items

Nós gostaríamos agora, que a aplicação salvasse os todo items que o usuário adicionar.
Assim quando ele atualizar a página, sua lista estará intacta e não irá perder nada.

A decisão de qual tecnologia usar, é totalmente com você. É suficiente para nós que
a sua solução para isso funcione no Chrome e no Firefox.

Se desejar, utilizar alguma tecnologia no back para salvar, apenas nos informe como
iremos ligá-la para revisar e nos envies os fontes também.

### WEB-201: Extraia o CSS em um arquivo separado

Atualmente, o CSS da aplicação está incluído no `bundle.js`.
Entretanto, nossos usuários começaram a comentar sobre a aplicação estar
sem nenhum estilo quando inicia, e nós gostaríamos então de separar o CSS em outro arquivo.

Por favor, integre o plugin `extract-text-webpack-plugin` na configuração do webpack
e carregue o arquivo CSS separamente do bundle javascript.

### WEB-202: Otimize a geração do bundle

Atualmente nosso bundle gerado não está otimizado e está um pouco grande para uma 
aplicação pequena. Por favor, ajuste as configurações do webpack para que possamos
criar um bundle otimizado ao invés do bundle grande. Seria ideal se tanto Javascript
e o CSS fossem minificados.

### WEB-203: Substitua a lib/state.js

Acontece que nós não estamos imunes à "sindrome das libs não inventadas aqui", e 
pensamos que seria uma boa ideia reimplementar uma lib popular atualmente.
Mas achamos que agora não há boas razões pra manter essa lib já que a lib na qual
nós nos inspiramos está bem confiável. Dito isso, gostaríamos que a nossa lib/state.js
fosse substituida pela lib original que à influenciou.

A lib que nos influenciou foi o `Redux`. Por favor refatore o código atual
para que use `Redux` invés do código que fizemos nós mesmos.

### WEB-301: Otimize a renderização da view

Infelizmente alguns dos nossos usuários começaram a reclamar que a performance
da aplicação está ruim. Alguns deles disseram que adicionaram *mais mil* todo items
e que chegando neste grande número a aplicação começa a travar após adicionar mais 
todo items ou modificar algum estado.

Nosso time de performance identificou que este problema esta relacionado ao modo
como nós renderizamos a o HTML da aplicação. 

Por favor, substitua o `innerHTML` pela library React.js, que tem internamente o 
virtualDom para tratar de gargalos em manipulação do DOM.
Será necessário adicionar um plugin ao `Babel` para usar a sintaxe JSX. Claro que 
se você desejar, pode escrever o código em Javascript puro, entretanto recomendamos
que a sintaxe JSX seja usada.

React não é a única opção atualmente. Se você preferir usar outra biblioteca para resolver
este problema de performance, fique à vontade. Nós achamos realmente interessante
usar o React, pois esta é nossa stack atual. Se você decidir fazer isso, por favor escreva
uma boa explanação do porque você escolheu usar outra biblioteca.

### WEB-302: Compilação estática dos testes

Nós gostaríamos de poder decidir na compilação do  bundle, se o teste "filter"
deve ou não estar habilitado.

Por favor, crie um plugin babel que pode alterar estaticamente o código `isEnabled('filter')` por
`true` ou `false` baseado em alguma parte da configuração webpack (à sua escolha). 

Dica: Provavelmente você pode criar um webpack loader para isso.

### WEB-303: Melhore a experiência do desenvolvedor

Nós fomos informados que nossos desenvolvedores não estão sendo tão produtivos quanto
poderiam e precisam constantemente atualizar a página e esperar o webpack watcher acabar
para ver suas alterações. Nós acreditamos que usando o webpack dev server, eles poderiam
ser mais produtivos.

Por favor, ajuste todas as partes necessárias da aplicação para que seja possíbel 
utilizar o webpack-dev-server e idealmente com o hot reloading pelo menos para o CSS.