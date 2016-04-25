'use strict';

var qs      = require('querystring'),
    request = require('request'),
    moment  = require('moment'),
    config  = require('./config');

module.exports = function (callback) {
  var url = 'https://api.meetup.com/2/events?';
  var params = {
    sign: true,
    group_urlname: 'medellinjs',
    page: 4,
    status: 'upcoming,past',
    desc: true,
    key: config.meetup.apiKey
  };

  moment.locale('es');
  url += qs.stringify(params);

  request(url, function (err, res, body) {
    if (err) return callback(err);

    var meetupEvents = JSON.parse(body).results || [];
    var events = meetupEvents.map(function (e) {
       var event = {
        id: e.id,
        title: e.name,
        description: e.description,
        link: e.event_url,
        attending: e.yes_rsvp_count,
        date: moment(e.time).format('LLLL'),
        venue: {
          name: e.venue.name,
          address: e.venue.address_1
        },
        status: e.status
      };

      return event;
    });

    callback(null, events);
  });
};
