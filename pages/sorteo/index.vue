<template>
  <div id="wrapper">
    <header>
      <div class="container">
        <h1 id="logo">
          Sorteos MedellinJS
        </h1>
      </div>
    </header>
    <!-- /header -->
    <div id="main">
      <section>
        <div class="container">
          <div v-once data-meetup-group-url-name="MedellinJS"></div>
        </div>
      </section>
    </div>
    <!-- #main -->
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppFooter,
  },
  mounted() {
    const raffleScript = document.createElement('script')
    raffleScript.setAttribute('src', 'https://unpkg.com/meetup-raffle-widget')
    document.head.appendChild(raffleScript)
  },
}
</script>

<style scoped>
/* =Template
  -------------------------------------------------------------- */
#wrapper {
  padding-top: 0;
}
#main {
  padding-top: 0px;
  background-color: aliceblue;
}

section {
  padding: 0;
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
  height: 100px;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #0683c9;
}
header h1#logo {
  display: inline-block;
  line-height: 100px;
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
<style>
div[data-meetup-group-url-name] h1,
div[data-meetup-group-url-name] h2,
div[data-meetup-group-url-name] h3,
div[data-meetup-group-url-name] h4,
div[data-meetup-group-url-name] h5,
div[data-meetup-group-url-name] h6 {
  text-transform: none;
}
</style>
