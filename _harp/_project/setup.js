var fs      = require('fs'),
    qs      = require('querystring'),
    path    = require('path'),
    util    = require('util'),
    async   = require('async'),
    request = require('request'),
    moment  = require('moment'),
    config  = require('./config.json');

var url = 'https://api.meetup.com/2/events?';
var params = {
  sign: true,
  group_urlname: 'medellinjs',
  page: 2,
  key: config.meetup.apiKey
};

moment.lang("es");
url += qs.stringify(params);
var metaFile = path.join(__dirname, '../_data.json');
var meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
meta.events = [];

request(url, function (err, res, body) {
  if (err) return console.log(err);

  var meetupEvents = JSON.parse(body).results;
  for(var i = 0; i < meetupEvents.length; i++) {
    var e = meetupEvents[i];

    var event = {
      id: e.id,
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

    meta.events.push(event);
  }

  fs.writeFileSync(metaFile, JSON.stringify(meta, null, 2));
});
