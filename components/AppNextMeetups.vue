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

          <div v-if="loading" class="col-sm-4 col-sm-offset-4">
            <div class="price-table text-center wow active animated fadeInUp" data-wow-delay="0" data-wow-duration="1.5s">
              <div class="price-heading">
                <h2 class="price-plan">Loading</h2>
              </div>
            </div>
          </div>

          <template v-else >
            <div class="col-sm-4" v-for="(meetup, index) in nextMeetups" :key="index">
              <a :href="meetup.link" target="new">
                <div class="price-table text-center wow animated fadeInUp" :data-wow-delay="0.5*index+'s'" data-wow-duration="1.5s">
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

          <div class="col-sm-8 col-sm-offset-2" v-if="!nextMeetups.length && !loading" >
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

export default {
  data () {
    return {
      loading: true,
      nextMeetups: []
    }
  },
  methods: {
    formatDate
  },
  mounted () {
    let self = this
    const nextMeetupsURL = 'https://api.meetup.com/MedellinJS/events?photo-host=public&page=20&sig_id=233024411&sig=4f25bc7667fd757ce3cda2aa99feacf3b8ce5fbd'
    jsonp(nextMeetupsURL, {}, function (err, data) {
      if (err) {
        console.error('Error fetching next meetups from MeetupAPI')
        self.loading = false
        return
      }

      self.loading = false
      self.nextMeetups = data.data
    })
  }
}
</script>
