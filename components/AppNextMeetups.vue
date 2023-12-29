<template>
  <div id="next-meetups-area" class="section section-padding-extra section-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <div class="section-heading">
            <h2 class="section-title">Próximos Eventos</h2>
            <p class="section-subtitle">
              Estos son los eventos que tenemos programados
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="meetup-tables">
          <div v-if="!finishedLoading(loaded)" class="col-sm-4 col-sm-offset-4">
            <div
              class="meetup-table text-center wow past animated fadeInUp"
              data-wow-delay="0"
              data-wow-duration="1.5s"
            >
              <div class="meetup-heading">
                <h1 class="meetup-event">Cargando</h1>
              </div>
            </div>
          </div>

          <template v-else>
            <div
              v-for="(meetup, index) in pastMeetups"
              :key="meetup.id"
              class="col-sm-4"
            >
              <a :href="meetup.link" target="new">
                <div
                  class="meetup-table text-center past wow animated fadeInUp"
                  :data-wow-delay="0.5 * index + 's'"
                  data-wow-duration="1.5s"
                >
                  <div class="meetup-heading">
                    <h2 class="meetup-event">{{ meetup.name }}</h2>
                    <h3 class="meetup-confirm"></h3>
                    <h3 class="event-meetup">
                      <div class="meetup-cycle">
                        {{ formatDate(meetup.time) }}
                      </div>
                    </h3>
                  </div>
                  <div class="ribbon-wrapper">
                    <div class="ribbon bottom-right red">pasó</div>
                  </div>
                </div>
              </a>
            </div>

            <div
              v-for="(meetup, index) in nextMeetups"
              :key="meetup.id"
              class="col-sm-4"
            >
              <a :href="meetup.link" target="new">
                <div
                  class="meetup-table text-center wow animated fadeInUp"
                  :data-wow-delay="0.5 * pastMeetups.length + 0.5 * index + 's'"
                  data-wow-duration="1.5s"
                >
                  <div class="meetup-heading">
                    <h2 class="meetup-event">{{ meetup.name }}</h2>
                    <h3 class="meetup-confirm">
                      click para confirmar asistencia
                    </h3>
                    <h3 class="event-meetup">
                      <div class="meetup-cycle">
                        {{ formatDate(meetup.time) }}
                      </div>
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </template>

          <div
            v-if="
              !nextMeetups.length &&
              !pastMeetups.length &&
              finishedLoading(loaded)
            "
            class="col-sm-8 col-sm-offset-2"
          >
            <div
              class="meetup-table text-center wow animated fadeInUp"
              :data-wow-delay="0"
              data-wow-duration="1.5s"
            >
              <div class="meetup-heading">
                <h3 class="event-meetup">
                  <small class="meetup-cycle">No hay eventos programados</small>
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
  const dateObject = new Date(d)
  const locale = 'es-CO'
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  return dateObject.toLocaleDateString(locale, options)
}

const finishedLoading = (loaded) => {
  return Object.keys(loaded).reduce(
    (acc, loader) => loaded[loader] && acc,
    true
  )
}

export default {
  data() {
    return {
      nextMeetups: [],
      pastMeetups: [],
      loaded: {
        pastEvents: false,
        nextEvents: false,
      },
    }
  },
  mounted() {
    const self = this
    const nextMeetupsURL =
      '//api.meetup.com/MedellinJS/events?photo-host=public&page=20&sig_id=233024411'
    const pastMeetupsURL =
      '//api.meetup.com/MedellinJS/events?desc=true&photo-host=public&page=1&sig_id=233024411&status=past'
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
  },
  methods: {
    formatDate,
    finishedLoading,
  },
}
</script>

<style scoped>
.meetup-tables {
  float: left;
  width: 100%;
  margin-bottom: -30px;
}

.meetup-table {
  float: left;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  position: relative;
}

.meetup-heading {
  background: #fff;
  border-radius: 4px;
  transition: all 0.3s ease;
  height: 100%;
}

.meetup-event {
  font-weight: 800;
  color: #1293d5;
  background-color: rgba(0, 0, 0, 0.11);
  margin: 0;
  padding: 33px 20px;
  height: 60%;
}

h2.meetup-event {
  text-transform: none;
  font-size: 2rem;
  line-height: 1.2;
  /* show an ellipsis (...) if the meetup title is too long */
  overflow: hidden;
  text-overflow: ellipsis;
}

.event-meetup {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  color: #1293d5;
  margin: 0;
  padding: 19px 20px;
  height: 25%;
}

.meetup-confirm {
  font-size: 1.1rem;
  color: #1293d5;
  background-color: rgba(0, 0, 0, 0.11);
  height: 10%;
  padding: 0rem 0.2rem;
  margin: 0rem;
}

.meetup-cycle {
  display: inline-block;
  vertical-align: baseline;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: lowercase;
}

.ribbon-wrapper {
  overflow: hidden;
  position: absolute;
  top: -2px;
  left: -2px;
  bottom: -2px;
  right: -2px;
}

.ribbon-wrapper .ribbon {
  position: absolute;
  padding: 0px 0;
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
  text-align: center;
  background-color: #ebb134;
  color: #fff;
  width: 100px;
}

.ribbon.top-left {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  top: 15px;
  left: -25px;
}

.ribbon.top-right {
  top: 15px;
  right: -25px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.ribbon.bottom-left {
  bottom: 15px;
  left: -25px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.ribbon.bottom-right {
  right: -25px;
  bottom: 15px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.ribbon.white {
  background: #f0f0f0;
  color: #555;
}
.ribbon.black {
  background: #333;
}
.ribbon.grey {
  background: #999;
}
.ribbon.blue {
  background: #39d;
}
.ribbon.green {
  background: #2c7;
}
.ribbon.turquoise {
  background: #1b9;
}
.ribbon.purple {
  background: #95b;
}
.ribbon.red {
  background: #e43;
}
.ribbon.orange {
  background: #e82;
}
.ribbon.yellow {
  background: #ec0;
}

/* Show the meetups tables with the same height */
@media screen and (min-width: 768px) {
  .meetup-tables {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}
</style>
