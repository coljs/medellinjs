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
                <label id="label-meetup" for="meetup">Select meetup:</label>
              </div>
              <div class="col-md-5">
                <b-form-select v-model="meetupID" :options="meetups" class="select-meetups"></b-form-select>
              </div>
              <div class="col-md-5">
                <button class="button" v-on:click="searchAttendence()">Cargar asistentes</button>
                <button class="button" v-on:click="searchWinner()">Ganador</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="list-attendance ruleta col-md-8 row" disabled size="13" v-if="show.attendance">
              <div class="col-md-4 animated fadeIn" v-for="person in attendance" v-bind:key="person.member.id">
                {{person.member.name}}
              </div>
            </div>

            <div class="container animated zoomInDown col-md-4" v-if="show.winner">
              <h1>Ganador:</h1>
              <div id="info-winner">
                <div>
                  <img :src="winner.photo">
                </div>
                <div>
                  <div id="name">{{winner.name}}</div>
                  <div id="id">{{winner.id}}</div>
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
        meetups: [],
        winner: {},
        attendance: [],
        meetupID: null,
        show: {
          attendance: false,
          winner: false
        }
      }
    },
    methods: {
      getMeetups () {
        let self = this
        const url = 'https://api.meetup.com/MedellinJS/events?desc=true&page=2'
        jsonp(url, {}, function (err, data) {
          if (err) {
            alert(err)
          }
          self.meetups = data.data.map((item) => { return { value: item.id, text: item.name } })
        })
      },
      searchAttendence () {
        let self = this
        if (!self.meetupID) {
          return
        }
        const meetup = 'https://api.meetup.com/MedellinJS/events/' + self.meetupID + '/attendance'
        jsonp(meetup, {}, function (err, data) {
          if (err || data.data.errors) {
            console.error('Error fetching next meetups from MeetupAPI')
            self.attendance = []
            self.show.attendance = false
            return
          }
          self.attendance = data.data
          self.show.attendance = true
        })
      },
      searchWinner () {
        let self = this
        let winnerIndex = Math.floor(Math.random() * (self.attendance.length + 1))
        let winnerInfo = self.attendance[winnerIndex].member
        self.winner = { id: winnerInfo.id, name: winnerInfo.name, photo: winnerInfo.photo.photo_link }
        self.show.winner = true
      }
    },
    mounted () {
      let self = this
      self.getMeetups()
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

  .list-attendance {
    position: relative;
    text-align: center;
    overflow: hidden;
    box-shadow: inset 0 6px 8px -9px #44637e, inset 0 -6px 8px -9px #44637e;
  }

  .select-meetups {
    font-size: 1em;
  }
  /* Futura funcionalidad
  @keyframes ruleta {
    0% {transform: translateY(-1000px);}
    100% {transform: translateY(0);}
  }

  .ruleta div {
    animation-name: ruleta;
    animation-timing-function: cubic-bezier(0,0,.9,.99);
    animation-duration: 1s;
    animation-iteration-count: 5;
    animation-fill-mode: forwards;
    animation-direction: initial;
  }*/
</style>
