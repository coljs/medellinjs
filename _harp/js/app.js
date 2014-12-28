$(function () {
  var source = $('#events-template').html();
  var events = $('#eventos');

  $.get('/events.json').done(function (data) {
  	data[0].active=true;

  	var events_to_show= [];
  	var title_to_show ='Próximos <strong class="color-primary">eventos</strong>';

  	if(data[0].status==='upcoming'){
  		for (var i = 0; i < data.length; i++) {
  			if(data[i].status === 'upcoming'){
  				events_to_show.push(data[i]);
  			}
  		}
  	}
  	else{
  		title_to_show ='Últimos <strong class="color-primary">eventos</strong>';
  		events_to_show = data;
  	}

    var template = Handlebars.compile(source);
    events.html(template({ title: title_to_show, events: events_to_show }));
  });
});
