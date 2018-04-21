# mde-js-site

> MedellinJS Website powered by NuxtJS

## Build Setup

``` bash
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
