<template>
  <!--------------- Navbar -------------->
  <nav class="navbar navbar-default affix-top" data-spy="affix" data-offset-top="500">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.html">MEDELLÍN JS</a>
      </div>
      <div class="collapse navbar-collapse" id="main-nav-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a @click="scrollSection('next-meetups-area')">Eventos</a></li>
          <li><a @click="scrollSection('heroes-area')">Héroes</a></li>
          <li><a @click="scrollSection('community-area')">Comunidad</a></li>
          <li><a @click="scrollSection('sponsors-area')">Sponsors</a></li>
          <li><a @click="scrollSection('team-area')">Organizadores</a></li>
          <li class="nav-download"><a @click="scrollSection('contact-area')">Inscribe tu charla</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import scrollTo from '@/assets/js/scroll-to'
  export default {
    methods: {
      scrollSection (section) {
        scrollTo(window, document)(document.getElementById(section).offsetTop)
      }
    }
  }
</script>

