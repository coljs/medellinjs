# mde-js-site
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
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

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/733877?v=4" width="100px;"/><br /><sub><b>Julian Duque</b></sub>](http://about.me/julianduque)<br />[💻](https://github.com/coljs/medellinjs/commits?author=julianduque "Code") [📋](#eventOrganizing-julianduque "Event Organizing") [📢](#talk-julianduque "Talks") [👀](#review-julianduque "Reviewed Pull Requests") [📝](#blog-julianduque "Blogposts") | [<img src="https://avatars1.githubusercontent.com/u/1189785?v=4" width="100px;"/><br /><sub><b>Adrián Estrada</b></sub>](https://github.com/edsadr)<br />[💻](https://github.com/coljs/medellinjs/commits?author=edsadr "Code") [📋](#eventOrganizing-edsadr "Event Organizing") [📢](#talk-edsadr "Talks") [👀](#review-edsadr "Reviewed Pull Requests") [📝](#blog-edsadr "Blogposts") | [<img src="https://avatars3.githubusercontent.com/u/1482473?v=4" width="100px;"/><br /><sub><b>Alex Ramirez</b></sub>](http://twitter.com/RamirezAlex_)<br />[📋](#eventOrganizing-RamirezAlex "Event Organizing") [📢](#talk-RamirezAlex "Talks") | [<img src="https://avatars2.githubusercontent.com/u/3019827?v=4" width="100px;"/><br /><sub><b>CodeMaxter</b></sub>](https://github.com/CodeMaxter)<br />[📋](#eventOrganizing-CodeMaxter "Event Organizing") [📢](#talk-CodeMaxter "Talks") | [<img src="https://avatars0.githubusercontent.com/u/1205255?v=4" width="100px;"/><br /><sub><b>Jesse cogollo</b></sub>](http://jessecogollo.me/)<br />[📋](#eventOrganizing-jessecogollo "Event Organizing") [💻](https://github.com/coljs/medellinjs/commits?author=jessecogollo "Code") [📖](https://github.com/coljs/medellinjs/commits?author=jessecogollo "Documentation") [💵](#financial-jessecogollo "Financial") [👀](#review-jessecogollo "Reviewed Pull Requests") [📢](#talk-jessecogollo "Talks") | [<img src="https://avatars1.githubusercontent.com/u/1481964?v=4" width="100px;"/><br /><sub><b>Khriztian Moreno</b></sub>](http://khriztianmoreno.com/)<br />[💻](https://github.com/coljs/medellinjs/commits?author=khriztianmoreno "Code") [📖](https://github.com/coljs/medellinjs/commits?author=khriztianmoreno "Documentation") [👀](#review-khriztianmoreno "Reviewed Pull Requests") [📢](#talk-khriztianmoreno "Talks") [🐛](https://github.com/coljs/medellinjs/issues?q=author%3Akhriztianmoreno "Bug reports") [🎨](#design-khriztianmoreno "Design") | [<img src="https://avatars2.githubusercontent.com/u/14205513?v=4" width="100px;"/><br /><sub><b>Maria Fernanda Serna Arboleda</b></sub>](http://mafesernaarboleda.co/)<br />[📋](#eventOrganizing-mafesernaarboleda "Event Organizing") [📢](#talk-mafesernaarboleda "Talks") [🔍](#fundingFinding-mafesernaarboleda "Funding Finding") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/2567952?v=4" width="100px;"/><br /><sub><b>Jeny Alejandra Mazo</b></sub>](https://github.com/JenyMzo)<br />[💻](https://github.com/coljs/medellinjs/commits?author=JenyMzo "Code") [🎨](#design-JenyMzo "Design") [📋](#eventOrganizing-JenyMzo "Event Organizing") [💵](#financial-JenyMzo "Financial") [📢](#talk-JenyMzo "Talks") | [<img src="https://avatars3.githubusercontent.com/u/9942486?v=4" width="100px;"/><br /><sub><b>Frank Alejo Betancur</b></sub>](https://github.com/Krank2me)<br />[📋](#eventOrganizing-Krank2me "Event Organizing") [📢](#talk-Krank2me "Talks") | [<img src="https://avatars1.githubusercontent.com/u/545352?v=4" width="100px;"/><br /><sub><b>Ely Alvarado</b></sub>](https://github.com/elyalvarado)<br />[💻](https://github.com/coljs/medellinjs/commits?author=elyalvarado "Code") | [<img src="https://avatars2.githubusercontent.com/u/6346032?v=4" width="100px;"/><br /><sub><b>Alejandro Pérez</b></sub>](https://www.galej.net)<br />[💻](https://github.com/coljs/medellinjs/commits?author=alejandr0pg "Code") | [<img src="https://avatars0.githubusercontent.com/u/9753149?v=4" width="100px;"/><br /><sub><b>Iva Villa</b></sub>](https://github.com/IvanVilla1585)<br />[💻](https://github.com/coljs/medellinjs/commits?author=IvanVilla1585 "Code") | [<img src="https://avatars0.githubusercontent.com/u/6179522?v=4" width="100px;"/><br /><sub><b>Juan Pablo Romero Mendoza</b></sub>](https://twitter.com/JuanpRM)<br />[💻](https://github.com/coljs/medellinjs/commits?author=Addin "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
