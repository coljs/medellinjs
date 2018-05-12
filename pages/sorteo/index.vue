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
              <h1>Ganador:</h1>
              <div id="info-winner">
                <div class="floating-box">
                  <img :src="ganador.photo">
                </div>
                <div class="floating-box">
                  <div id="name">{{ganador.name}}</div>
                  <div id="id">{{ganador.id}}</div>
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
        attendance: [],
        ganador: {}
      }
    },
    mounted () {
      let self = this
      const meetup = 'https://api.meetup.com/MedellinJS/events/249414634/attendance'

      jsonp(meetup, {}, function (err, data) {
        if (err) {
          console.error('Error fetching next meetups from MeetupAPI')
          return
        }
        let attendance = data.data
        let ganadorIndex = Math.floor(Math.random() * (attendance.length + 1))
        let ganadorInfo = attendance[ganadorIndex].member
        let ganador = { id: ganadorInfo.id, name: ganadorInfo.name, photo: ganadorInfo.photo.photo_link }

        self.attendance = data.data
        self.ganador = ganador
      })
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

  section div#info-winner .floating-box {
    display: inline-block;
    margin: 10px;
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
</style>
