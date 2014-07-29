 var qs      = require('querystring'),
     path    = require('path'),
     util    = require('util'),
     request = require('request'),
     moment  = require('moment'),
     config  = require('./config.json');

module.exports = function (callback) {
  var url = 'https://api.meetup.com/2/events?';
  var params = {
    sign: true,
    group_urlname: 'medellinjs',
    page: 2,
    key: config.meetup.apiKey
  };

  moment.lang("es");
  url += qs.stringify(params);

  var events = [];
  request(url, function (err, res, body) {
    if (err) return callback(err);

    var meetupEvents = JSON.parse(body).results;
    var cols = 12 / meetupEvents.length;
    for(var i = 0; i < meetupEvents.length; i++) {
      var e = meetupEvents[i];

      var event = {
        id: e.id,
        cols: cols - 1,
        title: e.name,
        description: e.description,
        link: e.event_url,
        attending: e.yes_rsvp_count,
        date: moment(e.time).format("LLLL"),
        venue: {
          name: e.venue.name,
          address: e.venue.address_1
        },
        status: e.status
      };

      events.push(event);
    }

    callback(null, events);
  });
}
