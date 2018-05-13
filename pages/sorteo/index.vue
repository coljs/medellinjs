<template>
  <div id="wrapper">
    <header>
        <div class="container">
            <h1 id="logo">
                Sorteos MedellinJS
            </h1>
        </div>
    </header><!-- /header -->
    <div id="main">
      <section>
        <div class="container">
          <div>
            <div class="row">
              <div class="col-md-2 text-right">
                <label id="label-meetup" for="meetup-id">Meetup ID:</label>
              </div>
              <div class="col-md-3">
                <input id="meetup-id" type="text" v-model="meetupID">
              </div>
              <div class="col-md-6">
                <button class="button" v-on:click="searchAttendence()">Cargar asistentes</button>
                <button class="button" v-on:click="searchWinner()">Ganador</button>
              </div>
            </div>
          </div>
          <div class="row">
            <select class="col-md-6" disabled size="13" v-if="show.attendance">
              <option class="animated slideInUp" v-for="person in attendance" :key="person.member.id">{{person.member.name}}</option>
            </select>

            <div class="container animated zoomInDown col-md-6" v-if="show.winner">
              <h1>Ganador:</h1>
              <div id="info-winner">
                <div>
                  <img :src="ganador.photo">
                </div>
                <div>
                  <div id="name">{{ganador.name}}</div>
                  <div id="id">{{ganador.id}}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div><!-- #main -->
    <app-footer />
  </div>
</template>

<script>
  import AppFooter from '~/components/AppFooter'
  import jsonp from 'jsonp'

  export default {
    components: {
      AppFooter: AppFooter
    },
    data () {
      return {
        ganador: {},
        attendance: [],
        meetupID: '249414634',
        show: {
          attendance: false,
          winner: false
        }
      }
    },
    methods: {
      searchAttendence: function () {
        let self = this
        const meetup = 'https://api.meetup.com/MedellinJS/events/' + self.meetupID + '/attendance'
        jsonp(meetup, {}, function (err, data) {
          if (err) {
            console.error('Error fetching next meetups from MeetupAPI')
            self.attendance = []
            self.show.attendance = false
            return
          }
          self.show.attendance = true
          self.attendance = data.data
        })
      },
      searchWinner: function () {
        let self = this
        let ganadorIndex = Math.floor(Math.random() * (self.attendance.length + 1))
        let ganadorInfo = self.attendance[ganadorIndex].member
        let ganador = { id: ganadorInfo.id, name: ganadorInfo.name, photo: ganadorInfo.photo.photo_link }
        self.ganador = ganador
        self.show.winner = true
      }
    }
  }
</script>

<style scoped>
  /* =Template
  -------------------------------------------------------------- */
  #main {
    padding-top: 50px;
    background-color: aliceblue;
  }
  section {
    padding: 60px 0;
  }

  section h1 {
    text-align: center;
  }

  section div#info-winner {
    text-align: center;
  }

  section div#info-winner img {
    border-radius: 50%;
  }

  section div#name {
    top: 30px;
    font-size: 50px;
  }

  section div#id {
    font-size: 30px;
  }

  /* =Header
  -------------------------------------------------------------- */
  header {
    text-align: center;
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #0683c9;
  }
  header h1#logo {
    display: inline-block;
    line-height: 150px;
    font-family: "Oswald", sans-serif;
    font-size: 60px;
    color: white;
    font-weight: 400;
  }

  button {
    background-color: #1193d4;
    color: white;
    padding: 12px 20px;
    margin-right: 10px;
    border-radius: 8px;
    font-family: Raleway,sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    border-radius: 4px;
  }

  button:hover, button:active {
    background-color: #0683c9;
  }

  select {
    border: 0;
    text-align: center;
    font-size: 30px;
    font-family: Raleway,sans-serif;
  }
  label#label-meetup {
    margin-top: 10px;
  }
  input#meetup-id{
    border-radius: 8px;
    margin-top: 5px;
    border: 1px solid #1193d4;
  }

</style>
