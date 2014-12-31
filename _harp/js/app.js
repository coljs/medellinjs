$(function() {
  var source = $('#events-template').html();
  var events = $('#eventos');

  $.get('/events.json').done(function(data) {
    data[0].active = true;
    var template = Handlebars.compile(source);
    events.html(template({
      events: data
    }));
  });

  Handlebars.registerHelper('upcoming', function(svalue, options) {
    if (arguments.length < 2){
      throw new Error("Status is missing");
    }

    return (svalue !== 'upcoming') ? options.inverse(this) : options.fn(this);
  });
});