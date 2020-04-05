# mde-js-site
[![All Contributors](https://img.shields.io/badge/all_contributors-45-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.org/coljs/medellinjs.svg?branch=master)](https://travis-ci.org/coljs/medellinjs)
[![dependencies Status](https://david-dm.org/coljs/medellinjs/status.svg)](https://david-dm.org/coljs/medellinjs)
[![devDependencies Status](https://david-dm.org/coljs/medellinjs/dev-status.svg)](https://david-dm.org/coljs/medellinjs?type=dev)


> MedellinJS Website powered by NuxtJS

## Build Setup

Check your Node version, this must be higher that 8+.

``` bash
$ node -v
#v8.11.1

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


## External API usage

### Meetups

This site uses the meetup.com API to pull the past and next events for the MedellinJS group. All requests to the API are JSONP request signed with an API Key, which is the only supported mode if you dont want to use OAuth (requires user approval), or reval your API key in the source code (which should only used be on server side apps).

The only endpoint hitted to pull the events is the [V3 Group events](https://www.meetup.com/meetup_api/docs/:urlname/events/#list) endpoint, which is used to pull both upcoming events and past events.

Signed requests can be generated from the [Meetup API Console](https://www.meetup.com/meetup_api/console/) and can only be used for the specific resource involved. Because the signed requests carry the identity of the user that generated them, its recommended to use them only for read-only requests without side effects (GET).

JSONP needs to be used because the meetup API only supports CORS headers on requests that use OAuth authentication. [See github issue](https://github.com/meetup/api/issues/130).

For further information about the meetup API please check the [documentation](https://www.meetup.com/meetup_api/).

## Contributors

### Add new contritutor

Use `npm run contributors:add <username> contribution1, contribution2` to add new contributors to our project. They will be added to your configuration file, and the contributors file will be updated just as if you used the generate command.

```bash
# Add new contributor <username>, who made a contribution of type <contribution>
npm run contributors:add <username> <contribution>
# Example:
npm run contributors:add khriztianmoreno code,doc
```

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/733877?v=4" width="100px;"/><br /><sub><b>Julian Duque</b></sub>](http://about.me/julianduque)<br />[💻](https://github.com/coljs/medellinjs/commits?author=julianduque "Code") [📋](#eventOrganizing-julianduque "Event Organizing") [📢](#talk-julianduque "Talks") [👀](#review-julianduque "Reviewed Pull Requests") [📝](#blog-julianduque "Blogposts") | [<img src="https://avatars1.githubusercontent.com/u/1189785?v=4" width="100px;"/><br /><sub><b>Adrián Estrada</b></sub>](https://github.com/edsadr)<br />[💻](https://github.com/coljs/medellinjs/commits?author=edsadr "Code") [📋](#eventOrganizing-edsadr "Event Organizing") [📢](#talk-edsadr "Talks") [👀](#review-edsadr "Reviewed Pull Requests") [📝](#blog-edsadr "Blogposts") | [<img src="https://avatars3.githubusercontent.com/u/1482473?v=4" width="100px;"/><br /><sub><b>Alex Ramirez</b></sub>](http://twitter.com/RamirezAlex_)<br />[📋](#eventOrganizing-RamirezAlex "Event Organizing") [📢](#talk-RamirezAlex "Talks") | [<img src="https://avatars2.githubusercontent.com/u/3019827?v=4" width="100px;"/><br /><sub><b>CodeMaxter</b></sub>](https://github.com/CodeMaxter)<br />[📋](#eventOrganizing-CodeMaxter "Event Organizing") [📢](#talk-CodeMaxter "Talks") | [<img src="https://avatars0.githubusercontent.com/u/1205255?v=4" width="100px;"/><br /><sub><b>Jesse cogollo</b></sub>](http://jessecogollo.me/)<br />[📋](#eventOrganizing-jessecogollo "Event Organizing") [💻](https://github.com/coljs/medellinjs/commits?author=jessecogollo "Code") [📖](https://github.com/coljs/medellinjs/commits?author=jessecogollo "Documentation") [💵](#financial-jessecogollo "Financial") [👀](#review-jessecogollo "Reviewed Pull Requests") [📢](#talk-jessecogollo "Talks") | [<img src="https://avatars1.githubusercontent.com/u/1481964?v=4" width="100px;"/><br /><sub><b>Khriztian Moreno</b></sub>](http://khriztianmoreno.com/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=khriztianmoreno "Code") [📖](https://github.com/coljs/medellinjs/commits?author=khriztianmoreno "Documentation") [👀](#review-khriztianmoreno "Reviewed Pull Requests") [📢](#talk-khriztianmoreno "Talks") [🐛](https://github.com/coljs/medellinjs/issues?q=author%3Akhriztianmoreno "Bug reports") [🎨](#design-khriztianmoreno "Design") | [<img src="https://avatars2.githubusercontent.com/u/14205513?v=4" width="100px;"/><br /><sub><b>Maria Fernanda Serna Arboleda</b></sub>](http://mafesernaarboleda.co/)<br />[📋](#eventOrganizing-mafesernaarboleda "Event Organizing") [📢](#talk-mafesernaarboleda "Talks") [🔍](#fundingFinding-mafesernaarboleda "Funding Finding") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/2567952?v=4" width="100px;"/><br /><sub><b>Jeny Alejandra Mazo</b></sub>](https://github.com/JenyMzo)<br />[💻](https://github.com/coljs/medellinjs/commits?author=JenyMzo "Code") [🎨](#design-JenyMzo "Design") [📋](#eventOrganizing-JenyMzo "Event Organizing") [💵](#financial-JenyMzo "Financial") [📢](#talk-JenyMzo "Talks") | [<img src="https://avatars3.githubusercontent.com/u/9942486?v=4" width="100px;"/><br /><sub><b>Frank Alejo Betancur</b></sub>](https://github.com/Krank2me)<br />[📋](#eventOrganizing-Krank2me "Event Organizing") [📢](#talk-Krank2me "Talks") [💻](https://github.com/coljs/medellinjs/commits?author=Krank2me "Code") | [<img src="https://avatars1.githubusercontent.com/u/545352?v=4" width="100px;"/><br /><sub><b>Ely Alvarado</b></sub>](https://github.com/elyalvarado)<br />[💻](https://github.com/coljs/medellinjs/commits?author=elyalvarado "Code") | [<img src="https://avatars2.githubusercontent.com/u/6346032?v=4" width="100px;"/><br /><sub><b>Alejandro Pérez</b></sub>](https://www.galej.net)<br />[💻](https://github.com/coljs/medellinjs/commits?author=alejandr0pg "Code") | [<img src="https://avatars0.githubusercontent.com/u/9753149?v=4" width="100px;"/><br /><sub><b>Iva Villa</b></sub>](https://github.com/IvanVilla1585)<br />[💻](https://github.com/coljs/medellinjs/commits?author=IvanVilla1585 "Code") | [<img src="https://avatars0.githubusercontent.com/u/6179522?v=4" width="100px;"/><br /><sub><b>Juan Pablo Romero Mendoza</b></sub>](https://twitter.com/JuanpRM)<br />[💻](https://github.com/coljs/medellinjs/commits?author=Addin "Code") | [<img src="https://avatars0.githubusercontent.com/u/15912958?v=4" width="100px;"/><br /><sub><b>Juan David Maldonado Gómez</b></sub>](https://github.com/jdmaldonado)<br />[💻](https://github.com/coljs/medellinjs/commits?author=jdmaldonado "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/2999604?v=4" width="100px;"/><br /><sub><b>David Sánchez</b></sub>](https://d4vsanchez.dev)<br />[💻](https://github.com/coljs/medellinjs/commits?author=d4vsanchez "Code") | [<img src="https://avatars0.githubusercontent.com/u/1002461?v=4" width="100px;"/><br /><sub><b>Fernando Montoya</b></sub>](https://montogeek.com)<br />[💻](https://github.com/coljs/medellinjs/commits?author=montogeek "Code") | [<img src="https://avatars2.githubusercontent.com/u/16061815?v=4" width="100px;"/><br /><sub><b>Maria Camila Gomez Restrepo</b></sub>](http://www.camigomez.me/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=camigomezdev "Code") | [<img src="https://avatars2.githubusercontent.com/u/10585946?v=4" width="100px;"/><br /><sub><b>Manu Castrillon</b></sub>](https://github.com/ManuCastrillonM)<br />[💻](https://github.com/coljs/medellinjs/commits?author=ManuCastrillonM "Code") | [<img src="https://avatars1.githubusercontent.com/u/421398?v=4" width="100px;"/><br /><sub><b>Daniel</b></sub>](http://crowdswap.com)<br />[💻](https://github.com/coljs/medellinjs/commits?author=ErunamoJAZZ "Code") | [<img src="https://avatars0.githubusercontent.com/u/25666614?v=4" width="100px;"/><br /><sub><b>Cristian Mosquera</b></sub>](http://www.cristianmosquera.com)<br />[💻](https://github.com/coljs/medellinjs/commits?author=CMOW5 "Code") | [<img src="https://avatars3.githubusercontent.com/u/11249129?v=4" width="100px;"/><br /><sub><b>Catalina Meneses</b></sub>](https://github.com/kathcode)<br />[💻](https://github.com/coljs/medellinjs/commits?author=kathcode "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/227916?v=4" width="100px;"/><br /><sub><b>Esteban Beltran</b></sub>](https://github.com/academo)<br />[💻](https://github.com/coljs/medellinjs/commits?author=academo "Code") | [<img src="https://avatars0.githubusercontent.com/u/17830182?v=4" width="100px;"/><br /><sub><b>Mauro Arango</b></sub>](http://www.vendevirtual.com)<br />[💻](https://github.com/coljs/medellinjs/commits?author=mauroarango "Code") | [<img src="https://avatars0.githubusercontent.com/u/14265560?v=4" width="100px;"/><br /><sub><b>svargaslondono</b></sub>](https://github.com/svargaslondono)<br />[💻](https://github.com/coljs/medellinjs/commits?author=svargaslondono "Code") | [<img src="https://avatars2.githubusercontent.com/u/7244087?v=4" width="100px;"/><br /><sub><b>Erick Garcia</b></sub>](https://github.com/erick2014)<br />[💻](https://github.com/coljs/medellinjs/commits?author=erick2014 "Code") | [<img src="https://avatars2.githubusercontent.com/u/14320037?v=4" width="100px;"/><br /><sub><b>yhorman perez</b></sub>](https://github.com/yhormanp)<br />[💻](https://github.com/coljs/medellinjs/commits?author=yhormanp "Code") | [<img src="https://avatars0.githubusercontent.com/u/315504?v=4" width="100px;"/><br /><sub><b>Andrés Bedoya</b></sub>](https://gecken.co/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=Angelfire "Code") | [<img src="https://avatars2.githubusercontent.com/u/23508830?v=4" width="100px;"/><br /><sub><b>Camilo Ocampo</b></sub>](http://linkedin.com/in/camiloog/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=camiloog "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/16230284?v=4" width="100px;"/><br /><sub><b>Carlos Hurtado</b></sub>](https://github.com/Greshot)<br />[💻](https://github.com/coljs/medellinjs/commits?author=Greshot "Code") | [<img src="https://avatars0.githubusercontent.com/u/12085981?v=4" width="100px;"/><br /><sub><b>Carlos Jiménez</b></sub>](https://github.com/cojimene)<br />[💻](https://github.com/coljs/medellinjs/commits?author=cojimene "Code") | [<img src="https://avatars2.githubusercontent.com/u/36075313?v=4" width="100px;"/><br /><sub><b>erickgarciagit</b></sub>](https://github.com/michel1024)<br />[💻](https://github.com/coljs/medellinjs/commits?author=michel1024 "Code") | [<img src="https://avatars3.githubusercontent.com/u/2154886?v=4" width="100px;"/><br /><sub><b>Juan David Nicholls Cardona</b></sub>](http://nicholls.co/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=jdnichollsc "Code") | [<img src="https://avatars1.githubusercontent.com/u/1382824?v=4" width="100px;"/><br /><sub><b>Pablo Velásquez</b></sub>](https://github.com/pablovem)<br />[💻](https://github.com/coljs/medellinjs/commits?author=pablovem "Code") | [<img src="https://avatars3.githubusercontent.com/u/5376762?v=4" width="100px;"/><br /><sub><b>Santiago Blanco</b></sub>](https://github.com/santiblanko)<br />[💻](https://github.com/coljs/medellinjs/commits?author=santiblanko "Code") | [<img src="https://avatars2.githubusercontent.com/u/21073419?v=4" width="100px;"/><br /><sub><b>Alejandro Garcia Serna</b></sub>](https://github.com/alejogs4)<br />[💻](https://github.com/coljs/medellinjs/commits?author=alejogs4 "Code") |
| [<img src="https://avatars3.githubusercontent.com/u/5000478?v=4" width="100px;"/><br /><sub><b>JC Casas</b></sub>](https://github.com/jaceee)<br />[💻](https://github.com/coljs/medellinjs/commits?author=jaceee "Code") | [<img src="https://avatars3.githubusercontent.com/u/41841776?v=4" width="100px;"/><br /><sub><b>silvermiguel96</b></sub>](https://github.com/silvermiguel96)<br />[💻](https://github.com/coljs/medellinjs/commits?author=silvermiguel96 "Code") | [<img src="https://avatars3.githubusercontent.com/u/7406773?v=4" width="100px;"/><br /><sub><b>Alexis (GH)</b></sub>](https://github.com/alexeimun)<br />[💻](https://github.com/coljs/medellinjs/commits?author=alexeimun "Code") | [<img src="https://avatars0.githubusercontent.com/u/2459170?v=4" width="100px;"/><br /><sub><b>Cristian Martinez</b></sub>](https://cristianmartinez.co)<br />[💻](https://github.com/coljs/medellinjs/commits?author=cristianmartinez "Code") | [<img src="https://avatars3.githubusercontent.com/u/23043466?v=4" width="100px;"/><br /><sub><b>Estefanny Seguro</b></sub>](https://github.com/eseguro)<br />[💻](https://github.com/coljs/medellinjs/commits?author=eseguro "Code") | [<img src="https://avatars2.githubusercontent.com/u/16828751?v=4" width="100px;"/><br /><sub><b>gabynr</b></sub>](https://github.com/gabynr)<br />[💻](https://github.com/coljs/medellinjs/commits?author=gabynr "Code") | [<img src="https://avatars0.githubusercontent.com/u/1114740?v=4" width="100px;"/><br /><sub><b>Jose Miguel</b></sub>](https://brodevhood.firebaseapp.com/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=josepplloo "Code") |
| [<img src="https://avatars1.githubusercontent.com/u/6528566?v=4" width="100px;"/><br /><sub><b>Mateo Calle</b></sub>](https://github.com/Mathius17)<br />[💻](https://github.com/coljs/medellinjs/commits?author=Mathius17 "Code") | [<img src="https://avatars0.githubusercontent.com/u/25255489?v=4" width="100px;"/><br /><sub><b>pquiceno</b></sub>](https://github.com/pquiceno)<br />[💻](https://github.com/coljs/medellinjs/commits?author=pquiceno "Code") | [<img src="https://avatars2.githubusercontent.com/u/1393135?v=4" width="100px;"/><br /><sub><b>Romel Pérez</b></sub>](https://RomelPerez.com)<br />[💻](https://github.com/coljs/medellinjs/commits?author=romelperez "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
