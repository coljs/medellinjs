<template>
  <div id="next-meetups-area" class="section section-padding-extra section-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Próximos Eventos</h2>
            <p class="section-subtitle">Estos son los eventos que tenemos programados</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="price-tables">

          <div v-if="!finishedLoading(loaded)" class="col-sm-4 col-sm-offset-4">
            <div class="price-table text-center wow active animated fadeInUp" data-wow-delay="0" data-wow-duration="1.5s">
              <div class="price-heading">
                <h2 class="price-plan">Cargando</h2>
              </div>
            </div>
          </div>

          <template v-else >
            <div class="col-sm-4" v-for="(meetup, index) in pastMeetups" :key="meetup.id">
              <a :href="meetup.link" target="new">
                <div class="price-table text-center active wow animated fadeInUp" :data-wow-delay="0.5*index+'s'" data-wow-duration="1.5s">
                  <div class="price-heading">
                    <div class="price-plan">{{meetup.name}}</div>
                    <h3 class="plan-price">
                      <small class="price-cycle">{{formatDate(meetup.time)}} <span class="label label-danger">pasó</span></small>
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-4" v-for="(meetup, index) in nextMeetups" :key="meetup.id">
              <a :href="meetup.link" target="new">
                <div class="price-table text-center wow animated fadeInUp" :data-wow-delay="(0.5*pastMeetups.length+0.5*index)+'s'" data-wow-duration="1.5s">
                  <div class="price-heading">
                    <h2 class="price-plan">{{meetup.name}}</h2>
                    <h3 class="plan-price">
                      <small class="price-cycle">{{formatDate(meetup.time)}}</small>
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </template>

          <div class="col-sm-8 col-sm-offset-2" v-if="!nextMeetups.length && !pastMeetups.length && finishedLoading(loaded)" >
            <div class="price-table text-center wow animated fadeInUp" :data-wow-delay="0" data-wow-duration="1.5s">
              <div class="price-heading">
                <h3 class="plan-price">
                  <small class="price-cycle">No hay eventos programados</small>
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonp from 'jsonp'

const formatDate = (d) => {
  let dateObject = new Date(d)
  let locale = 'es-CO'
  let options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }

  return dateObject.toLocaleDateString(locale, options)
}

const finishedLoading = (loaded) => {
  return Object.keys(loaded).reduce((acc, loader) => loaded[loader] && acc, true)
}

export default {
  data () {
    return {
      nextMeetups: [],
      pastMeetups: [],
      loaded: {
        pastEvents: false,
        nextEvents: false
      }
    }
  },
  methods: {
    formatDate,
    finishedLoading
  },
  mounted () {
    let self = this
    const nextMeetupsURL = 'https://api.meetup.com/MedellinJS/events?photo-host=public&page=20&sig_id=233024411&sig=4f25bc7667fd757ce3cda2aa99feacf3b8ce5fbd'
    const pastMeetupsURL = 'https://api.meetup.com/MedellinJS/events?desc=true&photo-host=public&page=1&sig_id=233024411&status=past&sig=032b49e98bab5fc4368836d6f71e5b2c00fb3154'

    jsonp(nextMeetupsURL, {}, function (err, data) {
      if (err) {
        console.error('Error fetching next meetups from MeetupAPI')
        self.loaded.nextEvents = true
        return
      }

      self.loaded.nextEvents = true
      self.nextMeetups = data.data
    })

    jsonp(pastMeetupsURL, {}, function (err, data) {
      if (err) {
        console.error('Error fetching past meetups from MeetupAPI')
        self.loaded.pastEvents = true
        return
      }

      self.loaded.pastEvents = true
      self.pastMeetups = data.data
    })
  }
}
</script>
