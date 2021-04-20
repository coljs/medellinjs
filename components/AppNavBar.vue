<template>
  <!--------------- Navbar -------------->
  <nav
    class="navbar navbar-default affix-top"
    data-spy="affix"
    data-offset-top="500"
  >
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#main-nav-collapse"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">MedellínJS</a>
      </div>
      <div id="main-nav-collapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a @click="scrollSection('heroes-area')">Héroes</a></li>
          <li><a @click="scrollSection('sponsors-area')">Sponsors</a></li>
          <li><a @click="scrollSection('team-area')">Organizadores</a></li>
          <li>
            <a @click="scrollSection('communityPartners-area')"
              >Community Partners</a
            >
          </li>
          <li>
            <a
              href="//docs.google.com/spreadsheets/d/1S5wKPlgxg-sDEyOQQr0NaxXwE4g3zg2oEUgxn_ylSmA/edit#gid=0"
              target="_blank"
              >Cuentas</a
            >
          </li>
          <li><nuxt-link to="/fundacion"> Fundación </nuxt-link></li>
          <li class="nav-download">
            <a @click="scrollSection('contact-area')">Inscribe tu charla</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import scrollTo from '@/assets/js/scroll-to'
export default {
  methods: {
    scrollSection(section) {
      scrollTo(window, document)(document.getElementById(section).offsetTop)
    },
  },
}
</script>
