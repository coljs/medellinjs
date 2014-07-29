$(function () {
  var source = $('#events-template').html();
  var events = $('#eventos');

  $.get('/events.json').done(function (data) {
    var template = Handlebars.compile(source);
    events.html(template({ events: data }));
  });
});
