<template>
  <div id="team-area" class="section section-padding-extra section_bg">
    <div class="container">
      <div class='row'>
          <div class='col-md-6 col-md-offset-3 text-center'>
            <div class='section-heading'>
              <h2 class='section-title'>Equipo Organizador</h2>
            </div>
          </div>
      </div>
      <div class="row">
        <div class="team-members">
          <div class="col-md-4 col-sm-6" v-for="(organizer, idx) in organizers" :key="idx">
            <div class="team-member text-center wow animated fadeInUp" data-wow-duration="1.5s">
              <div class="member-mock">
                  <img v-bind:src="organizer.avatar" :alt="organizer.name">
              </div>
              <h4 class="member-name">{{ organizer.name }}</h4>
              <span class="member-work">Co - Organizador</span>
              <p>{{ organizer.bio }}</p>
              <div class="member-connections">
                <a target="_blank" v-bind:href="'https://twitter.com/' + organizer.twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a target="_blank" v-bind:href="'https://github.com/'  + organizer.github">
                  <i class="fab fa-github"></i>
                </a>
                <a target="_blank" v-bind:href="organizer.website">
                  <i class="fa fa-home"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import organizers from '@/assets/data/organizadores.js'
  export default {
    data () {
      return {
        organizers
      }
    }
  }
</script>
